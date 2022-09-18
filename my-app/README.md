# Weather-app
A responsive weather app that could show weekly temperature, switch between Imperial/Metric units and enter in a location name to look up.


## Build
You can run following command to build the app

go to my-app directiory
```
cd my-app
```
install the npm package
```
npm i
```
then use  npm start to run the app
```
npm start
```

## Develop process

The weather-app is developed by folowing process

1. Design the component structure from a mockup

- APP
  - CurrentCity
    - Weather
      - Temperature
      - Metas 
    - CityName
      - Name
      - Visibility
  - Forecast
    - DailyWeather

2. Create a static version app.

3. Create API to fetch data and manage the data flow.

## Tool used

This app is developed using the folowing techologies besides React:

- styled-components
- axios
- MUI
- date-fns

