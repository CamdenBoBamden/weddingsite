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
                    <ul>
                        <li>
                            <strong>TODAY</strong>: CHECK YOUR PASSPORT!
                        </li>
                        <ul>
                            <li>
                                Apply for a passport or check if your current
                                passport is valid!
                            </li>
                            <li>
                                Some airlines require 6 months validity past
                                your travel dates.
                            </li>
                            <li>
                                Your plane ticket must match the name on your
                                passport EXACTLY.
                            </li>
                        </ul>
                        <li></li>
                    </ul>
                    <ul>
                        <li>
                            <strong>MAY 31</strong>: Deadline to RSVP and put
                            down deposit for hotel booking
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>AUGUST 29 (T-60 days)</strong>: Full payment
                            due for hotel booking
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>OCTOBER 28 Wedding Day!</strong>
                        </li>
                    </ul>
                </Typography>
            </Grid>
        )
    }
}

export default ImportantDates
