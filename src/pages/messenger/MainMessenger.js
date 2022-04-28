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

//var contentful = require('contentful')

function MainMessenger(existingMessages) {
    return (
        <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
            <Grid
                item
                xs={12} //style={{ backgroundColor: 'white' }}
            >
                {!_.isEmpty(existingMessages) &&
                    existingMessages.map((message, index) => {
                        return PublishedComment(message, index)
                        // <div>
                        //     <p>FROM:{message.fields.author[`en-US`]}</p>
                        //     <p>Subject:{message.fields.subject[`en-US`]}</p>
                        //     <p>{message.fields.body[`en-US`]}</p>
                        // </div>
                        //)
                    })}
            </Grid>
        </Grid>
    )
}

export default MainMessenger
