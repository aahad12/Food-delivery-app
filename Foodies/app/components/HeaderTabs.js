import React, { useState } from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';
import Screen from './Screen';


export default function HeaderTabs(props) {
    // const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <Screen>
            <View
            style={{
             flexDirection:"row",
             alignSelf:"center",
            }}
            >
        <HeaderButton text="Delivery" btnColor="black" textColor="white" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
        <HeaderButton text="Pickup"   btnColor="pink"  textColor="black" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            </View>
    </Screen>
  );
}

const HeaderButton = (props) => (
    <TouchableOpacity
    style={{
        backgroundColor:props.activeTab === props.text ? "black":"white",
        paddingVertical:7,
        paddingHorizontal:16,
        borderRadius:30,
    }}
    onPress={() => props.setActiveTab(props.text)}
    >
        <Text
        style={{
            color:props.activeTab === props.text ? "white":"black",
            fontSize:15,
            fontWeight:"bold",
            // fontWeight:"900",
        }}
        > 
        {props.text}
        </Text>
    </TouchableOpacity>
)
