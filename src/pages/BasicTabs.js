import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function BasicTabs(navigateThere, getMessageList) {
    const [value, setValue] = React.useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue)

        switch (newValue) {
            case 0:
                navigateThere('where')
                break
            case 1:
                navigateThere('schedule')
                break
            case 2:
                navigateThere('dates')
                break
            case 3:
                navigateThere('rsvp')
                break
            case 4:
                navigateThere('roomRates')
                break
            case 5:
                navigateThere('travel')
                break
            case 6:
                navigateThere('faqs')
                break
            case 7:
                navigateThere('gifts')
                break
            case 8:
                getMessageList()
                break
            default:
                break
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Tabs
                            //centered
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            style={{ fontWeight: '600' }}
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            <Tab label="Where" {...a11yProps(0)} />
                            <Tab label="Schedule" {...a11yProps(1)} />
                            <Tab label="Important Dates" {...a11yProps(2)} />
                            <Tab label="RSVP" {...a11yProps(3)} />
                            <Tab label="Room Rates" {...a11yProps(4)} />
                            <Tab label="travel" {...a11yProps(5)} />
                            <Tab label="FAQs" {...a11yProps(6)} />
                            <Tab label="Registry" {...a11yProps(7)} />
                            <Tab label="Message" {...a11yProps(8)} />
                        </Tabs>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
