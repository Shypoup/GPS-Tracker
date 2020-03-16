import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text , Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreenScreen =() => {
    const [email,setEmail] =useState('');
    const [password,setPassword]=useState('');

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
    <Spacer>
    <Button title="Sign Up" />
    </Spacer>
    </View>
    )
}


const styles= StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        marginBottom:250,
    }
});

export default SignupScreenScreen ;