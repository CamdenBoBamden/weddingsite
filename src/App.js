import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { ClassNames } from '@emotion/react'
import MainMessenger from './pages/messenger/MainMessenger'
import MessageIcon from '@mui/icons-material/Message'
import CommentField from './pages/messenger/CommentField'
import ResponsiveAppBar from './pages/BasicTabs'
import BasicTabs from './pages/BasicTabs'
import { Typography } from '@mui/material'
import Header from './pages/header'
import WelcomeMessage from './pages/welcomeMessage'
import Divider from '@mui/material/Divider'
import WhereAreWeGoing from './pages/where'
import Schedule from './pages/schedule'
import ImportantDates from './pages/importantDates'
import RSVP from './pages/rsvp'
import RoomRates from './pages/roomRates'
import Travel from './pages/travel'
import FAQs from './pages/faqs'
import Registry from './pages/registry'
import Button from '@mui/material/Button'
import CommentIcon from '@mui/icons-material/Comment'
import CloseIcon from '@mui/icons-material/Close'
import CommentEntry from './pages/messenger/CommentEntry'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

// main.js
//var contentful = require('contentful');
const contentful = require('contentful-management')

function App() {
    const client = contentful.createClient({
        accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN,
    })
    const [messages, setMessages] = useState([])
    const [openMessenger, setMessenger] = useState(false)
    //   function publishEntry(){
    //     const client = contentful.createClient({
    //       accessToken: 'a6YX34kss7-JgkCaHAlPqhAa-njc5066JsdrED3sM_4',
    //     })

    //     client.getSpace('<space_id>')
    // .then((space) => space.getEnvironment('<environment_id>'))
    // .then((environment) => environment.getEntry('<entry_id>'))
    // .then((entry) => entry.publish())
    // .then((entry) => console.log(`Entry ${entry.sys.id} published.`))
    // .catch(console.error)
    //   }

    const getMessageList = async () => {
        console.log('hit get message list')
        await client
            .getSpace('k8mm7z31obcw')
            .then((space) =>
                space.getEnvironment(
                    process.env.REACT_APP_CONTENFUL_GENERAL_ENV
                )
            )
            .then((environment) => environment.getEntries())
            .then((response) => {
                console.log(response.items)
                setMessages(response.items)
                setMessenger(!openMessenger)
                // openMessenger1()
            })
            .catch(console.error)
    }

    const getSpace = async () => {
        const client = contentful.createClient({
            accessToken: 'a6YX34kss7-JgkCaHAlPqhAa-njc5066JsdrED3sM_4',
            space: 'k8mm7z31obcw',
        })

        let space = await client.getSpace('k8mm7z31obcw')
        console.log('Space:', space)
    }

    const createEnvironment = async () => {
        client
            .getSpace('k8mm7z31obcw')
            .then((space) => space.createEnvironment({ name: 'myEnv' }))
            .then((environment) => console.log(environment))
            .catch(console.error)
    }

    function getContentTypes() {
        client
            .getSpace('k8mm7z31obcw')
            .then((space) =>
                space.getEnvironment(
                    process.env.REACT_APP_CONTENFUL_GENERAL_ENV
                )
            )
            .then((environment) => environment.getContentTypes())
            .then((response) => console.log(response.items))
            .catch(console.error)
    }

    function createEntry() {
        client
            .getSpace('k8mm7z31obcw')
            .then((space) =>
                space.getEnvironment(
                    process.env.REACT_APP_CONTENFUL_GENERAL_ENV
                )
            )
            .then((environment) =>
                environment.createEntry('comment', {
                    fields: {
                        body: {
                            'en-US': 'Just saying hi second message',
                        },
                        author: {
                            'en-US': 'Bobby',
                        },
                        subject: {
                            'en-US': 'Hello there',
                        },
                    },
                })
            )
            .then((entry) => console.log(entry))
            .catch(console.error)
    }

    function publishEntry() {
        client
            .getSpace('k8mm7z31obcw')
            .then((space) =>
                space.getEnvironment(
                    process.env.REACT_APP_CONTENFUL_GENERAL_ENV
                )
            )
            .then((environment) =>
                environment.getEntry('1MDoM13ERGeFVVNSjfSoIg')
            )
            .then((entry) => entry.publish())
            .then((entry) => console.log(`Entry ${entry.sys.id} published.`))
            .catch(console.error)
    }

    function testContent() {
        var client = contentful.createClient({
            space: 'k8mm7z31obcw',
            accessToken: 'a6YX34kss7-JgkCaHAlPqhAa-njc5066JsdrED3sM_4',
        })

        client.getEntry('6S4N4HpafSxSEFocPgoPjf').then(function (entry) {
            console.log('entry', entry)
            // logs the entry metadata
            console.log(entry.sys)

            // logs the field with ID title
            console.log(entry.fields)
        })
    }
    // const [value, setValue] = React.useState(0)
    function navigateThere(location) {
        const newLocation = document.getElementById(location)
        console.log(
            'new location',
            newLocation,
            '\noffset:',
            newLocation.offsetTop
        )
        window.scrollTo({
            //top: newLocation['0'],
            top: newLocation.offsetTop,
            behavior: 'smooth',
        })
    }

    return (
        <Grid container className="centerText">
            <Grid container className="cornerImage">
                <Grid item xs={12} md={12} id="top">
                    <Header />
                    <div className="navBar">{BasicTabs(navigateThere)}</div>
                    <Grid container justifyContent={'center'}>
                        <Grid item xs={8}>
                            {/* <Paper
                                className="candem"
                                elevation={4}
                                style={{ height: '100vh' }}
                            ></Paper> */}
                            <img
                                style={{
                                    maxWidth: '65%',
                                    backgroundSize: 'contain',
                                }}
                                src={require('./assets-fives/camandem.jpg')}
                                alt="us"
                            />
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ margin: '3rem' }} />
                    <Grid container justifyContent={'center'}>
                        <WelcomeMessage />
                        <Grid item xs={12}>
                            <Divider
                                variant="middle"
                                style={{ margin: '3rem' }}
                                id="where"
                            />
                        </Grid>

                        <WhereAreWeGoing />
                        <Grid item xs={12}>
                            <Divider
                                variant="middle"
                                style={{ margin: '3rem' }}
                                id="schedule"
                            />
                        </Grid>
                        <Schedule />
                        <Grid item xs={8} md={6}>
                            <Carousel
                                autoPlay
                                infiniteLoop
                                showArrows="false"
                                showStatus="false"
                                showIndicators={false}
                                statusFormatter={() => {}}
                                interval="3500"
                                transitionTime="1500"
                            >
                                <div>
                                    <img
                                        src={require('./assets-fives/bar_cantina.jpg')}
                                        alt="cantina"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={require('./assets-fives/bar_tequila bar.jpg')}
                                        alt="tequila bar"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={require('./assets-fives/bar_zky balcony bar.jpg')}
                                        alt="balcony bar"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={require('./assets-fives/resort_beach dock.jpg')}
                                        alt="dock"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={require('./assets-fives/resort_beach sunset.JPG')}
                                        alt="sunset"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={require('./assets-fives/resort_nature walk.JPG')}
                                        alt="nature walk"
                                    />
                                </div>
                            </Carousel>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider
                                variant="middle"
                                style={{ margin: '3rem' }}
                                id="dates"
                            />
                        </Grid>
                        <ImportantDates />
                        <Grid item xs={12}>
                            <Divider
                                variant="middle"
                                style={{ margin: '3rem' }}
                                id="rsvp"
                            />
                        </Grid>
                        <RSVP />
                        <Grid item xs={12}>
                            <Divider
                                variant="middle"
                                style={{ margin: '3rem' }}
                                id="roomRates"
                            />
                        </Grid>
                        <RoomRates />
                        <Grid item xs={12}>
                            <Divider
                                variant="middle"
                                style={{ margin: '3rem' }}
                                id="travel"
                            />
                        </Grid>
                        <Travel />
                        <Grid item xs={12}>
                            <Divider
                                variant="middle"
                                style={{ margin: '3rem' }}
                                id="faqs"
                            />
                        </Grid>
                        <FAQs />
                        <Grid item xs={12}>
                            <Divider
                                variant="middle"
                                style={{ margin: '3rem' }}
                                id="gifts"
                            />
                        </Grid>
                        <Registry />
                        <Grid item xs={12}>
                            <Divider
                                variant="middle"
                                style={{ margin: '3rem' }}
                                id="registry"
                            />
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="flex-end">
                        <Grid item xs={12} lg={3}>
                            {openMessenger ? (
                                <Paper
                                    elevation={4}
                                    className="messengerBox"
                                    style={{
                                        backgroundColor: '#263A5B',
                                        minHeight: '80vh',
                                        minWidth: '50%',
                                    }}
                                >
                                    <CloseIcon
                                        fontSize="large"
                                        onClick={() => setMessenger(false)}
                                        style={{
                                            color: '#ffffff',
                                            position: 'absolute',
                                            cursor: 'pointer',
                                            right: 0,
                                        }}
                                    />

                                    {MainMessenger(messages)}
                                    <CommentEntry client={client} />
                                </Paper>
                            ) : (
                                // CommentField()
                                <Button
                                    variant="contained"
                                    onClick={getMessageList}
                                    className="messengerBox"
                                >
                                    <MessageIcon
                                        color="secondaryDark"
                                        fontSize="medium"
                                    />
                                    Message
                                </Button>
                            )}
                        </Grid>
                        {/* {messages.length >= 1 ? (
                            <Grid item xs={3} style={{ margin: '1rem' }}>
                                <Paper elevation={8}>
                                    {MainMessenger(messages)}
                                    {CommentField()}
                                </Paper>
                            </Grid>
                        ) : null} */}
                    </Grid>
                    <button onClick={testContent}>Get Comment</button>
                    <button onClick={createEnvironment}>Create Env</button>
                    <button onClick={getSpace}>Get Space</button>
                    <button onClick={getContentTypes}>Get Content types</button>
                    <button onClick={createEntry}>Create Entry</button>
                    <button onClick={publishEntry}>Publish</button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default App
