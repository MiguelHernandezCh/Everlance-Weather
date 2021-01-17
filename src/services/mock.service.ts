export const getResultByQuery = () => {
    return [{"title":"San Francisco","location_type":"City","woeid":2487956,"latt_long":"37.777119, -122.41964"},{"title":"San Diego","location_type":"City","woeid":2487889,"latt_long":"32.715691,-117.161720"},{"title":"San Jose","location_type":"City","woeid":2488042,"latt_long":"37.338581,-121.885567"},{"title":"San Antonio","location_type":"City","woeid":2487796,"latt_long":"29.424580,-98.494614"},{"title":"Santa Cruz","location_type":"City","woeid":2488853,"latt_long":"36.974018,-122.030952"},{"title":"Santiago","location_type":"City","woeid":349859,"latt_long":"-33.463039,-70.647942"},{"title":"Santorini","location_type":"City","woeid":56558361,"latt_long":"36.406651,25.456530"},{"title":"Santander","location_type":"City","woeid":773964,"latt_long":"43.461498,-3.810010"},{"title":"Busan","location_type":"City","woeid":1132447,"latt_long":"35.170429,128.999481"},{"title":"Santa Cruz de Tenerife","location_type":"City","woeid":773692,"latt_long":"28.46163,-16.267059"},{"title":"Santa Fe","location_type":"City","woeid":2488867,"latt_long":"35.666431,-105.972572"}]
}

export const getResultByCoords = () => {
    return [{"distance":14578,"title":"San Francisco","location_type":"City","woeid":2487956,"latt_long":"37.777119, -122.41964"},{"distance":23229,"title":"Oakland","location_type":"City","woeid":2463583,"latt_long":"37.80508,-122.273071"},{"distance":42510,"title":"Mountain View","location_type":"City","woeid":2455920,"latt_long":"37.39999,-122.079552"},{"distance":60260,"title":"San Jose","location_type":"City","woeid":2488042,"latt_long":"37.338581,-121.885567"},{"distance":83413,"title":"Santa Cruz","location_type":"City","woeid":2488853,"latt_long":"36.974018,-122.030952"},{"distance":133032,"title":"Sacramento","location_type":"City","woeid":2486340,"latt_long":"38.579060,-121.491013"},{"distance":256230,"title":"Fresno","location_type":"City","woeid":2407517,"latt_long":"36.740681,-119.785728"},{"distance":259113,"title":"Lake Tahoe","location_type":"City","woeid":23511744,"latt_long":"39.021400,-120.044823"},{"distance":398227,"title":"Bakersfield","location_type":"City","woeid":2358492,"latt_long":"35.351189,-119.024063"},{"distance":550108,"title":"Los Angeles","location_type":"City","woeid":2442047,"latt_long":"34.053490,-118.245323"}]
}

export const getLocationData = () => {
    return {"consolidated_weather":[{"id":6100911538569216,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"NW","created":"2021-01-16T21:20:16.499921Z","applicable_date":"2021-01-16","min_temp":11.925,"max_temp":17.439999999999998,"the_temp":16.52,"wind_speed":2.3953023894641956,"wind_direction":309.85029440973994,"air_pressure":1021.5,"humidity":72,"visibility":13.4713274477054,"predictability":70},{"id":4722592326877184,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"N","created":"2021-01-16T21:20:20.255709Z","applicable_date":"2021-01-17","min_temp":11.36,"max_temp":18.525,"the_temp":17.79,"wind_speed":2.8143543966117868,"wind_direction":3.2500000000000075,"air_pressure":1019.5,"humidity":58,"visibility":14.420471943847927,"predictability":70},{"id":4962614208626688,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"NNE","created":"2021-01-16T21:20:22.872196Z","applicable_date":"2021-01-18","min_temp":10.91,"max_temp":21.0,"the_temp":20.689999999999998,"wind_speed":11.471639234290409,"wind_direction":22.0,"air_pressure":1014.5,"humidity":29,"visibility":15.862053109838543,"predictability":68},{"id":5010219089264640,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"NNE","created":"2021-01-16T21:20:27.457394Z","applicable_date":"2021-01-19","min_temp":11.274999999999999,"max_temp":17.520000000000003,"the_temp":16.419999999999998,"wind_speed":16.598861467655556,"wind_direction":22.500000000000004,"air_pressure":1013.5,"humidity":25,"visibility":15.774750457329198,"predictability":68},{"id":6705017294684160,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"NE","created":"2021-01-16T21:20:29.275937Z","applicable_date":"2021-01-20","min_temp":10.42,"max_temp":16.435000000000002,"the_temp":15.265,"wind_speed":3.661686445841618,"wind_direction":49.215648784079455,"air_pressure":1016.5,"humidity":34,"visibility":15.496997534399108,"predictability":68},{"id":4729339502395392,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"WNW","created":"2021-01-16T21:20:32.781909Z","applicable_date":"2021-01-21","min_temp":8.35,"max_temp":13.120000000000001,"the_temp":12.07,"wind_speed":5.767615724170842,"wind_direction":286.5,"air_pressure":1019.0,"humidity":67,"visibility":9.999726596675416,"predictability":70}],"time":"2021-01-16T15:20:10.154302-08:00","sun_rise":"2021-01-16T07:23:22.729857-08:00","sun_set":"2021-01-16T17:15:07.804054-08:00","timezone_name":"LMT","parent":{"title":"California","location_type":"Region / State / Province","woeid":2347563,"latt_long":"37.271881,-119.270233"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"San Francisco","location_type":"City","woeid":2487956,"latt_long":"37.777119, -122.41964","timezone":"US/Pacific"}
}