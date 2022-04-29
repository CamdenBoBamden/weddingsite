import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
class Header extends Component {
    render() {
        return (
            <Grid item xs={11}>
                <h1
                    style={{
                        color: 'black',
                        marginTop: '4rem',
                        fontSize: '5em',
                        fontWeight: 300,
                    }}
                >
                    Camden & Em
                </h1>
                <h1
                    style={{
                        color: 'black',
                        marginTop: '-4rem',
                        fontSize: '3em',
                        fontWeight: 300,
                    }}
                >
                    10.28.22 Mexico
                </h1>
            </Grid>
        )
    }
}

export default Header
