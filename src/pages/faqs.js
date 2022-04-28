import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
class FAQs extends Component {
    render() {
        return (
            <Grid item xs={10} md={8}>
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
                </Typography>
            </Grid>
        )
    }
}

export default FAQs
