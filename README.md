# Protractor_TC_email-01

## Installation commands
    npm install -g protractor
    webdriver-manager update

## Start web driver
    webdriver-manager start

## Command to execute 

1)Clone this repo and go to Protractor_TC_email-01 dir

2)Replace xxx and yyy with corresponding values before running the command
    protractor config.js \
    --params.login.email='xxx@gmail.com' \
    --params.login.password='yyy' \
    --params.login.sendtoemail='xxx@gmail.com' 
