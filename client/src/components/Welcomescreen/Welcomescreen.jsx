import React from 'react'
import { Card, Typography, CardActions, CardContent, CardMedia, Button} from '@mui/material';
import useStyles from './style'
import {Link} from 'react-router-dom'
const Welcomescreen = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.Welcomescreen}>
        <div>
        <div><Typography variant='h4' className={classes.heading}><b>Craft Bazaar Community is here</b></Typography></div>
        <div className={classes.content}>
          <p className={classes.para}>This community is created for the help of craft artist to sell their
            artwork and for Buyer to get fully trusted product by this community.
            Here below choose yoour related section,in which you want to explore this community:</p>
        </div>

        <div className={classes.container}>
          <Card className={classes.card}>
            <CardMedia></CardMedia>
            <CardContent>
              <Typography>Continue as Buyer by clicking below:</Typography>
              <Button className={classes.button}>Go to Buyer Section</Button>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent>
              <Typography>Continue as Seller by clicking below:</Typography>
              <Link to='/SellerForm'><Button className={classes.button}>Go to Seller Section</Button></Link>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    </>
  )
}

export default Welcomescreen
