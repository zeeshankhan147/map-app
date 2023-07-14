import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useDispatch } from "react-redux";

import apiRequest from "../utils/apiRequest";
import endPoints from "../utils/endPoints";
import IMAGES from "./../assets/images/index";
import { setLoader } from "./../redux/action/globalState";
import LocationCard from "../components/Cards/LocationCard";

const Home = () => {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const [locations, setLocations] = useState([]);
  const [coordinates, setCoordinates] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const fetchVenues = async () => {
    dispatch(setLoader(true));
    try {
      const response = await apiRequest.get(endPoints.venue);
      setLocations(response.data.results);
      dispatch(setLoader(false));
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeLocation = (item) => {
    dispatch(setLoader(true));

    mapRef.current.animateToRegion(
      {
        latitude: item.lat,
        longitude: item.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      1000
    );
    setCoordinates({
      latitude: item.lat,
      longitude: item.lon,
      ...coordinates,
    });

    setTimeout(() => {
      dispatch(setLoader(false));
    }, 2000);
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView/>
        <View style={styles.cardWrapper}>
          <ScrollView
            horizontal
            contentContainerStyle={{ alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
          >
            {locations.map((item) => {
              return (
                <LocationCard
                  address={item.address}
                  image={item.thumbnail}
                  onPress={() => onChangeLocation(item)}
                />
              );
            })}
          </ScrollView>
        </View>
        <MapView
          ref={mapRef}
          style={styles.mapView}
          moveOnMarkerPress
          scrollEnabled
          initialRegion={coordinates}
          zoomEnabled
        >
          {locations.map((venue) => {
            return (
              <Marker
                key={venue.id}
                image={IMAGES.pin}
                coordinate={{
                  latitude: venue.lat,
                  longitude: venue.lon,
                }}
                title={venue.address}
                description={venue.description}
              />
            );
          })}
        </MapView>
      <SafeAreaView/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardWrapper: {
    width: "100%",
    height: heightPercentageToDP(16),
  },
  mapView: {
    flex: 1,
    width: "94%",
    alignSelf: "center",
    borderRadius: widthPercentageToDP(2),
  },
});
