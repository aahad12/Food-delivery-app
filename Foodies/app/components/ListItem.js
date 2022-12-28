import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './AppText';


function ListItem({title,subTitle,image,IconComponent , onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions} >
        <TouchableHighlight onPress ={onPress}
        underlayColor={colors.light}
        >
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer }>
            <AppText style={styles.title} numberOfLines={1} > {title} </AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}> {subTitle} </AppText>}
            </View>
            <MaterialCommunityIcons 
            color={colors.light}
            size={25}
            name="chevron-right" />
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row",
        padding:15,
        backgroundColor:colors.white
    },
    detailsContainer:{
        flex:1,
        marginLeft:10,
        justifyContent:"center"
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:5,
        resizeMode:"contain"
    },
    subTitle:{
        color:colors.grey,
    },
    title:{
        fontWeight:"500",
    }
})

export default ListItem;