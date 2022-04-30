import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

class RSVP extends Component {
    render() {
        return (
            <Grid item xs={11} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    <em>RSVP</em>
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    Kindly RSVP by emailing Jess & Jayme at
                    groups@hereandawaytravel.com with a completed Room
                    Reservation Form request by <strong>May 31, 2022</strong>.
                    (We attached the form in the Save-the-Date email; they can
                    also provide it for you). Room rates are posted below. We
                    know this is a big ask and we absolutely understand if you
                    are unable to attend! Please let us know either way so we
                    could plan accordingly.
                </Typography>
                <Grid container justifyContent={'center'}>
                    <Grid item xs={11} lg={8}>
                        {/* {FormPropsTextFields()} */}
                        {/* <RsvpForm /> */}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default RSVP
