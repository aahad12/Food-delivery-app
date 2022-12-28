import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Screen from './Screen';

const items = [
    {
        Image: require("../assets/images/shopping-bag.png"),
        text:"Pick-up",
    },
    {
        Image:require("../assets/images/soft-drink.png"),
        text:"Soft Drinks",
    },
    {
        Image:require("../assets/images/bread.png"),
        text:"Bakery Items",
    },
    {
        Image:require("../assets/images/fast-food.png"),
        text:"Fast Foods",
    },
    {
        Image:require("../assets/images/deals.png"),
        text:"Deals",
    },
    {
        Image:require("../assets/images/coffee.png"),
        text:"Coffee & Tea",
    },
    {
        Image:require("../assets/images/desserts.png"),
        text:"Desserts",
    },
]


export default function Categories() {
  return (
      <View 
      style={{
          marginTop:5,
          backgroundColor:"#fff",
          paddingVertical:10,
          paddingLeft:20,
      }}
      >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item,index) => (
    <View key={index} style={{alignItems:"center", marginRight:30 }}>
        <Image 
        source={item.Image}
        style={{
            width:50,
            height:40,
            resizeMode:"contain",
        }} />
        <Text style={{fontSize:13, fontWeight:"bold"}}>{item.text}</Text>
    </View>
    ))}
    </ScrollView>
    </View>
  );
}
