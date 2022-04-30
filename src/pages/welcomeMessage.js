import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
class WelcomeMessage extends Component {
    render() {
        return (
            <Grid item xs={11} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    Dearest friends and family,
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    We are getting married!!! In Mexico!!! We are dreaming of
                    several days of togetherness, friendship, and delicious food
                    & drinks on the beach. It would be an honor to celebrate
                    with the people we love most.
                </Typography>
                <Grid container justifyContent={'center'} alignItems="flex-end">
                    {/* <Grid item xs={4}>
                        <img
                            style={{
                                maxWidth: '100%',
                                backgroundSize: 'contain',
                            }}
                            src={require('../assets-fives/cam and em 1.jpg')}
                            alt="cam and em1"
                        />
                    </Grid> */}
                    <Grid item xs={8} md={6}>
                        <img
                            style={{
                                maxWidth: '100%',
                                backgroundSize: 'contain',
                            }}
                            src={require('../assets-fives/cam and em 3.jpg')}
                            alt="cam and em"
                        />
                    </Grid>

                    {/* <Grid item xs={4}>
                        <img
                            style={{
                                maxWidth: '100%',

                                backgroundSize: 'fit',
                            }}
                            src={require('../assets-fives/cam and em 2.jpg')}
                            alt="cam and em 2"
                        /> 
                    </Grid>*/}
                </Grid>
                <Typography variant="h4">{`Our wedding will be on`}</Typography>
                <Typography variant="h4">
                    {` Friday, October 28, 2022 5:00 PM `}
                </Typography>
                <Typography variant="h4">
                    {`in Playa Del Carmen, Mexico.`}
                </Typography>
            </Grid>
        )
    }
}

export default WelcomeMessage
