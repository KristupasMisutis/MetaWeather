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
  

## UI definition
- [ ] Define the structure of how visually the WEB system is going to look like
- [ ] Should have at least one view defined with https://wireframe.cc (or other wireframe tool):
- [ ] The view should have a title
- [ ] The view should have a description of a service provided by web system
- [ ] The view should include at least 2 UI components:
    - [ ] A component to display multiple entities with all their attribute values visible. It should be posible to remove and edit selected entity.
        - [ ] Depending on chosen header of API method that returns multiple entities, it should be posible to select specific 10 entities starting index, sort entities by attribute, filter entities by attribute pattern, or other (should be approved by Product Owner (PO))
    - [ ] A component to create a new entity/edit existing entity. It should be posbile to create new entity and edit selected entity
        - [ ] Each attribute should have a dedicated editor field: text box for string or number, checkbox or radio buttons for boolean, date picker for date, etc.
