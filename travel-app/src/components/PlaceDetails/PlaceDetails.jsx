import React from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import makeStyles from './styles'
const PlaceDetails = ({place}) => {
    const classes = makeStyles();
    return (

        <Card elevation = {6}>
            <CardMedia
                style={{height: 350}}
                image={place.photo? place.photo.images.large.url : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.KpcgXvZ4pVPwzR0luhv2HgHaE2%26pid%3DApi&f=1'}
                title = {place.name}
/>
        <CardContent>
            <Typography gutterBottom variant="h5">{place.name}</Typography>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant="subtitle1">Price</Typography>
                <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
            </Box>
        </CardContent>
        </Card>
    );

}

export default PlaceDetails;