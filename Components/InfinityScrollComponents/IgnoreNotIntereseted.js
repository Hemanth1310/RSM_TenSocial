import {  StyleSheet, Text, View, Image, Pressable,Alert, Modal } from "react-native";
import React, { useEffect, useState } from 'react';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useCallback } from 'react';

// SplashScreen.preventAutoHideAsync();

export default function Ignore_NotInterested (){
  
  return (
    <View >
      <Text style={styles.noIntrestText}>Not Interesting</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  noIntrestText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "justify",
    // fontFamily: "Avenir-Regular",
  },
});