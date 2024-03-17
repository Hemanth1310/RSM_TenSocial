import {  StyleSheet, Text, View, Image, Pressable,Alert, Modal } from "react-native";
import React, { useEffect, useState } from 'react';

export default function OldPost (){
  //Container for OldPost reactions

  return (
    <View>
      <Text style={styles.noIntrestText}>Old</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  noIntrestText: {
    color: "#ffffff",
    fontSize: 22,
    textAlign: "justify",
  },
});