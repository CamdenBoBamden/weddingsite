//In main messenger we will display all the messages
//import logo from './logo.svg'
//import './App.css'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { ClassNames } from '@emotion/react'
import _ from 'lodash'
// main.js
import * as contentful from 'contentful-management'
import PublishedComment from './PublishedComment'
import { List, ListItem } from '@mui/material'

function MainMessenger(existingMessages) {
    return (
        <Grid
            container
            justifyContent="center"
            style={{ marginTop: '1rem', zIndex: '200' }}
        >
            <Grid item xs={12}>
                {!_.isEmpty(existingMessages) && (
                    <List
                        style={{
                            maxHeight: '50vh',
                            overflow: 'auto',
                            display: 'flex',
                            flexDirection: 'column-reverse',
                        }}
                    >
                        {existingMessages.map((message, index) => {
                            return PublishedComment(message, index)
                        })}
                    </List>
                )}
            </Grid>
        </Grid>
    )
}

export default MainMessenger
