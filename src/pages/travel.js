import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
class Travel extends Component {
    render() {
        return (
            <Grid item xs={10} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    <em>Travel</em>
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    We are working with travel agents from Here and Away Travel,
                    Jess Sbriscia & Jayme Cornine. They have been incredibly
                    helpful to us and will be assisting everyone in booking
                    hotel rooms in our group and book flights as needed (you can
                    book your own flights if you prefer). They will also arrange
                    our airport transfers (shuttle) between the airport and the
                    hotel. Airport transfers (CUN airport ↔ The Fives Beach
                    Hotel): USA Transfers Travel Insurance: InsureMyTrip.com US
                    Passport: Travel.State.gov
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    protocols, masks, testing The Fives Test Antigen / PCR
                    (thefiveshotels.com) Going to MX: Coming back to the US: All
                    air passengers 2 years or older with a flight departing to
                    the US from a foreign country are required show a negative
                    COVID-19 viral test result taken no more than 1 day before
                    travel, or documentation of having recovered from COVID-19
                    in the past 90 days, before they board their
                    flight.International Travel | CDC
                </Typography>
            </Grid>
        )
    }
}

export default Travel
