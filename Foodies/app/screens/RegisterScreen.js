import React from 'react';
import { Image,StyleSheet,Alert, View, Text, TouchableOpacity, TextInput } from 'react-native';

import {Formik} from "formik";
import * as Yup from "yup";
import {firebase,db } from '../../firebase';


import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import ErrorMessage from '../components/ErrorMessage';



const validationSchema = Yup.object().shape({
    name:     Yup.string().required().min(3).label("Name"),
    email:    Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

const getRandomProfilePicture = async () => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
}

const onRegister = async (email,password,name) => {
    try{
      const authUser = await firebase.auth().createUserWithEmailAndPassword(email,password)
      console.log("firebase user create successful",name,email,password)
      db.collection('users').add({
          owner_uid : authUser.user.uid,
          username: name,
        //   displayName: user.name,
          email:authUser.user.email,
          profile_picture:await getRandomProfilePicture(),
      })
    } catch (error) {
      Alert.alert(error.message)
    }
  } 

function RegisterScreen({navigation}, ...props) {
    return (
        <View style={styles.container}>
            <Image 
        source={require("../assets/design4.png")}
        style={{marginTop:-230,left:-230,position:"relative",width:400,height:350}} //right
        />
        <Image 
        source={require("../assets/design4.png")}
        style={{marginTop:-120,left:240,position:"absolute",width:400,height:250}}
        />
        <Image 
        source={require("../assets/design1.png")}
        style={{bottom:-250,right:-110,width:400,height:400,position:"absolute"}}
        />
      <Image 
      style={styles.logo}
      source={require("../assets/f1.gif")} />
        <Text style={styles.greeting}>{"Sign up to get Started."}</Text>
            <Formik
            initialValues={{name:"",email:"",password:""}}
            // onSubmit={values=> console.log(values)}
            onSubmit={values => {onRegister(values.email,values.password,values.name)}}
            validationSchema={validationSchema}
            >
            {({handleChange,handleSubmit,errors,values,setFieldTouched,touched}) => (
            <>
             <View style={styles.form}>
             <View>
            <Text style={styles.inputTitle}>Name</Text>
            <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            keyboardtype="name"
            onBlur={() => setFieldTouched("name")}
            onChangeText={handleChange("name")}
            placeholder="Atleast 3 character"
            textContentType="name"
            value={values.name}
            />
            <ErrorMessage error={errors.name} visible={touched.name} />
            </View>
          <View style={{marginTop:20}}>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          onBlur={() => setFieldTouched("email")}
          onChangeText={handleChange("email")}
          placeholder="example@gmail.com"
        textContentType="emailAddress"
        value={values.email}
          />
          <ErrorMessage error={errors.email} visible={touched.email} /> 
          </View>
      {/* <AppText style={{color:"red"}}>{errors.email}</AppText> */}
      <View style={{marginTop:20}}>
      <Text style={styles.inputTitle}>Password</Text>
      <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      icon="lock"
      onBlur={() => setFieldTouched("password")}
      onChangeText={handleChange("password")}
      placeholder="Atleast 6 character"
      securetextEntry
      textContentType="password"
      value={values.password}
      />
      <ErrorMessage error={errors.password} visible={touched.password} />
            </View>
        </View>
             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                 <Text style={{color:"#fff",fontSize:15}}>Register</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{alignSelf:"center", marginTop:20}}>
                 <Text style={{color:"#414959",fontSize:15}}>Already Registered User?
                     <Text style={{fontWeight:"bold",fontSize:18, color:"#E9446A"}} onPress={() => navigation.navigate("Login")}> Login</Text>
                 </Text>
             </TouchableOpacity>
            {/* <AppButton title="Register" onPress={handleSubmit} /> */}
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
        width:200,
        height:130,
        resizeMode:"contain",
        alignSelf:"center",
        position:"absolute",
        marginTop:88,
        borderRadius:10,backgroundColor:"#fff",
      },
      greeting:{
          marginTop:50,
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
          fontSize:16,
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
})


export default RegisterScreen;




// import React from 'react';
// import { Image,StyleSheet,Alert } from 'react-native';

// import {Formik} from "formik";
// import * as Yup from "yup";
// import {firebase,db } from '../../firebase';


// import AppButton from '../components/AppButton';
// import AppText from '../components/AppText';
// import AppTextInput from '../components/AppTextInput';
// import Screen from '../components/Screen';
// import ErrorMessage from '../components/ErrorMessage';



// const validationSchema = Yup.object().shape({
//     name:     Yup.string().required().min(3).label("Name"),
//     email:    Yup.string().required().email().label("Email"),
//     password: Yup.string().required().min(4).label("Password")
// });

// const getRandomProfilePicture = async () => {
//     const response = await fetch('https://randomuser.me/api')
//     const data = await response.json()
//     return data.results[0].picture.large
// }

// const onRegister = async (email,password,name) => {
//     try{
//       const authUser = await firebase.auth().createUserWithEmailAndPassword(email,password)
//       console.log("firebase user create successful",name,email,password)
//       db.collection('users').add({
//           owner_uid : authUser.user.uid,
//           username: name,
//         //   displayName: user.name,
//           email:authUser.user.email,
//           profile_picture:await getRandomProfilePicture(),
//       })
//     } catch (error) {
//       Alert.alert(error.message)
//     }
//   } 

// function RegisterScreen(props) {
//     return (
//         <Screen style={styles.container}>
//             <Image
//             style={styles.logo}
//             source={require("../assets/back.gif")}
//             />
//             <Formik
//             initialValues={{name:"",email:"",password:""}}
//             // onSubmit={values=> console.log(values)}
//             onSubmit={values => {onRegister(values.email,values.password,values.name)}}
//             validationSchema={validationSchema}
//             >
//             {({handleChange,handleSubmit,errors,values,setFieldTouched,touched}) => (
//             <>
//             <AppTextInput
//             autoCapitalize="none"
//             autoCorrect={false}
//             icon="account"
//             keyboardtype="name"
//             onBlur={() => setFieldTouched("name")}
//             onChangeText={handleChange("name")}
//             placeholder="Name"
//             textContentType="name"
//             value={values.name}
//             />
//             <ErrorMessage error={errors.name} visible={touched.name} />
//             <AppTextInput
//              autoCapitalize="none"
//              autoCorrect={false}
//              icon="email"
//              keyboardtype="email"
//              onBlur={() => setFieldTouched("email")}
//              onChangeText={handleChange("email")}
//              placeholder="Email"
//              textContentType="emailAddress"
//              value={values.email}
//             />
//             <ErrorMessage error={errors.email} visible={touched.email} />
//             <AppTextInput
//              autoCapitalize="none"
//              autoCorrect={false}
//              icon="lock"
//              onBlur={() => setFieldTouched("password")}
//              onChangeText={handleChange("password")}
//              placeholder="Password"
//              securetextEntry
//              textContentType="password"
//              value={values.password}
//             />
//             <ErrorMessage error={errors.password} visible={touched.password}  />
//             <AppButton title="Register" onPress={handleSubmit} />
//                     </>
//                 )}
//             </Formik>
            
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container:{
//         padding:15,
//     },
//     logo:{
//         width:300,
//         height:150,
//         resizeMode:"contain",
//         alignSelf:"center",
//         marginBottom:50,
//     }
    
// })


// export default RegisterScreen;