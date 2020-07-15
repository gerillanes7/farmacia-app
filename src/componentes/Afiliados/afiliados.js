import React from 'react'
import Layout from '../../layout/layout'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import './afiliados.css'

const Afiliados = () => {



    return (
        <div>
            <Layout/>
            <div className="container">
                <div className="tabla">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>N Afiliado</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Apellido</TableCell>
                                <TableCell>Telefono</TableCell>
                                <TableCell>Obra Social</TableCell>
                                <TableCell>DNI</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default Afiliados