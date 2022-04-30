import './App.css'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import MainMessenger from './pages/messenger/MainMessenger'
import MessageIcon from '@mui/icons-material/Message'
import BasicTabs from './pages/BasicTabs'
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

    const getMessageList = async () => {
        navigateThere('where')
        await client
            .getSpace('k8mm7z31obcw')
            .then((space) =>
                space.getEnvironment(
                    process.env.REACT_APP_CONTENFUL_GENERAL_ENV
                )
            )
            .then((environment) => environment.getEntries())
            .then((response) => {
                setMessages(response.items)
                setMessenger(!openMessenger)
            })
            .catch(console.error)
    }
    const refreshMessageList = async () => {
        await client
            .getSpace('k8mm7z31obcw')
            .then((space) =>
                space.getEnvironment(
                    process.env.REACT_APP_CONTENFUL_GENERAL_ENV
                )
            )
            .then((environment) => environment.getEntries())
            .then((response) => {
                setMessages(response.items)
            })
            .catch(console.error)
    }

    const getSpace = async () => {
        const client = contentful.createClient({
            accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
            space: 'k8mm7z31obcw',
        })
    }

    const createEnvironment = async () => {
        client
            .getSpace('k8mm7z31obcw')
            .then((space) => space.createEnvironment({ name: 'myEnv' }))

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

            .catch(console.error)
    }

    function navigateThere(location) {
        const newLocation = document.getElementById(location)

        window.scrollTo({
            top: newLocation.offsetTop,
            behavior: 'smooth',
        })
    }

    return (
        <div //className="bg"
        >
            <img
                src={require('./assets/palm.jpg')}
                alt="background trees"
                className="bg"
            />
            <Grid container className="centerText">
                <Grid container className="cornerImage">
                    <Grid item xs={12} md={12} id="top">
                        <Header />
                        <div className="navBar">
                            {BasicTabs(navigateThere, getMessageList)}
                        </div>
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
                                    style={{ margin: '3rem 2rem' }}
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
                            <Grid
                                item
                                xs={12}
                                lg={3}
                                style={{ position: 'fixed', bottom: 0 }}
                            >
                                {openMessenger ? (
                                    <Paper
                                        elevation={4}
                                        className="messengerBox"
                                        style={{
                                            backgroundColor: '#263A5B',
                                            margin: '.5rem',
                                            minHeight: '85vh',
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
                                                bottom: '5',
                                            }}
                                        />

                                        {MainMessenger(messages)}
                                        <Divider />
                                        <CommentEntry
                                            refreshMessages={() =>
                                                refreshMessageList()
                                            }
                                        />
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
                                        Message Us
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

                        {/* <button onClick={createEnvironment}>Create Env</button>
                        <button onClick={getSpace}>Get Space</button>
                        <button onClick={getContentTypes}>
                            Get Content types
                        </button>
                        <button onClick={createEntry}>Create Entry</button>
                        <button onClick={publishEntry}>Publish</button> */}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default App
