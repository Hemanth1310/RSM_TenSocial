import { StyleSheet,Text,Button,View,Pressable,Image,Alert } from "react-native";

export default NavTabs = () =>{
  //Navigation Tab Component(# curerntly disabled)

  const showAlert = () =>
    Alert.alert(
      "Please Note",
      "This function is disabled at the moment",
      [
        {
          text: "Cancel",

          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.p1}>
          <View style={styles.followtab}>
            <Pressable>
              <Text style={styles.textFollow}>Following</Text>
            </Pressable>
          </View>
          <View style={styles.activetab}></View>
        </View>
        <View style={styles.p2}>
          <View style={styles.discovertab}>
            <Pressable onPress={showAlert}>
              <Text style={styles.textDiscover}>Discover</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
       
        height:64,
        marginBottom:10,
        borderColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
    },

    nav:{
        flex:5,
        height:45,
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"#ffffff"
    },
    p1:{
        flex:1,
        flexDirection:"column"
    },
    followtab:{
        alignItems:"center",
        flex:1,
        height:45,
        justifyContent:"center",
    },
    activetab:{
        backgroundColor:"#ffffff",
        height:3,
        borderRadius:10,
    },
    textFollow:{
        color:"#ffffff",
        fontSize:16,
        // fontFamily:"Inter-regular",
        
        
    },
    p2:{
        flex:1,
        flexDirection:"column",
        
    },
    discovertab:{
        alignItems:"center",
        flex:1,
        height:45,
        justifyContent:"center",

    },
    textDiscover:{
        color:"#ffffff",
        fontSize:16,
        // fontFamily:"Inter-regular"
    },
    deactivetab:{
        backgroundColor:"#ffffff",
        height:1,
        borderRadius:10,
        borderColor:"#fff"
    },

});