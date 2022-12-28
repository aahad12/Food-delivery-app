import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

import About from '../components/restaurantDetail/About'
import MenuItem from '../components/restaurantDetail/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
  {
      title:"Lasagna",
      description: "with butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:"https://www.sprinklesandsprouts.com/wp-content/uploads/2019/07/Classic-Lasagna-with-Bechamel-1.jpg",
    //   image:"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    //   image:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
      title:"Tandoori Chicken",
      description: "with butter lettuce, tomato and sauce bechamel",
      price: "$19.20",
      image:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Stove_Top_Grilled__Smoked_Tandoori_Chicken.jpg",
    //   image:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
      title:"Chilaquiles",
      description: "with butter lettuce, tomato and sauce bechamel",
      price: "$14.50",
      image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F03%2F19%2Fchilaquiles-rojos-FT-RECIPE0420-1.jpg",
    //   image:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
      title:"Chicken Caesar Salad",
      description: "with butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:"https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/12/17/0/CCKitchens_kale-buttermilk-caesar-salad-with-chicken-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1357846483478.jpeg",
    //   image:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

export default function RestaurantDetails({route,navigation}) {
  return (
    <View style={{flex:1}}>
        <About route={route} />
        <Divider width={1.8} style={{marginVertical:20}} />
        <MenuItem restaurantName={route.params.name} foods={foods} />
        <ViewCart navigation={navigation}  />
    </View>
  )
}