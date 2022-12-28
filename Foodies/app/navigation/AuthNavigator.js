import React,{useState,useEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Onboarding from "../components/Getstarted/Onboarding";
import Slider from "../components/Getstarted/Slider"
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem("alreadyLaunched","true");
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false);
      }
    });
  },[]);

  if(isFirstLaunch === null){
    return null;
  } else if (isFirstLaunch === true){
    return(
      <Stack.Navigator>
        <Stack.Screen name="Onboard" component={Onboarding} 
        options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Slider"
          component={Slider}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Register" options={{hearderShown: false}} component={RegisterScreen} />
      </Stack.Navigator>
    );
  } else {
    return(
      <Stack.Navigator>
      {/* <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      /> */}
              <Stack.Screen
          name="Slider"
          component={Slider}
          options={{ headerShown: false }}
        />
      <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
      <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterScreen} />
    </Stack.Navigator>
    );
  }
}

export default AuthNavigator;
