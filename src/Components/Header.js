import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <div>
            <AppBar position="static" >
                <Toolbar>
                    <Typography > Movie App</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header

