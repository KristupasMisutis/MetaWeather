# WEB system
- [ ] MetaWeather

## Description
- [ ] Website to provide weather information all around the world

## Entity definition
- [ ] parent
    - [ ] title
    - [ ] location_type
    - [ ] latt_long
    - [ ] time	
    - [ ] sun_(rise|set)
    - [ ] timezone_name
- [ ] consolidated_weather
    - [ ] id
    - [ ] applicable_date
    - [ ] weather_state_name
    - [ ] weather_state_abbr
    - [ ] wind_speed
    - [ ] wind_direction
    - [ ] wind_direction_compass
    - [ ] (min|max|the)_temp
    - [ ] air_pressure
    - [ ] humidity
    - [ ] visibility
    - [ ] predictability
    
- [ ] sources
    - [ ] title
    - [ ] url

## API definition
- [ ] Vilnius city weather on the current date https://www.metaweather.com/api/location/44418/2013/4/27/

GET /api/location/search/?vilnius=(vilnius) location search
PUT 	/static/img/weather/X.svg icon display
GET /api/location/2487956/ for location
GET /api/location/(woeid)/(date)/ for date
