import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  { 
  name:"Beachside Bar",
  image_url:"http://cdn.cnn.com/cnnnext/dam/assets/130605154832-beach-bars.jpg",
  // image_url:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  categories: ["Cafe", "Bar" ],
  price:"$$",
  reviews:1244,
  rating:4.5,
},
{ 
  name:"Benihana",
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-ZguQI4WAfJd4c_0mmGv__FVF375NL-lEQ&usqp=CAU",
  // image_url:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  categories: ["Cafe", "hotel" ],
  price:"$$",
  reviews:1244,
  rating:3.5,
},
{ 
  name:"Cityside Bar",
  image_url:"https://res.cloudinary.com/https-highape-com/image/upload/q_auto:eco,f_auto,h_380/v1559215504/dzmjuuugectghcw8lxb2.jpg",
  // image_url:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  categories: ["Cafe", "Bar" ],
  price:"$$",
  reviews:1244,
  rating:4.5,
},
{ 
  name:"India's Grill",
  image_url:"https://media-cdn.tripadvisor.com/media/photo-s/19/7c/bd/6c/bienvenue.jpg",
  // image_url:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  categories: ["Indian", "Bar" ],
  price:"$$",
  reviews:700,
  rating:4.9,
},
]

const RestaurantImage =(props) => (
    <>
    <Image
    source={{
        uri:props.image,
    }}
    style={{width:"100%",height:180}}
    />
    <TouchableOpacity style={{position:"absolute",right:20, top:20 }}>
        <MaterialCommunityIcons name='heart-outline' size={25} color={"white"}  />
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View 
    style={{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginTop:10,
      }}
      >
        <View>
        <Text style={{fontSize:15,fontWeight:"bold"}}> {props.name} </Text>
        <Text style={{fontSize:13,color:"grey"}}>30-45 • min </Text>
        </View>
        <View style={{backgroundColor:"#eee",height:30,width:30,alignItems:"center",justifyContent:"center",borderRadius:15,}}>
        <Text>{props.rating}</Text>
        </View>
    </View>
)

export default function RestaurantItems({navigation, ...props}) {
  return (
    <>
    {props.restaurantData.map((restaurant, index) => (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}} key={index}
    onPress={() => 
      navigation.navigate("RestaurantDetails",{
        name: restaurant.name,
        image: restaurant.image_url,
        price: restaurant.price,
        reviews:restaurant.review_count,
        rating: restaurant.rating,
        categories: restaurant.categories,
    })
  }
    >
        <View
        style={{
          marginTop:10,
          padding:15,
          backgroundColor:"white",
        }}
        >
      <RestaurantImage image={restaurant.image_url} />
      <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
    </View>
    </TouchableOpacity>
    ))}
    </>
  );
}





