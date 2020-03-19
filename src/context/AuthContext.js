import CreateDataContext from './CreateDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';


const authReducer =(state ,action) =>{
    switch (action.type){
        case '1':
            return {  ...state,errorMessage: action.payload};
        
        case 'signin':
            return {  errorMessage :'',token: action.payload};
        case 'clear_error_message':
            return {...state,errorMessage:''};
        case 'signout' :
            return  {token :null , errorMessage: ''};
        default:
            return state;

    }
}

//we removed return and put async at same line  'equilivant'
const tryLocalSignin =dispatch =>async ()=>{
    const token = await AsyncStorage.getItem('token'); 
    if (token){
        dispatch ({type : 'signin' , payload :token})
}
}

const clearErrorMessage =dispatch =>() =>{
    dispatch({type :'clear_error_message'})
}


const signout =dispatch=>async(callback) =>{
    await AsyncStorage.removeItem('token');
    dispatch({type : 'signout'});
    if(callback){
        callback();
    }
  const tok=  await AsyncStorage.getItem('token');
  console.log(tok);
}

const signup = dispatch => async ({email,password},callback)=>{
        try{
            const response =await trackerApi.post('/signup', {email,password})
            await AsyncStorage.setItem('token', response.data.token);
            dispatch ({type : 'signup' , payload : response.data.token})
            if (callback){
            callback();
            }
            console.log("Done");
        }catch(err){
           dispatch ({type : '1' , payload : 'somthing went wrong with sign up'})
        
              console.log("Erorr")
        }
    }



    const signin = dispatch => async ({email,password},callback)=>{
        try{
            const response =await trackerApi.post('/signin', {email,password})
            await AsyncStorage.setItem('token', response.data.token);
            dispatch ({type : 'signin' , payload : response.data.token})
            if (callback){
            callback();
            }
            console.log("Done");
        }catch(err){
           dispatch ({type : '1' , payload : 'somthing went wrong with sign in'})
        
              console.log("Erorr")
        }
    }


export const {Provider , Context } =CreateDataContext(
    authReducer,
    {signup, signin ,clearErrorMessage, tryLocalSignin, signout},
    {token: null , errorMessage : "" }
);