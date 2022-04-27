import logo from './logo.svg'
import './App.css'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { ClassNames } from '@emotion/react'
import MainMessenger from './pages/messenger/MainMessenger'
import CommentField from './pages/messenger/CommentField'
import ResponsiveAppBar from './pages/BasicTabs'
import BasicTabs from './pages/BasicTabs'
import { Typography } from '@mui/material'

// main.js
//var contentful = require('contentful');
const contentful = require('contentful-management')

function App () {
    const client = contentful.createClient({
        //accessToken: 'a6YX34kss7-JgkCaHAlPqhAa-njc5066JsdrED3sM_4',
        //Mangement key
        // accessToken: 'CFPAT-fTl1zajO5yvhrqnmcclxgKxdw7MtzQOQhiFMBCjIvMM',
        accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN,
        //space:'k8mm7z31obcw'
    })
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
            .then(space => space.createEnvironment({ name: 'myEnv' }))
            .then(environment => console.log(environment))
            .catch(console.error)
    }

    function getContentTypes () {
        client
            .getSpace('k8mm7z31obcw')
            .then(space => space.getEnvironment('ifg9j4qnqxfb'))
            .then(environment => environment.getContentTypes())
            .then(response => console.log(response.items))
            .catch(console.error)
    }

    function createEntry () {
        client
            .getSpace('k8mm7z31obcw')
            .then(space => space.getEnvironment('ifg9j4qnqxfb'))
            .then(environment =>
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
            .then(entry => console.log(entry))
            .catch(console.error)
    }

    function publishEntry () {
        client
            .getSpace('k8mm7z31obcw')
            .then(space => space.getEnvironment('ifg9j4qnqxfb'))
            .then(environment => environment.getEntry('1MDoM13ERGeFVVNSjfSoIg'))
            .then(entry => entry.publish())
            .then(entry => console.log(`Entry ${entry.sys.id} published.`))
            .catch(console.error)
    }

    function testContent () {
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

    function navigateThere (location) {
        window.location.replace(`/#${location}`)
        console.log('Hit it', location)
    }

    return (
        <Grid
            container
            //className='App'
            //style={{'backgroundImage': palm  }}
            className='centerText'
        >
            <Grid container className='cornerImage'>
                <Grid item xs={10}></Grid>
                <Grid item xs={12} id='top'>
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
                    {BasicTabs(navigateThere)}

                    {/* <header className='App-header'> */}
                    <Grid container justifyContent={'center'}>
                        <Grid
                            item
                            xs={8}
                            //className='palmBacked'
                            // style={{ height: '50rem' }}
                        >
                            <Paper
                                className='candem'
                                elevation={4}
                                style={{ height: '100vh' }}
                            ></Paper>
                        </Grid>

                        <Grid item xs={8}>
                            <Paper
                                elevation={3}
                                style={{
                                    backgroundColor: '#89A09E',
                                    margin: '3rem',
                                    padding: '1rem',
                                }}
                            >
                                <Typography variant='h4' align='left'>
                                    Dearest friends and family,
                                </Typography>
                                <Typography variant='h5' align='left'>
                                    We are very excited to invite you to our
                                    wedding-- we are getting married in Mexico!
                                    We are dreaming of several days of
                                    togetherness, friendship, and delicious food
                                    & drinks on the beach. It would be an honor
                                    to celebrate with the people we love most!
                                </Typography>
                                <Typography variant='h5'>
                                    Our wedding will be on Friday, October 28,
                                    2022 5:00 PM in Playa Del Carmen, Mexico.
                                </Typography>
                            </Paper>
                            <Grid item xs={11}>
                                <Typography
                                    variant='h2'
                                    style={{
                                        color: '#12403C',
                                        marginTop: '2rem',
                                        padding: '2rem',
                                    }}
                                    align='left'
                                    id='where'
                                >
                                    <em>I’m in! Where are we going?</em>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={3}
                                    style={{
                                        backgroundColor: '#12403C',
                                        margin: '3rem',
                                        padding: '1rem',
                                    }}
                                >
                                    <Typography
                                        variant='h5'
                                        style={{
                                            color: 'white',
                                        }}
                                    >
                                        We are staying at The Fives Beach Hotel
                                        & Residences, a family-friendly,
                                        all-inclusive resort in Playa Del
                                        Carmen, Mexico, located just 40-min
                                        south of Cancun International Airport
                                        (CUN). The wedding will be on-site.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <p>
                                    Images **Insert photos of beach, pools,
                                    restaurants, bars, food, jungle area,
                                    monkeys, map of Playa Del Carmen,
                                    excursions?)**
                                </p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Grid
                            item
                            xs={8} //style={{ margin: '1rem' }}
                        >
                            <Paper
                                elevation={3}
                                className='border'
                                style={{
                                    backgroundColor: '#682747',
                                    margin: '3rem',
                                    padding: '3rem 5rem',
                                    // minHeight: '50vh',
                                    height: '100%',
                                    //width: 'auto',
                                }}
                            >
                                <h1
                                    id='schedule'
                                    style={{
                                        color: 'white',
                                        fontWeight: 400,
                                        fontSize: '3em',
                                    }}
                                >
                                    Schedule of Events
                                </h1>
                                <Typography
                                    variant='h5'
                                    style={{
                                        color: 'white',
                                    }}
                                    align='left'
                                >
                                    <ul>
                                        <li>
                                            10/25 – 10/30 Cam and Em’s travel
                                            dates
                                        </li>
                                        <li>
                                            10/27 THURSDAY Welcome Dinner Time
                                            and location TBD (on-site)
                                        </li>
                                        <li>
                                            10/28 FRIDAY Wedding Day! 5:00 PM
                                            Ceremony at the Beachfront Gazebo
                                            5:30 – 6:30 PM Cocktail Hour at TBD
                                            6:30 – 10:30 PM Reception Dinner at
                                            the Beach 10:30 PM onwards: Find a
                                            bar to continue the party!
                                        </li>
                                        <li>
                                            Rest of your stay: play, eat, drink,
                                            lounge, go on excursions!
                                        </li>
                                    </ul>
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={11} style={{ marginTop: '10rem' }}>
                            <Typography
                                variant='h2'
                                style={{ color: '#12403C' }}
                                align='left'
                                id='dates'
                            >
                                <em> Important Dates</em>
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Paper
                                elevation={3}
                                style={{ backgroundColor: '#89A09E' }}
                            >
                                <Typography variant='h5' align='left'>
                                    TODAY: CHECK YOUR PASSPORT! Apply for a
                                    passport or check if your current passport
                                    is valid! Some airlines require 6 months
                                    validity past your travel dates. Your plane
                                    ticket must match the name on your passport
                                    EXACTLY. MAY 31: Deadline to RSVP and put
                                    down deposit for hotel booking AUGUST 29
                                    (T-60 days): Full payment due for hotel
                                    booking
                                    <strong>OCTOBER 28 Wedding Day!</strong>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <h1 id='rsvp'>RSVP</h1>
                    <p>
                        Kindly RSVP by completing the form below by May 31,
                        2022. We know this is a big ask and we absolutely
                        understand if you are unable to attend, let us know
                        either way. YES form details: travel dates, airport,
                        room type, name(s), age(s), food allergies NO
                    </p>
                    <h1 id='roomRates'>Room Rates</h1>
                    <p>
                        *insert Room Rates table* Deluxe/1BR rates above are
                        listed per PERSON. 2BR/3BR rates are listed per ROOM.
                        Ages 6 & under are free!
                    </p>
                    <h1 id='travel'>Travel</h1>
                    <p>
                        We are working with travel agents from Here and Away
                        Travel, Jess Sbriscia & Jayme Cornine. They have been
                        incredibly helpful to us and will be assisting everyone
                        in booking hotel rooms in our group and book flights as
                        needed (you can book your own flights if you prefer).
                        They will also arrange our airport transfers (shuttle)
                        between the airport and the hotel. Airport transfers
                        (CUN airport ↔ The Fives Beach Hotel): USA Transfers
                        Travel Insurance: InsureMyTrip.com US Passport:
                        Travel.State.gov
                    </p>
                    <p>
                        protocols, masks, testing The Fives Test Antigen / PCR
                        (thefiveshotels.com) Going to MX: Coming back to the US:
                        All air passengers 2 years or older with a flight
                        departing to the US from a foreign country are required
                        show a negative COVID-19 viral test result taken no more
                        than 1 day before travel, or documentation of having
                        recovered from COVID-19 in the past 90 days, before they
                        board their flight.International Travel | CDC
                    </p>
                    <h1 id='faqs'>FAQs</h1>
                    <p>
                        How to reach us? Cam 573-397-8143, Em 626-534-5773
                        Additional hotel info? Amenities // Activities // Kids
                        Stuff // 15 Restaurants & Bars (Menus) What to bring?
                        What’s the weather like in October? Cellphone service
                    </p>
                    <h1 id='gifts'>Registry</h1>
                    <p>
                        Your presence is more than enough present for us and we
                        are eternally grateful you are able to join us in our
                        celebrations!
                    </p>
                    <h1 id='message'>Message board</h1>
                    <h1 onClick={() => navigateThere('top')}>Top</h1>
                    <Grid container justifyContent='flex-end'>
                        <Grid item xs={8}></Grid>
                        <Grid item xs={3} style={{ margin: '1rem' }}>
                            <Paper elevation={8}>
                                {MainMessenger()}
                                {CommentField()}
                            </Paper>
                        </Grid>
                    </Grid>
                    <button onClick={testContent}>Get Comment</button>
                    <button onClick={createEnvironment}>Create Env</button>
                    <button onClick={getSpace}>Get Space</button>
                    <button onClick={getContentTypes}>Get Content types</button>
                    <button onClick={createEntry}>Create Entry</button>
                    <button onClick={publishEntry}>Publish</button>
                    {/* </header> */}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default App
