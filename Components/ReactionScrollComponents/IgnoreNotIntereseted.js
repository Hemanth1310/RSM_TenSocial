import {  StyleSheet, Text, View, Image, Pressable,Alert, Modal } from "react-native";
import React, { useEffect, useState } from 'react';
export default function Ignore_NotInterested (){
   // Component Returning text
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