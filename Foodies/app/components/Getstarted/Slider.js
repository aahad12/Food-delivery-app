import * as React from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  Animated,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import AppButton from "../AppButton"

const { width, height } = Dimensions.get("screen");

const bgs = ["#B98EFF", "#DDBEFE", "#FF63ED", "#A5BBFF"];
const DATA = [
  {
    key: "3571572",
    title: "Foodies Multi-lateral Restaurant.",
    description:"Modern Simple Wrought Multilateral Restaurant at your service!",
    // description:
      // "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    // image: "https://cdn-icons-png.flaticon.com/512/7011/7011628.png"
    // image:"https://cdn-icons-png.flaticon.com/512/1037/1037855.png",
    image:"https://cdn-icons.flaticon.com/png/512/2098/premium/2098318.png?token=exp=1648268615~hmac=000e1f7f290583062c2da5547d6d41c3",
// image: "https://image.flaticon.com/icons/png/256/3571/3571572.png"
  },
  {
    key: "3571747",
    title: "Special Desert everyday at your table!",
    description:
      "Spicy food from our best chef from all over the world!",
    // image: "https://cdn-icons-png.flaticon.com/512/7011/7011628.png"
    // image:"https://cdn-icons-png.flaticon.com/512/776/776443.png",
    image:"https://cdn-icons-png.flaticon.com/512/1037/1037855.png",
    // image:"https://cdn-icons.flaticon.com/png/512/5155/premium/5155646.png?token=exp=1647799422~hmac=17cb083c452af9742addd6a1da99923b",
    // image: "https://image.flaticon.com/icons/png/256/3571/3571747.png"
  },
  {
    key: "3571680",
    title: "Chessy Grilled Pizza at your home!",
    description:
      "New Delicious Pizza and many more other items with other offers!",
    // image: "https://cdn-icons-png.flaticon.com/512/7011/7011628.png"
    // image:"https://cdn-icons-png.flaticon.com/512/706/706164.png",
    image:"https://cdn-icons-png.flaticon.com/512/2674/2674065.png",
    // image: "https://image.flaticon.com/icons/png/256/3571/3571680.png"
  },
  {
    key: "3571603",
    title: "A Family Restaurant, enjoy out best meals and other offers!",
    description: "New Dishes on daily basis with extra meals and fries!",
    image:"https://cdn-icons-png.flaticon.com/512/895/895646.png",
    // image: "https://cdn-icons-png.flaticon.com/512/7011/7011628.png"
    // image: "https://image.flaticon.com/icons/png/256/3571/3571603.png",
  }
];

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ positon: "absolute", bottom: 10,flexDirection:"row" }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp"
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: "clamp"
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "#fff",
              right:-135,
              opacity,
              margin: 10,
              transform: [
                {
                  scale
                }
              ]
            }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg)
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor
        }
      ]}
    />
  );
};

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), 
    new Animated.Value(width)),1);

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"]
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0]
  });

  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: "#fff",
        borderRadius: 86,
        position: "absolute",
        top: -height * 0.64,
        left: -height * 0.3,
        transform: [
          {
            rotate
          },
          {
            translateX
          }
        ]
      }}
    />
  );
};

export default function App({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        // contentContainerStyle={{ paddingBottom: 0 }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems:"center", paddingTop:110 }}>
              <View
                style={{
                  justifyContent: "center",// import { TouchableOpacity } from "react-native-gesture-handler";
                //   backgroundColor:"red"
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: "contain",
                    marginBottom:90
                  }}
                />
              </View>
              <View style={{padding:20}}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 28,
                    marginBottom: 2,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontWeight: "500" }}> {item.description} </Text>
              </View>
            </View>
          );
        }}
      />
        <Indicator scrollX={scrollX} />
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Login")}>
                 <Text style={{color:"black",fontSize:15}}>Login</Text>
             </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Register")}>
              <Text style={{color:"black",fontSize:15}}>Register</Text>
              </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    button1:{
        marginRight:10,
        marginLeft:60,
        marginBottom:80,
        marginTop:10,
        // backgroundColor:"#E9446A",
        backgroundColor:"#fff",
        borderRadius:20,
        height:52,
        width:100,
        alignItems:"center",
        justifyContent:"center",
        // marginBottom:20
      },  
      button2:{
        marginRight:10,
        marginLeft:30,
        marginBottom:80,
        marginTop:10,
        // backgroundColor:"#E9446A",
        backgroundColor:"#fff",
        borderRadius:20,
        height:52,
        width:100,
        alignItems:"center",
        justifyContent:"center",
        // marginBottom:20
      }  
})