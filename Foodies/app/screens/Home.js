import React,{useState,useEffect} from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';

import HeaderTabs from '../components/HeaderTabs';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants, } from '../components/RestaurantItems';

const YELP_API_KEY = "nOARhjZUMzDys6NFcWBXqLEWYb9IJlgKRyv1WpClZUTcEAq5pRw9iTQ571xcAz3YOn-uRQOZiOieJeg3OtRzzeC0EbnagQh9IY5dvWlBU8vgSgDpP1g0ejPpTgsEYnYx"
export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = useState("Fresno");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp =() => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
    const apiOptions = {
      headers:{
        Authorization : `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then(json => 
      setRestaurantData(
      json.businesses.filter((business) => 
      business.transactions.includes(activeTab.toLocaleLowerCase())
      )
    )
   );
  };

useEffect(() => {
  getRestaurantsFromYelp();
}, [city, activeTab]);


  return (
    <Screen style={{backgroundColor:"#eee",}}>
      <StatusBar hidden />
      <Screen style={{backgroundColor:"white",flex:0,height:170,padding:5,paddingTop:0}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity}  />
      </Screen>
      <ScrollView>
      <Categories />
      <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
    </Screen>
  );
}
