import React from 'react'
import Grid from '@mui/material/Grid'
import moment from 'moment'
import { ListItem, ListItemText, Typography } from '@mui/material'
function PublishedComment(comment, index) {
    const commentDate = new Date(comment.sys.createdAt)

    const dateFormat = moment(commentDate).format('ddd h:mm a')

    return (
        <ListItem key={`message-index-${index}`}>
            <Grid
                container
                justifyContent={index % 2 === 0 ? 'flex-start' : 'flex-end'}
                key={`comment-${index}`}
            >
                <Grid
                    container
                    justifyContent={index % 2 === 0 ? 'flex-start' : 'flex-end'}
                >
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle"
                            align={index % 2 === 0 ? 'left' : 'right'}
                        >
                            {dateFormat}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={6}
                    style={{
                        backgroundColor:
                            index % 2 === 0 ? 'lightGreen' : 'lightBlue',
                        padding: '5px',
                        margin: '5px',
                        borderRadius: '8px',
                    }}
                >
                    <Grid container justifyContent={'flex-start'}>
                        <Grid item xs={10}>
                            <Typography variant="subtitle" align="left">
                                <ListItemText
                                    primary={`${comment.fields.author['en-US']}:`}
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid style={{ padding: '5px' }}>
                        {comment.fields.body['en-US']}
                    </Grid>
                </Grid>
            </Grid>
        </ListItem>
    )
}
export default PublishedComment
