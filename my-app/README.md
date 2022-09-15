1. Design the structure

- APP
  - CurrentCity
    - Weather
      - Temperature
      - Visibility
      - Metas 
    - Name
  - Forecast



2. Create a static page


https://api.openweathermap.org/data/2.5/weather?q=Adelaide&appid=a10da9ff4949dfe4dfbf9657c0d76e7f
units = standard  imperial metric 
api-key: a10da9ff4949dfe4dfbf9657c0d76e7f


https://api.openweathermap.org/data/2.5/forecast?q=Adelaide&appid=a10da9ff4949dfe4dfbf9657c0d76e7f
api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid={API key}