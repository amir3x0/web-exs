:: this bat file is used to set git repository
:: to run use .\set_git.bat
@echo off
:: add :: before the next row to initialize the repository
::exit /b


git init
git add .
git commit -m "4 week commit"
git branch -M main
git remote add origin https://github.com/amir3x0/web-exs.git
git push -u origin main