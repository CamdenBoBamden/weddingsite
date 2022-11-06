import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
class Header extends Component {
    render() {
        return (
            <Grid container justifyContent={'center'}>
                <Grid item xs={11}>
                    <h1
                        style={{
                            color: 'black',
                            marginTop: '4rem',
                            fontSize: '2.5em',
                            fontWeight: 300,
                        }}
                    >
                        Cam & Em
                    </h1>
                    <h1
                        style={{
                            color: 'black',
                            marginTop: '-2rem',
                            fontWeight: 300,
                        }}
                    >
                        10.28.22 Mexico
                    </h1>
                </Grid>
            </Grid>
        )
    }
}

export default Header
