export const getMockResultByQuery: any = () => {
    return [{"title": "San Francisco", "location_type": "City", "woeid": 2487956, "latt_long": "37.777119, -122.41964"}, {
        "title": "San Diego",
        "location_type": "City",
        "woeid": 2487889,
        "latt_long": "32.715691,-117.161720"
    }, {"title": "San Jose", "location_type": "City", "woeid": 2488042, "latt_long": "37.338581,-121.885567"}, {
        "title": "San Antonio",
        "location_type": "City",
        "woeid": 2487796,
        "latt_long": "29.424580,-98.494614"
    }, {"title": "Santa Cruz", "location_type": "City", "woeid": 2488853, "latt_long": "36.974018,-122.030952"}, {
        "title": "Santiago",
        "location_type": "City",
        "woeid": 349859,
        "latt_long": "-33.463039,-70.647942"
    }, {"title": "Santorini", "location_type": "City", "woeid": 56558361, "latt_long": "36.406651,25.456530"}, {
        "title": "Santander",
        "location_type": "City",
        "woeid": 773964,
        "latt_long": "43.461498,-3.810010"
    }, {"title": "Busan", "location_type": "City", "woeid": 1132447, "latt_long": "35.170429,128.999481"}, {
        "title": "Santa Cruz de Tenerife",
        "location_type": "City",
        "woeid": 773692,
        "latt_long": "28.46163,-16.267059"
    }, {"title": "Santa Fe", "location_type": "City", "woeid": 2488867, "latt_long": "35.666431,-105.972572"}]
}

export const getMockLocationData: any = () => {
    return {
        "consolidated_weather": [{
            "id": 6063937775730688,
            "weather_state_name": "Light Cloud",
            "weather_state_abbr": "lc",
            "wind_direction_compass": "NNW",
            "created": "2021-01-17T06:20:19.761941Z",
            "applicable_date": "2021-01-17",
            "min_temp": 11.455,
            "max_temp": 17.73,
            "the_temp": 18.985,
            "wind_speed": 6.081351638694027,
            "wind_direction": 339.5,
            "air_pressure": 1019.0,
            "humidity": 50,
            "visibility": 17.07248419231687,
            "predictability": 70
        }, {
            "id": 6213587136675840,
            "weather_state_name": "Clear",
            "weather_state_abbr": "c",
            "wind_direction_compass": "NNE",
            "created": "2021-01-17T06:20:22.365859Z",
            "applicable_date": "2021-01-18",
            "min_temp": 10.97,
            "max_temp": 20.175,
            "the_temp": 16.814999999999998,
            "wind_speed": 10.90453959507145,
            "wind_direction": 24.15982828658547,
            "air_pressure": 1018.0,
            "humidity": 35,
            "visibility": 16.616397737214665,
            "predictability": 68
        }, {
            "id": 5854665309683712,
            "weather_state_name": "Clear",
            "weather_state_abbr": "c",
            "wind_direction_compass": "N",
            "created": "2021-01-17T06:20:25.353834Z",
            "applicable_date": "2021-01-19",
            "min_temp": 11.675,
            "max_temp": 18.52,
            "the_temp": 18.08,
            "wind_speed": 10.30926805699515,
            "wind_direction": 357.4338021890954,
            "air_pressure": 1015.0,
            "humidity": 29,
            "visibility": 15.817314383997454,
            "predictability": 68
        }, {
            "id": 4786805359509504,
            "weather_state_name": "Clear",
            "weather_state_abbr": "c",
            "wind_direction_compass": "NNE",
            "created": "2021-01-17T06:20:28.403980Z",
            "applicable_date": "2021-01-20",
            "min_temp": 11.675,
            "max_temp": 17.415,
            "the_temp": 14.655000000000001,
            "wind_speed": 7.08962618767995,
            "wind_direction": 12.382074043288332,
            "air_pressure": 1013.0,
            "humidity": 44,
            "visibility": 14.459307643362761,
            "predictability": 68
        }, {
            "id": 4806212253122560,
            "weather_state_name": "Clear",
            "weather_state_abbr": "c",
            "wind_direction_compass": "NW",
            "created": "2021-01-17T06:20:31.194565Z",
            "applicable_date": "2021-01-21",
            "min_temp": 8.705,
            "max_temp": 14.120000000000001,
            "the_temp": 13.85,
            "wind_speed": 4.780064821442775,
            "wind_direction": 325.5,
            "air_pressure": 1016.0,
            "humidity": 55,
            "visibility": 9.999726596675416,
            "predictability": 68
        }, {
            "id": 5500987822309376,
            "weather_state_name": "Showers",
            "weather_state_abbr": "s",
            "wind_direction_compass": "WNW",
            "created": "2021-01-17T06:20:34.493296Z",
            "applicable_date": "2021-01-22",
            "min_temp": 8.945,
            "max_temp": 12.035,
            "the_temp": 12.95,
            "wind_speed": 8.610274795196055,
            "wind_direction": 290.0,
            "air_pressure": 1016.0,
            "humidity": 71,
            "visibility": 9.999726596675416,
            "predictability": 73
        }],
        "time": "2021-01-17T00:27:43.955311-08:00",
        "sun_rise": "2021-01-17T07:22:59.080230-08:00",
        "sun_set": "2021-01-17T17:16:10.689789-08:00",
        "timezone_name": "LMT",
        "parent": {"title": "California", "location_type": "Region / State / Province", "woeid": 2347563, "latt_long": "37.271881,-119.270233"},
        "sources": [{"title": "BBC", "slug": "bbc", "url": "http://www.bbc.co.uk/weather/", "crawl_rate": 360}, {
            "title": "Forecast.io",
            "slug": "forecast-io",
            "url": "http://forecast.io/",
            "crawl_rate": 480
        }, {"title": "HAMweather", "slug": "hamweather", "url": "http://www.hamweather.com/", "crawl_rate": 360}, {
            "title": "Met Office",
            "slug": "met-office",
            "url": "http://www.metoffice.gov.uk/",
            "crawl_rate": 180
        }, {"title": "OpenWeatherMap", "slug": "openweathermap", "url": "http://openweathermap.org/", "crawl_rate": 360}, {
            "title": "Weather Underground",
            "slug": "wunderground",
            "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
            "crawl_rate": 720
        }, {"title": "World Weather Online", "slug": "world-weather-online", "url": "http://www.worldweatheronline.com/", "crawl_rate": 360}],
        "title": "San Francisco",
        "location_type": "City",
        "woeid": 2487956,
        "latt_long": "37.777119, -122.41964",
        "timezone": "US/Pacific"
    }
}