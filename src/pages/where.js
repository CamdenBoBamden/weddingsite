import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
class WhereAreWeGoing extends Component {
    render() {
        const images = [
            { src: '../assets-fives/resort_pano.jpg', alt: 'cantina' },
            { src: '../assets-fives/resort_pano.jpg', alt: 'cantina' },
        ]

        return (
            <Grid item xs={10} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    <em>I’m in! Where are we going?</em>
                </Typography>
                <Grid container justifyContent={'center'}>
                    <Grid item xs={11} md={9}>
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showArrows="false"
                            showStatus="false"
                            showIndicators={false}
                            statusFormatter={() => {}}
                            interval="3500"
                            transitionTime="1500"
                        >
                            <div>
                                <img
                                    src={require('../assets-fives/resort_pano.jpg')}
                                    alt="cantina"
                                />
                            </div>
                            <div>
                                <img
                                    src={require('../assets-fives/resort_room pool.jpg')}
                                    alt="cantina"
                                />
                            </div>
                            <div>
                                <img
                                    src={require('../assets-fives/resto_mestizo.jpg')}
                                    alt="cantina"
                                />
                            </div>
                            <div>
                                <img
                                    src={require('../assets-fives/resto_seaolive.jpg')}
                                    alt="cantina"
                                />
                            </div>
                            <div>
                                <img
                                    src={require('../assets-fives/resto_taco cart.jpg')}
                                    alt="cantina"
                                />
                            </div>
                        </Carousel>
                    </Grid>
                </Grid>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    We are staying at The Fives Beach Hotel & Residences, a
                    family-friendly, all-inclusive resort in Playa Del Carmen,
                    Mexico, located just 40-min south of Cancun International
                    Airport (CUN). The wedding will be on-site.
                </Typography>
            </Grid>
        )
    }
}

export default WhereAreWeGoing
