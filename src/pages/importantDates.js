import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
class ImportantDates extends Component {
    render() {
        return (
            <Grid item xs={10} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    <em> Important Dates</em>
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    TODAY: CHECK YOUR PASSPORT! Apply for a passport or check if
                    your current passport is valid! Some airlines require 6
                    months validity past your travel dates. Your plane ticket
                    must match the name on your passport EXACTLY. MAY 31:
                    Deadline to RSVP and put down deposit for hotel booking
                    AUGUST 29 (T-60 days): Full payment due for hotel booking
                    <strong>OCTOBER 28 Wedding Day!</strong>
                </Typography>
            </Grid>
        )
    }
}

export default ImportantDates
