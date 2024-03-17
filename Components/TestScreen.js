import { StyleSheet, View,ScrollView, Text} from 'react-native';
import Fetch from './TestScreenComponents/Fetch';
import Menu from './TestScreenComponents/Menu';

export default TestScreen=(props)=>{

    const onBack=()=>{
        props.toHome()
    }
    return (
      <View style={styles.container}>
        {/* Test section of the Platform designed for user to take an Old-New recognition test */}
        <View style={styles.page}>
          <View style={styles.layout1}>
            <Menu onBackHome={onBack}></Menu>
          </View>
          <View style={styles.layout2}>
            <ScrollView style={styles.scrollView}>
              <Fetch></Fetch>
             
            </ScrollView>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#00224A',
        color:'#ffffff',
        paddingTop:28,
        flexDirection:"column",
        width:"100%",
        height:"100%"
      },
      page:{
        flexDirection:"column",
        minWidth:376,
      },
      layout1:{
        marginBottom:10,
      //   backgroundColor:"red",
      //   height:100
      },
      layout2:{
        backgroundColor:"#ffffff",
        flex:1,
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        padding:5,
      },
      image:{
        height:90,
        width:200
      },
      backImage:{
        width: null,
        height: null,
        resizeMode: "contain",
        overflow: 'hidden'
        
      },
      text:{
        color:"#ffffff"
      }
})