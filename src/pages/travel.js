import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
class Travel extends Component {
    render() {
        return (
            <Grid item xs={11} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    <em>Travel</em>
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    We (Cam & Em) are traveling 10/25-10/30 (5 nights). Feel
                    free to book travel dates that work best for you! <br />
                    <br />
                    We are holding a room block at the Fives Beach Hotel for our
                    group! To book your reservations, please email our Travel
                    Agents Jess & Jayme at{' '}
                    <strong>groups@hereandawaytravel.com</strong> with a
                    completed Room Reservation Form. They will give you a quote
                    and provide you with a payment link. Minimum stay at the
                    hotel is 3 nights. You will just have to put down a deposit
                    by May 31, 2022 (minimum deposit of one night's stay) and
                    you can make interest-free payments however you'd like up
                    until the final payment due date of August 29, 2022 (60 days
                    before the wedding). <br />
                    <br />
                    Let Jess & Jayme know if you’d like for them to book your
                    flight as well. (You can book flights on your own, if you
                    prefer; we know some people use travel points or whatnot)
                    Just let them know your flight details once booked because
                    they will be coordinating the airport transfers for our
                    group (transportation between airport and hotel).
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    <strong>COVID Travel Updates: </strong>
                    <br />
                    <br />
                    Going to Mexico: Mexico currently does not require any
                    vaccination for COVID-19, or a negative test to enter the
                    country.
                    <br />
                    <br />
                    Masks may still be required in some areas! <br />
                    <br />
                    As of 6/12/22, COVID testing is no longer required coming
                    back to the US.{' '}
                    <a
                        target="_blank"
                        href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/international-travel/index.html"
                        rel="noopener noreferrer nofollow"
                    >
                        International Travel | CDC
                    </a>
                    <br />
                    <br />
                    The Fives Hotel has on-site COVID testing (antigen test) for
                    $35 per person.
                    {` `}
                </Typography>
            </Grid>
        )
    }
}

export default Travel
