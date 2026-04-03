import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const account = () => {

   //Ignore this for now 
  const basePoint:string = "http://172.16.6.115:9020";
  const [data , setData ] = useState([])

  async function getAccountPage(){

    const token:any = await SecureStore.getItemAsync("token") || null;

    if(token ==null){
      //This means the login session is invalid, redirect them to the login/register page
      return 
    }

    const response:any = await fetch(basePoint+"/account",{
      method:"GET",
      headers:{
        Authorization:token
      }
    });

    if(!response.ok){
        //This means the login session is invalid, redirect them to the login/register page
        return 
    }

    const data:any = await response.json();
    //This means the login session is valid therefore the data received may be displayed
    setData(data)
  }

  useEffect(()=>{ getAccountPage(); },[] )


  /*The data returned will be array , it contain the user's information which you can display on the account page 

    The data will include all their posts,bio,username, personal information etc
  */
  return (

    <View>
      <Text>account</Text>
    </View>
  )
}

export default account