import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
class Schedule extends Component {
    render() {
        return (
            <Grid item xs={11} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    <em>Schedule of Events</em>
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem 0' }}
                >
                    <ul>
                        <li style={{ paddingBottom: '1rem' }}>
                            10/25 – 10/30 Cam and Em’s travel dates
                        </li>
                        <li style={{ paddingBottom: '1rem' }}>
                            10/27 THURSDAY Welcome Dinner
                            <ul>
                                <li>Time and location TBD (on-site)</li>
                            </ul>
                        </li>
                        <li style={{ paddingBottom: '1rem' }}>
                            10/28 FRIDAY Wedding Day!
                            <ul>
                                <li>
                                    5:00 PM Ceremony at the Beachfront Gazebo
                                </li>
                                <li>5:30 – 6:30 PM Cocktail Hour at TBD</li>
                                <li>
                                    6:30 – 10:30 PM Reception Dinner on the
                                    Beach
                                </li>
                                <li>
                                    10:30 PM onwards: Find a bar to continue the
                                    party!
                                </li>
                            </ul>
                        </li>
                        <li>
                            Rest of your stay: play, eat, drink, lounge, go on
                            excursions!
                        </li>
                    </ul>
                </Typography>
            </Grid>
        )
    }
}

export default Schedule
