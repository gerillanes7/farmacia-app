import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import './login.css'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4791db"
        },
        button: {
            textStyle: 'italic'
        }
    }   
})

const Login = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid container>
                    <Grid item xs={6} className="container-izquierda">
                        <div className="izquierda">
                            <Card>
                                <Avatar className="avatar">
                                    <PersonIcon />
                                </Avatar>
                            <Typography component="h1" variant="h5">
                                Ingresar
                            </Typography>
                                <CardContent>
                                    <form>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="usuario"
                                        label="Nombre de Usuario"
                                        name="usuario"
                                        autoFocus
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    </form>
                                    <Link to="/home" className="link-style">
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                    >
                                        Ingresar
                                    </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={6} className="img-derecha">
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Login