import 'react-native-gesture-handler';

import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';

import {Provider as AuthProvider} from './src/context/AuthContext'



import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();




export default function Create(){
 return (
  <AuthProvider>
   <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }}/>
     <Stack.Screen name="signin" component={SigninScreen} options={{ headerShown: false }}/>
     <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/> 
   </Stack.Navigator>
   </NavigationContainer>
   </AuthProvider>
 );
}






/************BUTTOMTAPNAVIGATOR */


 function Home (){
 return(
   <AuthProvider>
   {/* <NavigationContainer> */}
   <Tab.Navigator tabstyle={{}}
   initialRouteName="Tracks"
   tabBarOptions={{
     activeTintColor: '#360f9a',
     inactiveTintColor: 'gray',
   }}
   screenOptions={({ route }) => ({
     
     tabBarIcon: ({ focused, color, size }) => {
       let iconName;
        color='gray';

       if (route.name === 'Tracks') {
         iconName = 'ios-home'
         color= focused ?'#360f9a' : 'gray';
           
       } else if (route.name === 'Notifications') {
         iconName = focused ? 'ios-notifications' : 'md-notifications';
         color= focused ?'#360f9a' : 'gray';
       } else if (route.name === 'Account') {
       iconName =  'ios-person'
       color= focused ?'#360f9a' : 'gray';
     }else if (route.name === 'Create') {
       iconName =  'ios-add-circle'
       color= focused ?'#360f9a' : 'gray';
     }
       
       
       

       
       return <Ionicons name={iconName} size={size} color={color} />;
     },
   })}
   
   
 >
   <Tab.Screen
     name="Tracks"
     component={TrackListScreen}

    
   />
   <Tab.Screen
     name="Create"
     component={TrackCreateScreen}

    
   />
    <Tab.Screen
     name="Account"
     component={AccountScreen}
     
     
   />

    <Tab.Screen
     name="Sign in"
     component={SigninScreen}
     
     
   />

<Tab.Screen
     name="Sign up"
     component={SignupScreen}
     
     
   />
  
 

  
 </Tab.Navigator>
 {/* </NavigationContainer> */}
 </AuthProvider>
 )
}