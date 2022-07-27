import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import Portal from './Portal'

function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = (e) => {
    if (onClose) {
      onClose(e)
    }
  }

  useEffect(() => {
    document.body.style.cssText = `position: fixed; width:100%;`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = `position: ""; top: "";`
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper id="modal-wrap"
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={visible}
      >{closable && <CloseBtn className="modal-close" onClick={close} ><FontAwesomeIcon icon={faTimesCircle} className="fa_lm_style2"/></CloseBtn>}
        <ModalInner tabIndex={0} className="modal-inner">
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  )
}

Modal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
}

Modal.propTypes = {
  visible: PropTypes.bool,
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 999;
  
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width:100%;
  height:100%;
  z-index: 999;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  text-align:center;
  overflow-y: scroll;
`
const CloseBtn = styled.div`
    position: absolute;
    z-index: 1000;
    right: 15px;
    top: 10px;
`

export default Modal