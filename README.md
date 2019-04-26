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

GET /api/location/search/?vilnius=(vilnius) location search
PUT 	/static/img/weather/X.svg icon display
GET /api/location/479616/ for Vilnius location
GET /api/location/(woeid)/(date)/ for date
