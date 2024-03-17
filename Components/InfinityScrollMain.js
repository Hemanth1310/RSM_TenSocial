
import { StyleSheet,View,Text,ImageBackground ,ScrollView} from "react-native"
import Menu from "./ReactionScrollComponents/Menu";
import NavTabs from "./ReactionScrollComponents/NavTabs";
import Fetch from "./InfinityScrollComponents/Fetch";
import React,{useEffect,useState} from "react";

export default InfinityScrollMain =(props)=>{

    const [trigger,setTrigger]=useState(false)

    const ontrigger=()=>{
        setTrigger(true)
    }

    const onBack=()=>{
        props.toHome()
    }


    return (
      <>
        {/* Main Screen rendering posts with Infinity Scrolling design */}
        <View style={styles.container}>
          <View style={styles.page}>
            <View style={styles.layout1}>
              <Menu onBackHome={onBack}></Menu>
              <NavTabs></NavTabs>
            </View>
            <View style={styles.layout2}>
              <Fetch></Fetch>
            </View>
          </View>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
   
    container: {
      flex: 1,
      alignItems: 'center',
    //   backgroundColor:'#00224A',
      color:'#ffffff',
      paddingTop:28,
      flexDirection:"column",
      minWidth:374,
    },
    page:{
      flexDirection:"column",
     
    },
    layout1:{
      marginBottom:10,
      minHeight:100
    },
    layout2:{
    //   backgroundColor:"#ffffff",
      flex:1,
      borderTopEndRadius:30,
      borderTopStartRadius:30,
      padding:5,
      minWidth:374,
    },
    image:{
      height:90,
      width:200
    },
    
    text:{
      color:"#ffffff"
    }
  });
  
