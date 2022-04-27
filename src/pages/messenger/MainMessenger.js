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

function MainMessenger () {
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState([])
    const client = contentful.createClient({
        accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN,
    })

    const fetchMessages = async () => {
        let messages = await client

            .getSpace('k8mm7z31obcw')
            .then(space => space.getEnvironment('ifg9j4qnqxfb'))
            .then(environment => environment.getEntries())
            .then(response => {
                console.log(response.items)
                return response.items
            })
            .catch(console.error)
        return messages
    }

    const getMessageList = async () => {
        await client
            .getSpace('k8mm7z31obcw')
            .then(space => space.getEnvironment('ifg9j4qnqxfb'))
            .then(environment => environment.getEntries())
            .then(response => {
                console.log(response.items)
                setMessages(response.items)
            })
            .catch(console.error)
    }

    return loading ? (
        <div>...loading</div>
    ) : (
        <Grid container justifyContent='center'>
            <Grid item xs={8} style={{ backgroundColor: 'white' }}>
                {!_.isEmpty(messages) &&
                    messages.map((message, index) => {
                        return PublishedComment(message, index)
                        // <div>
                        //     <p>FROM:{message.fields.author[`en-US`]}</p>
                        //     <p>Subject:{message.fields.subject[`en-US`]}</p>
                        //     <p>{message.fields.body[`en-US`]}</p>
                        // </div>
                        //)
                    })}
                <button onClick={getMessageList}>Get Messages</button>
            </Grid>
        </Grid>
    )
}

export default MainMessenger
