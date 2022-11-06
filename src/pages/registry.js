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
                    Making memories with you is worth more than anything we
                    could ask for! Gifts are absolutely not expected.
                    <br />
                    <br />
                    If you still feel inclined, here is a link to our Amazon{' '}
                    <a
                        target="_blank"
                        href="https://www.amazon.com/wedding/share/HappilyEverCoulter2022"
                        rel="noopener noreferrer nofollow"
                    >
                        Registry
                    </a>
                </Typography>
            </Grid>
        )
    }
}

export default Registry
