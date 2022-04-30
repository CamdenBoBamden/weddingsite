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
                            (10/25 – 10/30 are Cam and Em’s travel dates)
                        </li>
                        <br />
                        <li style={{ paddingBottom: '1rem' }}>
                            <strong>10/27 THURSDAY Welcome Dinner</strong>
                            <ul>
                                <li>Time and location TBD (on-site)</li>
                            </ul>
                        </li>{' '}
                        <br />
                        <li style={{ paddingBottom: '1rem' }}>
                            <strong>10/28 FRIDAY Wedding Day!</strong>
                            <ul>
                                <li>
                                    5:00 PM Ceremony at the Beachfront Gazebo
                                </li>
                                <li>
                                    Cocktail Hour and Reception Dinner on the
                                    Beach to follow
                                </li>
                            </ul>{' '}
                            <br />
                        </li>
                        <li>
                            Rest of your stay: Free play. Eat, drink, lounge, go
                            on excursions!
                        </li>
                    </ul>
                </Typography>
            </Grid>
        )
    }
}

export default Schedule
