import { StyleSheet,View,Text,Image,Pressable,ToastAndroid,Alert } from "react-native";
import React,{useEffect,useState} from 'react'
// import Ignore_NotInterested from "./Ignore_NotInterested";
import Ignore_NotInterested from "./IgnoreNotIntereseted";
export const IgnoreComponent =(props) =>{

   async function onNotinterested(){
        
        let x= parseInt(props.countStore)  
        props.updateCount()
        props.onIgnore()
    }
        return (
          <View style={styles.contain}>
                        <Pressable
                          onPress={()=>onNotinterested()}
                        >
                          <View style={styles.ignore}>
                            
                            <Ignore_NotInterested></Ignore_NotInterested>
                          </View>
                        </Pressable>
          </View>
        );


}

const styles= StyleSheet.create({
    skips:{
        position:"absolute",
        height:45,
        width:"100%",
        backgroundColor:"#4B6CB7",
        zIndex:100,
        top:500,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30
    },
    skipText:{
        fontSize:16,
        color:"#ffffff"
    },
    ignore: {
        backgroundColor: "#182848",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
      },
      notinterested: {
        flex: 1,
        alignItems: "flex-end",
        padding: 10,
      },
})