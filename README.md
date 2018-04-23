# WeatherForcast
install angular-cli 

"npm  install  -g @angular/cli"

## You need to open the chrome in disable security mode
Got  here :  "C:\Program Files (x86)\Google\Chrome\Application" open CMD using (right click + shift)
run this command : 
" chrome.exe  --disable-web-security"

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Running unit tests

Run `ng test` to execute the unit tests via. 
unit test is written in data.service.spec.ts using karma.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via . It is written using protactor.

## You need to open the chrome in disable security mode
Got to here :  "C:\Program Files (x86)\Google\Chrome\Application" open CMD using (right click + shift)
run this command : 
" chrome.exe  --disable-web-security"

The reason being chrome will not allow http.get without the header.
The openweathermap.org service api has disabled (Allow-Headers)
