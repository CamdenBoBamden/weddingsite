import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import * as contentful from 'contentful-management'
function CommentField() {
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const client = contentful.createClient({
        accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN,
    })
    const updateBody = (e) => {
        setBody(e.target.value)
    }
    const updateAuthor = (e) => {
        setAuthor(e.target.value)
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
                            'en-US': `${body}`,
                        },
                        author: {
                            'en-US': `${author}`,
                        },
                    },
                })
            )
            .then((entry) => {
                //entry id is under entry.sys.id

                publishEntry(entry.sys.id)
            })
            .catch(console.error)
    }

    function publishEntry(entryId) {
        client
            .getSpace('k8mm7z31obcw')
            .then((space) =>
                space.getEnvironment(
                    process.env.REACT_APP_CONTENFUL_GENERAL_ENV
                )
            )
            .then((environment) => environment.getEntry(entryId))
            .then((entry) => entry.publish())

            .catch(console.error)
    }

    return (
        <Grid container justifyContent="center">
            <Grid
                item
                xs={6}
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    margin: '2rem',
                    padding: '2rem',
                }}
            >
                <Grid container justify="flex-start">
                    <Grid item xs={6}>
                        <TextField
                            id="standard-basic"
                            label="Name please"
                            variant="standard"
                            onChange={updateAuthor}
                        />
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={8}>
                        <TextField
                            style={{ width: '80%' }}
                            id="standard-basic"
                            // fullWidth
                            label="Add Comment..."
                            variant="standard"
                            onChange={updateBody}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ padding: '1rem' }}>
                        <Button variant="contained" onClick={createEntry}>
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CommentField
