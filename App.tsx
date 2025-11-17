import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import ForgotPassword from './src/pages/ForgotPassword';
import HomePage from './src/pages/HomePage';
import DetailResepPage from './src/pages/DetailResepPage';
import AddRecipePage from './src/pages/AddRicipePage';
import FavoritePage from './src/pages/FavoritePage';
import CookedPage from './src/pages/CookedPage';
import ProfilePage from './src/pages/ProfilePage';
import EditProfilePage from './src/pages/EditProfilePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailResepPage"
          component={DetailResepPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddRecipePage"
          component={AddRecipePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FavoritePage"
          component={FavoritePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CookedPage"
          component={CookedPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfilePage"
          component={EditProfilePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;