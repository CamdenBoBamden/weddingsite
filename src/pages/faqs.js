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
                                    target="_blank"
                                    href="https://www.thefiveshotels.com/resorts/the-fives-beach/amenities"
                                    rel="noopener noreferrer nofollow"
                                >
                                    Amenities
                                </a>
                                {' // '}
                                <a
                                    target="_blank"
                                    href="https://admin.thefives.com.mx/landing/entertainment?fbclid=IwAR0KbTRLX4g-NR3n31aA9qX5f1vG_NA1MzH66bBHaWruPB5QAJWIrdesin4"
                                    rel="noopener noreferrer nofollow"
                                >
                                    Activities Schedule
                                </a>
                                {' // '}
                                <a
                                    target="_blank"
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
                            resort activities.
                        </ul>
                    </ul>
                    <ul>
                        <li>
                            What’s <strong>NOT</strong> included in the
                            all-inclusive package?
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
                            Mode and use Hotel wifi to avoid international
                            charges; use{' '}
                            <strong>
                                Facebook Messenger/WhatsApp/iMessage
                            </strong>
                            for messaging each other; Check your phone plan for
                            International Roaming.
                            <br />
                            <br />
                            We will post on the{' '}
                            <strong>website Message Board</strong> for updates
                            while we are at the resort! (Which pool are we
                            hanging out? What’s an awesome restaurant to check
                            out? etc) If you go on our website using your
                            cellphone, you can “Add to Home Screen” to create a
                            shortcut on your phone for easy access that week :)
                        </ul>
                    </ul>
                    <ul>
                        <li> Do I tip the staff?</li>
                        <ul>
                            <strong>Tips</strong> are not techincally required,
                            but are generally very much appreciated by the
                            staff. It may come in handy to have some $1s and $5s
                            on you if you would like to be remembered by someone
                            you plan to see often i.e. the bartenders
                        </ul>
                    </ul>
                    <ul>
                        <li>
                            {' '}
                            <strong>Miscellaneous Hotel Stuff</strong>
                        </li>
                        <ul>
                            · Bring the <strong>credit card</strong> you used
                            for booking your hotel room. <br />· The hotel has
                            lots of beautiful nature landscapes all around,
                            including monkeys and coatis.{' '}
                            <strong>LOCK YOUR BALCONY DOORS</strong> as monkeys
                            have been known to open doors and look for food!{' '}
                            <br />· The resort is big and we will be{' '}
                            <strong>walking</strong> a lot. I think they have
                            golf carts that shuttle people around but you may
                            have to request it and wait.
                        </ul>
                    </ul>
                    <ul>
                        <li>
                            {' '}
                            <strong>Wedding Attire:</strong>
                        </li>
                        <ul>
                            · Wear what’s comfortable!{' '}
                            <strong>"Beach semi-formal"</strong>, perhaps? Nice
                            shorts and pants are cool, collared shirts (short or
                            long-sleeve), suit jacket if you’re feeling fancy
                            but truly not necessary. Probably anything besides a
                            t-shirt, jeans, or swimsuit would be fine. :)
                            <br />· If you’re thinking of what shoes to wear,
                            the ceremony will be at beachfront gazebo on a
                            concrete pad, and reception will be on the beach (in
                            the sand!)
                        </ul>
                    </ul>
                    <ul>
                        <li>
                            {' '}
                            <strong>Arriving before Check-in Time:</strong>
                        </li>
                        <ul>
                            If you are arriving early before check-in time (3
                            PM), you’ll still be able to use the amenities at
                            the resort while you wait so pack a swimsuit on your
                            carry-on!
                        </ul>
                    </ul>
                </Typography>
            </Grid>
        )
    }
}

export default FAQs
