import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import {
    Typography,
    FormControl,
    Input,
    FormHelperText,
    InputLabel,
} from '@mui/material'
import FormPropsTextFields from './rsvpForm'
import RsvpForm from './rsvpForm'
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
                    Kindly RSVP by completing the form below by May 31, 2022. We
                    know this is a big ask and we absolutely understand if you
                    are unable to attend, let us know either way.
                </Typography>
                <Grid container justifyContent={'center'}>
                    <Grid item xs={11} lg={8}>
                        {/* {FormPropsTextFields()} */}
                        <RsvpForm />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default RSVP
