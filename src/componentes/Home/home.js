import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import Layout from '../../layout/layout'
import {Link} from 'react-router-dom'

import './home.css'

const Home = () => {
    return (
        <div>
          <Layout/>
            <div className="container">
              <div className="card">
              <Link to="/medicamentos" className="link-style">
                  <Card>
                    <CardActionArea>
                      <CardMedia
                          component="img"
                          alt="Medicamentos"
                          height="140"
                          image="https://www.meditips.com/wp-content/uploads/2016/09/medicamentos-orales-1024x645.jpg"
                        />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Medicamentos
                        </Typography>
                        <Typography variant="body2" component="p">
                          Lista de medicamentos de la farmacia.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
              </Link>
              </div>
                <div className="card">
                  <Link to="/afiliados" className="link-style">
                  <Card>
                    <CardActionArea>
                      <CardMedia
                          component="img"
                          alt="Afiliados"
                          height="140"
                          image="https://aelis.es/wp-content/uploads/2017/07/tipos-de-usuarios-de-sage-live-2.jpg"
                        />
                                            <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Afiliados
                      </Typography>
                      <Typography variant="body2" component="p">
                        Lista de afiliados.
                      </Typography>
                    </CardContent>
                    </CardActionArea>
                  </Card>
                  </Link>
                </div>
            </div>
        </div>
    )
}

export default Home