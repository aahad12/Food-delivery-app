import React from 'react';
import { Image, View,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import ListItem from "../components/ListItem";
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from "../components/Icon";
import {firebase} from "../../firebase";
import {getAuth} from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;


const handleSignout = async () => { 
try {
    await firebase.auth().signOut()
    console.log("Logged Out successfully!")
}catch (error){
    console.log(error)
}
}


function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                title="Foodies"
                // title={user.displayName}
                // subTitle={user.email}
                subTitle="hey Subscriber"
                image={require("../assets/logo.png")}
                />
            </View>
            <ListItem 
            title="Log Out"
            IconComponent={<Icon backgroundColor="#ffe66d" name='logout'  />}
            onPress={handleSignout}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.light,
    },
    container:{
        marginVertical:20
    }

})

export default AccountScreen;

{/* <ListItem
title="Mosh hamedani"
subTitle="aahadureshi786@gmail.com"
image={require("../assets/mosh.jpg")}
/> */}

{/* <ListItem 
title="Log Out"
IconComponent={<Icon name="logout" backgroundColor="#ffe66d" /> }
/> */}