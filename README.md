# WeatherForecast
link to repo: https://github.com/4jmon/WeatherForecast


*clone the repo:  "git clone https://github.com/4jmon/WeatherForecast.git"

*cd WeatherForecast

*npm install

*ng serve

## incase ng does not work
install angular-cli 
"npm  install  -g @angular/cli"

## You need to open the chrome in disable security mode
Go  here :  "C:\Program Files (x86)\Google\Chrome\Application" open CMD using (right click + shift)
run this command : 
"chrome.exe  --disable-web-security --user-data-dir"

*It will open a chrome browser and we will be using the instance of the chrome now on. You can use other browser too.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` in the browser that you have opened(disabled security). 


## Running unit tests

Run `ng test` to execute the unit tests. 
unit test is written in data.service.spec.ts using karma for the service and in app.component.spec.ts for the appcomponent.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests . It is written using protactor.

## You need to open the chrome in disable security mode
Go here :  "C:\Program Files (x86)\Google\Chrome\Application" open CMD using (right click + shift)
run this command : 
" chrome.exe  --disable-web-security  --user-data-dir"

The reason being chrome will not allow http.get without the header (Corejs problem).

The www.openweathermap.org service api has disabled (Access-Control-Allow-Origin)

www.openweathermap.org provides a sample api not a live one.

In live api we send username and password in Header.
