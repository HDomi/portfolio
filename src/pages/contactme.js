import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
const Contactme =() => {
    const form  = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rn3s8bb', 'template_uxcl5rr', form.current, 'k_8IR-1N5UHZVftBj')
        .then((result) => {
            alert((result.text)+"! 전송이 완료되었습니다.");
        }, (error) => {
            alert((error.text)+"! 전송실패, hwangjae1139@gmail.com으로 직접보내주시기 바랍니다.");
        });
    };
  
    
    return(
        <div className="cnt_wrap">
            <div className="cnt">
                <div className="cnt_tit cnt_tit_contact">Contact ME!</div>
                <div className="cnt_sec cntac_sec">
                    <div className="cntac_box">
                        <div className="cntac_map">
                            <div className="cntac_mapp" dangerouslySetInnerHTML={{ __html: "<iframe style='border: 1px solid rgba(0, 0, 0, 0.1); border-radius:8px;' max-width='500px' width='100%' height='200px' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.299203054681!2d127.17510481530238!3d37.240607979860236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b51c8e1629001%3A0xbce2a0332ff3c470!2z7Jqp7J247Iuc7LKt!5e0!3m2!1sko!2skr!4v1658886688102!5m2!1sko!2skr' allowfullscreen/>"}} />
                        </div>
                        <div className="cntac_mail">
                            <form ref={form} onSubmit={sendEmail}>
                                <ul>
                                    <li><input type="text" className="cntac_txtbar" placeholder="제목" name="user_title"/></li>
                                    <li><input type="text" className="cntac_txtbar" placeholder="전화번호 *선택사항*" name="user_phone"/></li>
                                    <li><input type="email" className="cntac_txtbar" placeholder="이메일" name="user_email"/></li>
                                    <li><textarea className="cntac_txtbar txtbar_rec" placeholder="내용" name="user_message"/></li>
                                    <button type="submit" className="cntac_btn" value="Send">보내기</button>
                                </ul>
                            </form>      
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
    
}

export default Contactme;
