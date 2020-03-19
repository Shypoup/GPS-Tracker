import React, {useState ,useContext , useEffect} from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import {Text , Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext } from  '../context/AuthContext'

const SignupScreenScreen =props => {
    const {state , signup, tryLocalSignin} =useContext(AuthContext);
    const [email,setEmail] =useState('');
    const [password,setPassword]=useState('');

    useEffect(()=>{
        tryLocalSignin();
    }, []);
 
    console.log(state);
    
    return(
    <View style={styles.container}>
    <Spacer>
    <Spacer>
    <Spacer>
    
    <Text h3>Sign up for Tracker</Text>
    </Spacer>
    </Spacer>
    </Spacer>
    
    <Spacer>
    <Input 
    label="Email"
    value={email}
    onChangeText={setEmail}
    autoCapitalize="none"
    autoCorrect={false}
    />
    </Spacer>
    <Spacer>
    
    <Input 
    secureTextEntry
    label="Password"
    value={password}
    onChangeText={setPassword}
    autoCapitalize="none"
    autoCorrect={false}
    />
    </Spacer>
    {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>: null }
    <Spacer>
    <Button title="Sign Up" 
    onPress ={()=> signup({email,password},()=>{
        props.navigation.navigate('Home');
    }) 
    
}
    />
  
  <TouchableOpacity  onPress={() => props.navigation.navigate('signin')}>
      <Spacer>
       <Text style={styles.link}>Already have an account ? Sign in</Text>
       </Spacer>
  </TouchableOpacity  >
  
    </Spacer>
    </View>
    )
}


const styles= StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        marginBottom:250,
    },
    errorMessage:{
        fontSize:13,
        color: 'red',
        marginLeft:28,
        
    },
    link:{
        color :'blue',
    }
});

export default SignupScreenScreen ;