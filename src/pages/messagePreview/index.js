import { useState } from 'react'
import { Grid, Paper } from '@mui/material'
import PublishedCommentPreview from '../messenger/PublishedCommentPreview'
function MessagePreview(messages, getMessageList) {
    const [showPreview, setShowPreview] = useState(false)
    const [showList, setShowList] = useState([])

    if (!showPreview && messages.length > 0) {
        setShowPreview(true)
        const shortList = messages.slice(0, 3)
        setShowList(shortList)
    }

    return (
        <>
            {showPreview && (
                <button onClick={getMessageList}>
                    <Paper
                        elevation={4}
                        style={{
                            backgroundColor: '#263A5B',
                            margin: '.5rem',
                            minWidth: '50%',
                        }}
                    >
                        <Grid container justifyContent={'center'}>
                            <Grid item xs={11} lg={8}>
                                {showList.map((message, index) => {
                                    return PublishedCommentPreview(
                                        message,
                                        index
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Paper>
                </button>
            )}
        </>
    )
}

export default MessagePreview
