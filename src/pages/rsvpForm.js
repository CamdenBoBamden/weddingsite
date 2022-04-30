import React, { Component } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Grid, Button, InputLabel, Select, MenuItem } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import * as contentful from 'contentful-management'
import * as contentfulGen from 'contentful'

class RsvpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            guests: [{ name: '', age: '', allergies: '' }],
            checkIn: new Date(),
            checkOut: new Date(),
            room: '',
        }
    }

    addGuestField = () => {
        const existingGuests = this.state.guests
        const addedGuest = existingGuests.concat([
            { name: '', age: '', allergies: '' },
        ])

        this.setState({
            guests: addedGuest,
        })
    }

    removeGuest = (index) => {
        const existingGuests = this.state.guests

        const newList = existingGuests.splice(index - 1, 1)

        this.setState({
            guests: newList,
        })
    }
    //export default function FormPropsTextFields() {
    // const [guests, setGuests] = useState([])

    handleChange = (e, index) => {
        const fieldName = e.target.name
        const newValue = e.target.value
        const getGuestList = this.state.guests

        switch (fieldName) {
            case 'guestName':
                getGuestList[index].name = newValue
                this.setState({ guests: getGuestList })
                break
            case 'guestAge':
                getGuestList[index].age = newValue
                this.setState({ guests: getGuestList })
                break
            case 'guestAllergies':
                getGuestList[index].allergies = newValue
                this.setState({ guests: getGuestList })
                break
            case 'checkIn':
                this.setState({ checkIn: newValue })
                break
            case 'checkOut':
                this.setState({ checkOut: newValue })
                break
            case 'room':
                this.setState({ room: newValue })
                break

            default:
                break
        }
    }

    handleCheckOutChange = (e) => {
        this.setState({ checkOut: e })
    }
    handleCheckInChange = (e) => {
        this.setState({ checkIn: e })
    }

    getEnv = () => {
        const client = contentful.createClient({
            accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN,
        })

        client
            .getSpace('k8mm7z31obcw')
            .then((space) => space.getEnvironments())
            .then((response) => {})
            .catch(console.error)
    }

    createEntry = () => {
        const client = contentful.createClient({
            accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN,
        })

        const guestName = this.state.guests[0].name
        const guestList = Object.assign({}, this.state.guests)

        client
            .getSpace('k8mm7z31obcw')
            .then((space) =>
                space.getEnvironment(
                    process.env.REACT_APP_CONTENFUL_GENERAL_ENV_1
                )
            )
            .then((environment) =>
                environment.createEntry('guestList', {
                    fields: {
                        guestName: {
                            'en-US': `${guestName}`,
                        },
                        checkIn: {
                            'en-US': `${this.state.checkIn}`,
                        },
                        checkOut: {
                            'en-US': `${this.state.checkOut}`,
                        },
                        room: {
                            'en-US': `${this.state.room}`,
                        },
                        guestList: {
                            'en-US': guestList,
                        },
                    },
                })
            )
            .then((entry) => {
                //entry id is under entry.sys.id

                this.publishEntry(entry.sys.id, client)
            })
            .catch(console.error)
    }

    publishEntry(entryId, client) {
        client
            .getSpace('k8mm7z31obcw')
            .then((space) =>
                space.getEnvironment(
                    process.env.REACT_APP_CONTENFUL_GENERAL_ENV_1
                )
            )
            .then((environment) => environment.getEntry(entryId))
            .then((entry) => entry.publish().then(() => {}))

            .catch(console.error)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getEnv()}>Click</button>

                <form
                    name="RSVP Guests"
                    method="post"
                    netlify-honeypot="bot-field"
                    data-netlify-recaptcha="true"
                    data-netlify="true"
                >
                    <Box
                        style={{ marginBottom: '5rem', paddingBottom: '1rem' }}
                        sx={{
                            backgroundColor: 'white',
                            margin: '1rem',
                            '& .MuiTextField-root': {
                                color: 'black',
                                //m: 1, width: '25ch'
                            },
                            border: 'solid 1px black',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Grid container justifyContent="center">
                            <Grid item xs={11} style={{ margin: '1rem' }}>
                                <TextField
                                    disabled
                                    style={{ color: 'black' }}
                                    fullWidth
                                    id="outlined-disabled"
                                    label="Hotel"
                                    defaultValue="THE FIVES BEACH HOTEL, PLAYA DEL CARMEN"
                                />
                            </Grid>
                            <p hidden>
                                <label>
                                    Don’t fill this out if you’re human:
                                    <input name="bot-field" type={'hidden'} />
                                </label>
                            </p>
                            <Grid item xs={5} style={{ margin: '1rem' }}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DesktopDatePicker
                                        label="Check-in Date"
                                        inputFormat="MM/dd/yyyy"
                                        name="checkIn"
                                        value={this.state.checkIn}
                                        onChange={this.handleCheckInChange}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={5} style={{ margin: '1rem' }}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DesktopDatePicker
                                        label="Check-out Date"
                                        inputFormat="MM/dd/yyyy"
                                        name="checkOut"
                                        value={this.state.checkOut}
                                        onChange={this.handleCheckOutChange}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid item xs={8} style={{ margin: '1rem 5rem' }}>
                                <InputLabel id="room-label">
                                    Room Category
                                </InputLabel>
                                <Select
                                    labelId="room-label"
                                    id="room-selection"
                                    value={this.state.room}
                                    name="room"
                                    variant="filled"
                                    label="Room"
                                    onChange={this.handleChange}
                                    autoWidth
                                    style={{ width: '80%' }}
                                >
                                    <MenuItem value={`Deluxe Room`}>
                                        Deluxe Room
                                    </MenuItem>
                                    <MenuItem
                                        value={`One Bedroom Resort Residence`}
                                    >
                                        One Bedroom Resort Residence
                                    </MenuItem>
                                    <MenuItem
                                        value={`One Bedroom Swim Up Resort Residence`}
                                    >
                                        One Bedroom Swim Up Resort Residence
                                    </MenuItem>
                                    <MenuItem
                                        value={`One Bedroom Penthouse Resort Residence`}
                                    >
                                        One Bedroom Penthouse Resort Residence
                                    </MenuItem>
                                    <MenuItem
                                        value={`Two Bedroom Resort Residence`}
                                    >
                                        Two Bedroom Resort Residence
                                    </MenuItem>
                                    <MenuItem
                                        value={`Two Bedroom Penthouse Resort Residence`}
                                    >
                                        Two Bedroom Penthouse Resort Residence
                                    </MenuItem>
                                    <MenuItem
                                        value={`Three Bedroom Resort Residence`}
                                    >
                                        Three Bedroom Resort Residence
                                    </MenuItem>
                                    <MenuItem
                                        value={`Three Bedroom Penthouse Resort Residence`}
                                    >
                                        Three Bedroom Penthouse Resort Residence
                                    </MenuItem>
                                </Select>
                            </Grid>

                            {this.state.guests.map((guest, index) => {
                                return (
                                    <Grid
                                        key={`guest-${index}`}
                                        style={{
                                            padding: '10px',
                                            border: 'solid black 1px',
                                            borderRadius: '3px',
                                            margin: '1rem 5rem',
                                        }}
                                        item
                                        xs={8}
                                    >
                                        <TextField
                                            style={{ marginBottom: '10px' }}
                                            id={`guest-name-${index}`}
                                            value={guest.name}
                                            label="Guest Name"
                                            name="guestName"
                                            ref={1}
                                            property={index}
                                            onChange={(e) =>
                                                this.handleChange(e, index)
                                            }
                                            fullWidth
                                        />
                                        <TextField
                                            style={{ marginBottom: '10px' }}
                                            id={`guest-age-${index}`}
                                            onChange={(e) =>
                                                this.handleChange(e, index)
                                            }
                                            value={guest.age}
                                            label="Age"
                                            name="guestAge"
                                            fullWidth
                                        />
                                        <TextField
                                            id={`guest-allergies-${index}`}
                                            onChange={(e) =>
                                                this.handleChange(e, index)
                                            }
                                            value={guest.allergies}
                                            label="Food Allergies"
                                            name="guestAllergies"
                                            fullWidth
                                        />
                                        <Button
                                            variant="outlined"
                                            onClick={() =>
                                                this.removeGuest(index)
                                            }
                                        >
                                            Remove Guest
                                        </Button>
                                    </Grid>
                                )
                            })}
                            <Button
                                variant="contained"
                                onClick={() => this.addGuestField()}
                            >
                                Another One
                            </Button>
                            <Grid container justifyContent={'flex-start'}>
                                <Grid item xs={3}>
                                    <div data-netlify-recaptcha="true"></div>
                                </Grid>
                            </Grid>

                            <Grid container justifyContent={'flex-end'}>
                                <Grid item xs={3}>
                                    <Button
                                        variant="contained"
                                        onClick={this.createEntry}
                                        type="button"
                                        // type="submit"
                                        // submit
                                    >
                                        Send RSVP
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </div>
        )
    }
}
export default RsvpForm
