import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from '@material-ui/core'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from './api';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [bounds, setBounds] = useState(null);
    const [childClicked, setChildClicked] = useState(null)
    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //  setCoordinates({lat: 20, lng: 10})
        Geolocation.getCurrentPosition(info => console.log(info));
        //  console.log(navigator.geolocation.getCurrentPosition());
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            console.log('POOOOOP')
            setCoordinates({ lat: latitude, lng: longitude })
        });
    }, []);
    useEffect(() => {
        console.log(coordinates, bounds);
        
        if (bounds) {
            setIsLoading(true);
            //Returns dictionary object of places
            getPlacesData(bounds.sw, bounds.ne)
                //Call .then() because getPlacesData is asynchronous
                .then((data) => {
                    console.log(data);
                    setPlaces(data);
                    setIsLoading(false)
                })

        }
    }, [coordinates, bounds]);
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }} >
                <Grid item xs={12} md={4}>
                    <List
                        places={places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;

