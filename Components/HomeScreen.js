import { StyleSheet, View,ScrollView, Text, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import ReactionScrollMain from './ReactionScrollMain';
import TestScreen from './TestScreen';
import InfinityScrollMain from './InfinityScrollMain';
export default HomeScreen=()=>{

    const [pointer,statePointer]= useState(0)

    const toReactionScroll=()=>{
        statePointer(1)
    }
    const toInfinityScroll=()=>{
        statePointer(2)
    }
    const toTestPage=()=>{
        statePointer(3)
    }
    const backToHome=()=>{
        statePointer(0)
    }

    return(
        <>
          
        
            {pointer==0 ? (<View style={style.nav}>
                <Text style={{color:"#fff",fontSize:30}}>TENSocial</Text>
                <Pressable onPress={toReactionScroll}>
                <View style={style.button}>
                    <Text>ReactionScroll</Text>
                </View>
            </Pressable>
            <Pressable onPress={toInfinityScroll}>
                <View style={style.button}>
                    <Text>InfinityScroll</Text>
                </View>
            </Pressable>
            <Pressable onPress={toTestPage}>
                <View style={style.button}>
                    <Text>Enter Test</Text>
                </View>
            </Pressable>
            </View>) : null}
            {
                pointer==1?(
                    <ReactionScrollMain toHome={backToHome}></ReactionScrollMain>
                ):null
            }
            {
                pointer==2?(
                    <InfinityScrollMain toHome={backToHome}></InfinityScrollMain>
                ):null
            }
            {
                pointer==3?(
                    <TestScreen toHome={backToHome}></TestScreen>
                ):null
            }
            
        </>
    )
}

const style= StyleSheet.create({
    backHome:{
        height:45,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
        fontSize:24,
        marginTop:28
    },
    container:{
        flex:1,
        marginTop:28,
        // minHeight:900
    },
    nav:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
       
    },

  button:{
    borderRadius:30,
    borderColor:"#fff",
    backgroundColor:"#fff",
    borderWidth:2,
    padding:10,
    marginTop:25,
    justifyContent:"center",
    alignItems:"center",
    width:150,
  }  
})