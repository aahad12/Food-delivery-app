import { View, Text } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Screen from './Screen';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({cityHandler}) {
  return (
    <Screen style={{marginTop:0, flexDirection:"row",paddingTop:0}}>
      <GooglePlacesAutocomplete
      query={{ key: "AIzaSyBllZ1oDzbC5L60pt386AYDTn_cBwkoGuE" }}
      onPress={(data, details = null) => {
        console.log(data.description);
        const city = data.description.split(",")[0];
        cityHandler(city);
      }}
      placeholder='Search'
      styles={{
          textInput:{
              backgroundColor:"#eee",
              borderRadius:20,
              fontWeight:"700",
              marginTop:7,
          },
          textInputContainer:{
            backgroundColor:"#eee",
            borderRadius:50,
            flexDirection:"row",
            alignItems:"center",
            marginRight:20,
          },
      }}
      renderLeftButton={() => (
        <View style={{marginLeft:10}}>
          <Ionicons name='location-sharp' size={24} />
        </View>
      )}
      renderRightButton={() => (
        <View
        style={{
          flexDirection:"row",
          marginRight:8,
          backgroundColor:"white",
          padding:9,
          borderRadius:30,
          alignItems:"center",
        }}
        >
          <AntDesign
          name='clockcircle'
          size={11}
          style={{marginRight:6}}
          />
          <Text
          // onPress={(data, details = null) => {cityHandler(city)}}
          // onPress={(data, details = null) => {
          //   console.log(data.description);
          //   const city = data[1];
          //   cityHandler(city);
          // }}
          >Search</Text>
        </View>
      )}
      />
    </Screen>
  );
}
