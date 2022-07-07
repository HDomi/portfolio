@echo off
color 0b
:Home
git status
echo Go commit?
set /p go=Press Enter :
goto run
setlocal

:run
set /p commit= *Commit TXT* :
goto runpage
pause

:runpage
git add .
git status
git commit -m "%commit%"
git push origin master
pause