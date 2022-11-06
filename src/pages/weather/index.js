import React, { useEffect, useState } from 'react'
import { Grid, Button } from '@mui/material'
function Weather () {
    const [cityLocation, setCityLocation] = useState('City?')
    const [forecast, setForecast] = useState(null)
    const [showWeather, setShowWeather] = useState(false)

    const httpRequest = new XMLHttpRequest()

    const success = data => {
        console.log('Success ', data)
        getWeather(data.coords)
    }
    const getWeather = coords => {
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance')
            return false
        }
        httpRequest.onreadystatechange = alertContents
        httpRequest.open(
            'GET',
            `https://api.weather.gov/points/${coords.latitude},${coords.longitude}`
        )
        httpRequest.send()

        function alertContents () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    const res = JSON.parse(httpRequest.responseText)

                    setCityLocation(
                        res.properties.relativeLocation.properties.city
                    )
                    const forecast = res.properties.forecast

                    getHourlyForecast(`${forecast}`)
                } else {
                    alert('There was a problem with getting the weather.')
                }
            }
        }
    }

    const getHourlyForecast = url => {
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance')
            return false
        }
        httpRequest.onreadystatechange = alertContents
        httpRequest.open('GET', url)
        httpRequest.send()

        function alertContents () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    const res = JSON.parse(httpRequest.responseText)
                    setForecast(res)
                } else {
                    alert('There was a problem with getting the weather.')
                }
            }
        }
    }
    const error = error => {
        console.log('error', error)
        setCityLocation('Nope')
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error)
    }, [])

    const shouldShowWeather = () => {
        if (showWeather) {
            setShowWeather(!showWeather)
        } else {
            checkAvailableWeather()
        }
    }

    const checkAvailableWeather = () => {
        if (forecast !== null) {
            setShowWeather(!showWeather)
        } else {
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }

    return (
        <div>
            <Button onClick={() => shouldShowWeather()}>
                Camden's Weather - {cityLocation}
            </Button>
            {showWeather && (
                <Grid container justifyContent={'center'}>
                    {forecast &&
                        forecast.properties.periods.map((forecast, index) => {
                            return (
                                <Grid
                                    key={index}
                                    item
                                    lg={3}
                                    sm={6}
                                    style={{
                                        border: 'solid 2px black',
                                        backgroundColor: 'lightblue',
                                        borderRadius: '8px',
                                        width: '100%',
                                    }}
                                >
                                    <Grid item>{forecast.name}</Grid>{' '}
                                    <img
                                        src={forecast.icon}
                                        alt='weather-icon'
                                    />
                                    <Grid item>
                                        {' '}
                                        {forecast.detailedForecast}
                                    </Grid>
                                    <Grid item>
                                        {' '}
                                        {forecast.temperature}{' '}
                                        {forecast.temperatureUnit}
                                    </Grid>
                                </Grid>
                            )
                        })}
                </Grid>
            )}
        </div>
    )
}

export default Weather
