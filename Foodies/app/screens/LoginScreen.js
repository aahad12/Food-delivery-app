import React, { useState } from 'react';
import { Image, StyleSheet,Alert, TextInput,Button, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import { Formik } from 'formik'; 
import * as Yup from 'yup'; 
import {firebase} from '../../firebase';


import AppText from "../components/AppText";
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  email:    Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

const onLogin = async (email,password) => {
  try{
    await firebase.auth().signInWithEmailAndPassword(email,password)
    console.log("firebase Login Successful",email,password)
  } catch (error) {
    Alert.alert(error.message)
  }
} 
function LoginScreen({navigation}, ...props) {
    return (
        <View style={styles.container}>
        <Image 
        source={require("../assets/design4.png")}
        style={{marginTop:-210,right:10,width:400,height:350}}
        />

        <Image 
        source={require("../assets/design1.png")}
        style={{bottom:-250,right:-110,width:400,height:400,position:"absolute"}}
        />
      <Image 
      style={styles.logo}
      source={require("../assets/heart.png")} />
      <Text style={styles.greeting}>{"hello again. \nWelcome back"}</Text>
      {/* <View style={styles.error}>
          <Text></Text>
        </View> */}
      <Formik
      initialValues={{email:'', password:''}}
      // onSubmit={values=> console.log(values)}
      onSubmit={values => { onLogin(values.email, values.password)}}
      validationSchema={validationSchema}
      >
        {({handleChange, handleSubmit, errors,values, setFieldTouched, touched}) => (
          <>
          <View style={styles.form}>
          <View>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          onBlur={() => setFieldTouched("email")}
          onChangeText={handleChange("email")}
        //   placeholder="Email"
        textContentType="emailAddress"
        value={values.email}
          />
          <ErrorMessage error={errors.email} visible={touched.email} /> 
          </View>
      {/* <AppText style={{color:"red"}}>{errors.email}</AppText> */}
      <View style={{marginTop:32}}>
      <Text style={styles.inputTitle}>Password</Text>
      <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      icon="lock"
      onBlur={() => setFieldTouched("password")}
      onChangeText={handleChange("password")}
      // placeholder="Password"
      securetextEntry
      textContentType="password"
      value={values.password}
      />
      <ErrorMessage error={errors.password} visible={touched.password} />
            </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{color:"#fff" , fontSize:15}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf:"center", marginTop:20}}>
            <Text style={{color:"#414959" , fontSize:15}}>
                New to Foodies? <Text style={{fontWeight:"bold",fontSize:16, color:"#E9446A"}} onPress={() => navigation.navigate("Register")}>Sign Up</Text>
            </Text>
        </TouchableOpacity>
      {/* <AppButton title="Login" onPress={handleSubmit} /> */}
      </>
      )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  background:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",
  },
  logo:{
    width:100,
    height:120,
    resizeMode:"contain",
    alignSelf:"center",
    marginBottom:20,
    position:"absolute",
    marginTop:60,
    borderRadius:20
  },
  greeting:{
      marginTop:32,
      fontSize:18,
      fontWeight:"400",
      textAlign:"center",
      marginBottom:30
  },
  error:{
    height:72,
      alignItems:"center",
      justifyContent:"center",
      marginHorizontal:30
  },
  form:{
      marginBottom:40,
      marginHorizontal:20,
    },
  inputTitle:{
      color:"#8A8F9E",
      fontSize:14,
      textTransform:"uppercase",
  },
  input:{
      borderBottomColor:"#8A8F9E",
      borderBottomWidth:StyleSheet.hairlineWidth,
      height:40,
      fontSize:18,
      color:"#161F3D"
  },
  button:{
    marginHorizontal:30,
    backgroundColor:"#E9446A",
    //   backgroundColor:"red",
    borderRadius:4,
    height:52,
    alignItems:"center",
    justifyContent:"center",
  }
});


export default LoginScreen;

// import React, { useState } from 'react';
// import { Image, StyleSheet,Alert} from 'react-native';
// import { Formik } from 'formik'; 
// import * as Yup from 'yup'; 
// import {firebase} from '../../firebase';


// import AppText from "../components/AppText";
// import AppButton from '../components/AppButton';
// import AppTextInput from '../components/AppTextInput';
// import Screen from '../components/Screen';
// import ErrorMessage from '../components/ErrorMessage';

// const validationSchema = Yup.object().shape({
//   email:    Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password")
// });

// const onLogin = async (email,password) => {
//   try{
//     await firebase.auth().signInWithEmailAndPassword(email,password)
//     console.log("firebase Login Successful",email,password)
//   } catch (error) {
//     Alert.alert(error.message)
//   }
// } 
// function LoginScreen(props) {
//     return (
//     <Screen style={styles.container}>
//       <Image 
//       style={styles.logo}
//       source={require("../assets/logo.png")} />
//       <Formik
//       initialValues={{email:'', password:''}}
//       // onSubmit={values=> console.log(values)}
//       onSubmit={values => { onLogin(values.email, values.password)}}
//       validationSchema={validationSchema}
//       >
//         {({handleChange, handleSubmit, errors,values, setFieldTouched, touched}) => (
//           <>
//           <AppTextInput
//             autoCapitalize="none"
//             autoCorrect={false}
//             icon="email"
//             keyboardType="email-address"
//             onBlur={() => setFieldTouched("email")}
//             onChangeText={handleChange("email")}
//             placeholder="Email"
//             textContentType="emailAddress"
//             value={values.email}
//           />
//           <ErrorMessage error={errors.email} visible={touched.email} /> 
//       {/* <AppText style={{color:"red"}}>{errors.email}</AppText> */}
//       <AppTextInput
//             autoCapitalize="none"
//             autoCorrect={false}
//             icon="lock"
//             onBlur={() => setFieldTouched("password")}
//             onChangeText={handleChange("password")}
//             placeholder="Password"
//             securetextEntry
//             textContentType="password"
//             value={values.password}
//             />
//       <ErrorMessage error={errors.password} visible={touched.password} />
//       <AppButton title="Login" onPress={handleSubmit} />
//       </>
//       )}
//       </Formik>
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     padding:10,
//   },
//   logo:{
//     width:250,
//     height:200,
//     resizeMode:"contain",
//     alignSelf:"center",
//     marginBottom:20
//   }
// });

// export default LoginScreen;