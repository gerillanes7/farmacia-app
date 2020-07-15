import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import './layout.css'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4791db"
        }
    }   
})

const Layout = () => {
    return (
        <div className="appbar">
            <ThemeProvider theme={theme}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">
                            BENDITA FARMA
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    )
}

export default Layout