import React from 'react'
import Grid from '@mui/material/Grid'
function PublishedComment(comment, index) {
    return (
        <Grid
            container
            justifyContent={index % 2 === 0 ? 'flex-start' : 'flex-end'}
            key={`comment-${index}`}
        >
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
                <Grid container>
                    <Grid item xs={6}>
                        {comment.fields.author['en-US']}:
                    </Grid>
                </Grid>
                <Grid>{comment.fields.body['en-US']}</Grid>
            </Grid>
        </Grid>
    )
}
export default PublishedComment
