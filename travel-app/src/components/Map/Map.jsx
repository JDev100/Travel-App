import React from "react";
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {Rating} from '@material-ui/lab';

import makeStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
    const classes = makeStyles();
    const isDesktop = useMediaQuery('(min-width:600px)')
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyDWb09vqqpZ4_7apMkSn4pOHSxg5FPq5H0'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options = {''}
                onChange={(e) => {
                    //e has various data on map info
                    console.log(e)
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={(child)=> setChildClicked(child)}
            >
            
            {/* Render the places on the map  */}
            {places?.map((place, i)=> (
                 <div className={classes.markerContainer}
                 lat = {Number(place.latitude)}
                 lng = {Number(place.longitude)}
                 key={i}>
                     {
                         !isDesktop?(
                             <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                         ) : (
                             <Paper elevation={3} className={classes.paper}>
                                 <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                                     {place.name}
                                 </Typography>
                                 <img  
                                 className={classes.pointer}
                                 src={place.photo ? place.photo.images.large.url : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.q-farhsmeyLO0fJwm2RPAQHaE8%26pid%3DApi&f=1'} 
                                 alt={place.name} />
                                <Rating size='small' value={Number(place.rating)} readOnly/>
                             </Paper>
                         )
                     }
                 </div>
            ))}
            </GoogleMapReact>
        </div>

    );
}

export default Map;