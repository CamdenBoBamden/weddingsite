import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
class Schedule extends Component {
    render() {
        return (
            <Grid item xs={10} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    Schedule of Events
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    <ul>
                        <li>10/25 – 10/30 Cam and Em’s travel dates</li>
                        <li>
                            10/27 THURSDAY Welcome Dinner Time and location TBD
                            (on-site)
                        </li>
                        <li>
                            10/28 FRIDAY Wedding Day! 5:00 PM Ceremony at the
                            Beachfront Gazebo 5:30 – 6:30 PM Cocktail Hour at
                            TBD 6:30 – 10:30 PM Reception Dinner at the Beach
                            10:30 PM onwards: Find a bar to continue the party!
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
