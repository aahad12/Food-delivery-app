import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import {useSelector} from "react-redux";
import LottieView from "lottie-react-native"

import MenuItem from "../components/restaurantDetail/MenuItem"
import Screen from '../components/Screen';
import {firebase,db} from "../../firebase";

export default function OrderCompleted() {
  const [ lastOrder, setLastOrder] = useState({
    items:[
      {
      title:"Bologna",
      description:"with butte lettuce, tomato and sauce bechana",
      price:"$13.50",
      image:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    ],
  });
    const {items,restaurantName} = useSelector((state) => state.cartReducer.selectedItems);

    const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr,0);

    const totalUSD = total.toLocaleString("en",{
        style:"currency",
        currency:"USD",
    });

    useEffect(() => {
      const db = firebase.firestore();
      const unsubscribe = db.collection('orders')
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
      return () => unsubscribe();
    },[]);

  return (
      <Screen style={{backgroundColor:"white"}}>
        <View style={{
          margin:15,
          alignItems:"center",
          height:"100%",
          flex:1,
        }}
        >
          <View style={{flexDirection:"row"}}>
          {/* <LottieView
          style={{height:100, alignSelf:"center",marginBottom:30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
          /> */}
          <LottieView
          style={{height:100, alignSelf:"center",marginBottom:30 }}
          source={require("../assets/animations/service.json")}
          autoPlay
          speed={0.5}
          // loop={false}
          />
          </View>
          <View flexDirection="row">
          <LottieView
          style={{height:40, alignSelf:"center",paddingRight:10}}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
          />
            <Text style={{color:"black", fontWeight:"bold",fontSize:18}}>Your order at {restaurantName} has been placed for {totalUSD} </Text>
          </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <MenuItem foods={lastOrder.items} hideCheckbox={true} />
      <LottieView
      style={{height:200, alignSelf:"center"}}
      source={require("../assets/animations/cooking.json")}
      autoPlay
      speed={0.5}
      //   loop={false}
      />
      </ScrollView>
    </View>
    </Screen>
  )
}