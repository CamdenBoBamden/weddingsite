import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
class RoomRates extends Component {
    render() {
        return (
            <Grid item xs={11} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    <em>Room Rates</em>
                </Typography>
                <Grid container justifyContent={'center'}>
                    <Grid item md={12}>
                        <img
                            style={{ backgroundSize: 'fit', width: '80%' }}
                            src={require('../assets/image005.png')}
                            alt="room rates"
                        />
                    </Grid>
                    <Grid item md={12} style={{ marginTop: ' 1.5rem' }}>
                        <Typography
                            variant="subtitle"
                            align="left"
                            style={{ padding: '1.5rem' }}
                        >
                            Deluxe/1BR rates above are listed per PERSON.
                            2bed/2bath and 3bed/3bath rates are listed per ROOM.
                        </Typography>
                    </Grid>
                    <Grid item md={12} style={{ marginBottom: '1.5rem' }}>
                        <Typography variant="subtitle" align="left">
                            Ages 6 & under are free! 'Kids' are 6-18 years old.
                        </Typography>
                    </Grid>
                </Grid>
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
                                    src={require('../assets-fives/room_deluxe.jpg')}
                                    alt="deluxe room"
                                />
                                <Typography variant={'h6'}>
                                    Deluxe Room
                                </Typography>
                            </div>
                            <div>
                                <img
                                    src={require('../assets-fives/room_1BR.jpg')}
                                    alt="deluxe room"
                                />
                                <Typography variant={'h6'}>
                                    One Bedroom Resort Residence Room
                                </Typography>
                            </div>
                            <div>
                                <img
                                    src={require('../assets-fives/room_1br resort res.jpg')}
                                    alt="1br residential"
                                />
                                <Typography variant={'h6'}>
                                    One Bedroom Resort Residence
                                </Typography>
                            </div>

                            <div>
                                <img
                                    src={require('../assets-fives/room_3br.jpg')}
                                    alt="3 bedroom resort "
                                />
                                <Typography variant={'h6'}>
                                    Three Bedroom Resort Residence
                                </Typography>
                            </div>
                            <div>
                                <img
                                    src={require('../assets-fives/room_3br PH.png')}
                                    alt="3 bedroom penthouse"
                                />
                                <Typography variant={'h6'}>
                                    Three Bedroom Penthouse
                                </Typography>
                            </div>
                        </Carousel>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default RoomRates
