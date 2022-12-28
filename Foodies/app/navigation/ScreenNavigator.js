import React, { useEffect, useState } from 'react';
import {firebase} from "../../firebase";
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const ScreenNavigator = () => {
    const [currentUser, setCurrentUser] = useState(null)

    const userHandler = user => 
    user ? setCurrentUser(user) : setCurrentUser(null)

    useEffect(
        () => firebase.auth().onAuthStateChanged(user => userHandler(user)),
        []
    )
    return <>{currentUser ? <AppNavigator /> : <AuthNavigator />}</>
}

export default ScreenNavigator;