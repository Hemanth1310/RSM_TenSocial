import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import HomeScreen from './Components/HomeScreen';
import ReactionScrollMain from './Components/ReactionScrollMain';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
          source={require("./assets/background12.png")}
          resizeMode="cover"
          style={styles.backImage}
        >
      <HomeScreen></HomeScreen>
      {/* <ReactionScrollMain></ReactionScrollMain> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00224A',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backImage:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    overflow: 'hidden'
    
  },
});
