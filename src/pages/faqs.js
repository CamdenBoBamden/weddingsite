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
                    {`How to reach us? Cam 573-397-8143, Em 626-534-5773
                    Additional hotel info? Amenities // Activities // Kids Stuff
                    // 15 Restaurants & Bars (Menus) What to bring? What’s the
                    weather like in October? Cellphone service`}
                    <ul>
                        <li>What’s included in all-inclusive package?</li>
                        <ul>
                            Room, food (breakfast, lunch, dinner, snacks),
                            beverages (alcoholic & non-alcoholic), resort
                            activities
                        </ul>
                    </ul>
                    <ul>
                        <li>
                            What’s NOT included in the all-inclusive package?
                        </li>
                        <ul>
                            Room service fee $3.50 per order (all food is
                            included, just pay for service fee) Coffee Shop (but
                            don’t worry— coffee, cappuccinos, lattes etc are
                            available at the restaurants) Smoothie Bar
                            (smoothies are included, but protein powders are
                            extra) Bali beds are available for rent per day
                            (beach loungers are available first come first
                            serve) What to bring? *find packing list somewhere*
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
                            Typically just put your phone on Airplane Mode and
                            use Hotel wifi; use FB Messenger/WhatsApp for
                            messaging; Check your phone plan for international
                            roaming
                        </ul>
                    </ul>
                </Typography>
            </Grid>
        )
    }
}

export default FAQs
