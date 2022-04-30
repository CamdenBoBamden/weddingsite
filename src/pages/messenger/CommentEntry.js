import React, { Component } from 'react'
import Grid from '@mui/material/Grid'

import TextField from '@mui/material/TextField'

import Button from '@mui/material/Button'
import * as contentful from 'contentful-management'

class CommentEntry extends Component {
    constructor(props) {
        super(props)

        this.state = { author: '', body: '', disableSend: true }
    }

    updateBody = (e) => {
        this.state.author === '' || e.target.value === ''
            ? this.setState({ disableSend: true })
            : this.setState({ disableSend: false })

        this.setState({ body: e.target.value })
    }
    updateAuthor = (e) => {
        this.state.body === '' || e.target.value === ''
            ? this.setState({ disableSend: true })
            : this.setState({ disableSend: false })
        this.setState({ author: e.target.value })
    }

    createEntry = () => {
        this.setState({ disableSend: true })
        const client = contentful.createClient({
            accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN,
        })
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
                            'en-US': `${this.state.body}`,
                        },
                        author: {
                            'en-US': `${this.state.author}`,
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
                    process.env.REACT_APP_CONTENFUL_GENERAL_ENV
                )
            )
            .then((environment) => environment.getEntry(entryId))
            .then((entry) =>
                entry.publish().then(() => {
                    this.setState({ body: '' })
                    this.props.refreshMessages()
                })
            )

            .catch(console.error)
    }

    render() {
        return (
            <Grid container justifyContent="center">
                <Grid
                    item
                    xs={12}
                    md={8}
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        margin: '5px',
                        padding: '5px',
                    }}
                >
                    <Grid container justify="flex-start">
                        <Grid item xs={6}>
                            <TextField
                                id="standard-basic"
                                label="Name..."
                                variant="standard"
                                value={this.state.author}
                                onChange={this.updateAuthor}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item xs={12}>
                            <TextField
                                style={{ width: '90%', margin: '.5rem ' }}
                                id="standard-basic"
                                // fullWidth
                                multiline
                                value={this.state.body}
                                label="Add Comment..."
                                variant="standard"
                                onChange={this.updateBody}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ padding: '.5rem' }}>
                            <Button
                                variant="contained"
                                disabled={this.state.disableSend}
                                onClick={this.createEntry}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default CommentEntry
