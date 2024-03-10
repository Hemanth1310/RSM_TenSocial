import {  StyleSheet, Text, View, Image, Pressable,Alert, Modal } from "react-native";
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';r
import { useCallback } from 'react';
// import { ReactionContainer } from "./ReactionContainer";
// SplashScreen.preventAutoHideAsync();
// import { ReactionContainer } from "./ReactionContainerComponent";

function PostLayout(props) {


  return (
    <View style={styles.container}>
      <View style={styles.postdescription}>
        <View style={styles.titlesection}>
        <View style={styles.tag}>
            <Text style={styles.TextTag}>#{props.tag}</Text>
          </View>
          <View style={styles.heading}>
            <Text style={styles.postTitle}>{props.title}</Text>
          </View>

        </View>
        {props.postImage == "" ? (<View></View>):(<View style={styles.postimage}>
             <Image
               style={styles.postpic}
               source={{ uri: props.postImage }}
             ></Image>
           </View>)
        }
       
        <View style={styles.userinfo}>
          <View style={styles.infoSection}>
            <View style={styles.profilepic}>
              <Image
                style={styles.image}
                source={{ uri: props.propic }}
              ></Image>
            </View>
            <View style={styles.namendate}>
              <Text style={styles.username}>{props.userName}</Text>
              <Text style={styles.date}>{props.date}</Text>
            </View>
          </View>
          <View style={styles.actions}>
          
            <Pressable onPress={props.unfo}>
            <View style={styles.unfollowBtn}>
                <Text style={styles.unfollow}>Unfollow</Text>
                </View>
            </Pressable>
            
            <Image source={require("../../assets/3dots.png")}></Image>
          </View>
        </View>

        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
    },

    titlesection:{
        flexDirection:"column",
        marginBottom:15,
    },
    heading:{
        flex:3,
        justifyContent:"center",
        paddingHorizontal:5
    },
    postTitle:{
        fontSize:20,
        color:"#000000",
        // fontFamily:"Avenir-Regular",
    },
    tag:{
        // flex:1,
        // backgroundColor:"#4B6CB7",
        height:28,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:28,
        // alignItems:"center",
        justifyContent:"center"
    },
    TextTag:{
        color:"#3C3C3C",
        fontSize:12,
        // fontFamily:"Inter-Regular"
    },
    userinfo:{
        height:60,
        // width:"100%",
        
        // borderBottomWidth:2,
        // borderColor:"white",
        flexDirection:"row",
        marginBottom:10,
        // paddingHorizontal:10,
        alignItems:"center"
        
    },
    infoSection:{
        flexDirection:"row",
        flex:5,

    },
    postdescription:{

        paddingRight:10,
        paddingLeft:10,
        marginBottom:10
    },
    profilepic:{
        width:45,
        height:45,
        // borderWidth:2,
        flexDirection:"row",
        marginHorizontal:10,
        resizeMode: 'contain',
        borderRadius:100,
        overflow: 'hidden',
        alignItems:"center",

    },
    namendate:{
        justifyContent:"center",
        // width:"45%",
    },
    username:{
        fontSize:14,
        color:"#000000",
        // fontFamily:"Raleway-VariableFont-Bold",
        // fontFamily:"Inter-SemiBold"
        // marginHorizontal:10,
        
    },
    date:{
        fontSize:12,
        color:"#929899",
        // fontFamily:"Inter-Regular"
    },
    actions:{
        alignItems:"flex-end",
        flexDirection:"row",
        justifyContent:"flex-end",
       flex:2,
        // paddingHorizontal:10,
       
    },
    unfollowBtn:{
        borderRadius:30,
        borderColor:"#182848",
        borderWidth:2,
        padding:5,
        // marginLeft:30,
    },
    unfollow:{
        color:"#000000",
       
        // fontFamily:"Raleway-VariableFont-Bold",
        // fontFamily:"Inter-SemiBold",
       fontSize:12,
        // paddingTop:5,
        alignItems:"center",
        justifyContent:"center"
    },
    postpic:{
     
        
        height: 248,
        resizeMode:'contain',
        width:"100%",
        borderRadius:10
        
    },
    image:{
        height:60,
        width:60,
        
        

      },
    makepost:{
        marginLeft:20
    },
    postimage:{
        marginBottom:10,
    },


    description:{
        color:"#000000",
        fontSize:16,
        textAlign:"justify",
        paddingHorizontal:10,
        // fontFamily:"Raleway-VariableFont",
        // fontFamily:"Inter-Regular"
    },
    
    expand:{
        height:30
    },
    expandDiv:{
        borderWidth:2,
        height:60,
        width:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#CED704",
        borderRadius:30,
    },
    
})


export default PostLayout

