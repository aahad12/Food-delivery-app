import React from 'react';
import { View, StyleSheet,TextInput } from 'react-native';

import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";


function AppTextInput({icon,width='100%', ...otherProps}) {
    return (
        <View style={[styles.container,{width}]}>
            { icon &&<MaterialCommunityIcons name={icon} size={20} color={colors.grey} style={styles.icon}  />}
            <TextInput 
            placeholderTextColor={defaultStyles.colors.grey}
            style={defaultStyles.text}{...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.lightgrey,
        // borderRadius:25,
        flexDirection:"row",
        padding:15,
        marginVertical:8
    },
    icon:{
        marginRight:10
    }
})

export default AppTextInput;