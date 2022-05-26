import React from "react";
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import makeStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates}) => {
    const classes = makeStyles();
    const isMobile = useMediaQuery('(min-width:600px)')
    
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
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>

    );
}

export default Map;