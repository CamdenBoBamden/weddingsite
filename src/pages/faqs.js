import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
class FAQs extends Component {
    render() {
        return (
            <Grid item xs={11} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    <em>FAQs</em>
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    <ul>
                        <li>
                            Additional hotel info? <br />
                            <ul>
                                <a
                                    href="https://www.thefiveshotels.com/resorts/the-fives-beach/amenities"
                                    rel="noopener noreferrer nofollow"
                                >
                                    Amenities
                                </a>
                                {' // '}
                                <a
                                    href="https://admin.thefives.com.mx/landing/entertainment?fbclid=IwAR0KbTRLX4g-NR3n31aA9qX5f1vG_NA1MzH66bBHaWruPB5QAJWIrdesin4"
                                    rel="noopener noreferrer nofollow"
                                >
                                    Activities Schedule
                                </a>
                                {' // '}
                                <a
                                    href="https://landings.thefiveshotels.com/restaurantes-2020_temp?fbclid=IwAR08OSkqGC5sGiK1LEbcuBXPDWNlatPLqp-XGZFc-lK0JZkzm844aZMjABI"
                                    rel="noopener noreferrer nofollow"
                                >
                                    15 Restaurants & Bars(Menus)
                                </a>
                            </ul>
                            <br />
                        </li>

                        <li>What’s included in all-inclusive package?</li>
                        <ul>
                            Room, food (breakfast, lunch, dinner, snacks, room
                            snacks), beverages (alcoholic & non-alcoholic),
                            resort activities
                        </ul>
                    </ul>
                    <ul>
                        <li>
                            What’s NOT included in the all-inclusive package?
                        </li>
                        <ul>
                            Room service fee $3.50 per order (all food is
                            included, just pay for service fee) <br />
                            Coffee Shop (but don’t worry— coffee, cappuccinos,
                            lattes etc are available at the restaurants)
                            <br />
                            Smoothie Bar (smoothies are included, but protein
                            powders are extra) <br />
                            Bali beds are available for rent per day (beach
                            loungers are available first come first serve)
                        </ul>
                    </ul>
                    <ul>
                        <li> What’s the weather like in October?</li>
                        <ul>
                            Average highs 85F, lows 78F, tail end of rainy
                            season
                        </ul>
                    </ul>
                    <ul>
                        <li> Will I have cellphone service?</li>
                        <ul>
                            Typically you would just put your phone on Airplane
                            Mode and use Hotel wifi; use Facebook
                            Messenger/WhatsApp for messaging each other; Check
                            your phone plan for International Roaming
                        </ul>
                    </ul>
                </Typography>
            </Grid>
        )
    }
}

export default FAQs
