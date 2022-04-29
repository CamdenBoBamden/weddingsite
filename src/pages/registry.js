import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
class Registry extends Component {
    render() {
        return (
            <Grid item xs={11} md={8}>
                <Typography
                    variant="h4"
                    align="left"
                    style={{ margin: '1rem' }}
                >
                    <em>Registry</em>
                </Typography>
                <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: '1.5rem' }}
                >
                    {`  Your presence is more than enough present for us and we
                        are eternally grateful you are able to join us in our
                        celebrations!`}
                </Typography>
            </Grid>
        )
    }
}

export default Registry
