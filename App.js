import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import HomeScreen from './Components/HomeScreen';
export default function App() {
  return (
     
    <View style={styles.container}>
      
      { /* Entry File Which renders Home screen of the platform */ }
      
      <StatusBar style="light" />
      <ImageBackground
          source={require("./assets/background12.png")}
          resizeMode="cover"
          style={styles.backImage}
        >
      <HomeScreen></HomeScreen>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    overflow: 'hidden'
    
  },
});
