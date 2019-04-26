# WEB system
- [ ] MetaWeather

## Description
- [ ] Website to provide weather information all around the world

## Entity definition
- [ ] parent
    - [ ] title (string(lenght=60))
    - [ ] location_type (string(lenght=20))
- [ ] consolidated_weather
    - [ ] id (integer(lenght=10000))
    - [ ] applicable_date (date)
    - [ ] weather_state_name (string(lenght=22))
    - [ ] wind_speed (float(lenght=1000000)
    - [ ] (min|max|the)_temp (integer(lenght=100000))
- [ ] sources
    - [ ] title (string(lenght=100000)
    - [ ] url (string(lenght=100000)

## API definition
- [ ] Vilnius city weather on the current date https://www.metaweather.com/api/location/44418/2013/4/27/
https://wireframe.cc/LK6uOk

GET location /api/location/search/?vilnius=(vilnius) 
400 - {error: 'invalid location search'}

GET location /api/location/479616/ for Vilnius location by WOEID
POST location /api/location/479616/ for Vilnius location by WOEID

405 - {error: 'Method Not Allowed'}

GET date /api/location/(woeid)/(date)/


404 - {error: 'page not found'}

500 - {error: 'server error'}
