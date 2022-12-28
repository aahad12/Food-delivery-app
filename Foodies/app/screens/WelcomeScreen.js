import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require("../assets/bg1.jpg")}
        >
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text style={styles.tagline}>Taste Your best</Text>
            {/* <AppText>Taste your best</AppText> */}
            </View>
            <View style={styles.buttonsContainer}>
            <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
            <AppButton title="Register" color='secondary' onPress={() => navigation.navigate("Register")} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    buttonsContainer:{
        padding:20,
        width:"100%"
    },
    logo:{
        width:200,
        height:100,
        resizeMode:"contain"
    },
    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:"center",
    },
    tagline:{
        fontSize:25,
        fontWeight:"600",
        color:"white",
        paddingVertical:5,
    }
})

export default WelcomeScreen;