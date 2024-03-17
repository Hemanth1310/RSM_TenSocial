import { StyleSheet,View,Text,Image,Pressable } from "react-native";
import React,{useEffect,useState} from 'react' ;
// import ReactionsPopUp from "./ReactionPopUp";
import ReactionsPopUp from "./ReactionPopUpScreen";

export const ReactionContainer =(props)=>{
  // Reaction Container directing to reaction modal.
  const [reactComponent, setReactComponent] = useState(false);

  const boxView = () => {
    setReactComponent(!reactComponent);
  };

  const route = () => {
    setReactComponent(!reactComponent);
    props.nextPost();
  };

  return (
    <View>
      {reactComponent == true ? (
        <ReactionsPopUp moveOn={route}></ReactionsPopUp>
      ) : null}

      <Pressable onPress={boxView}>
        <Image
          style={styles.reactions}
          source={require("../../assets/Reaction-unclicked.png")}
        ></Image>
      </Pressable>
    </View>
  );
} 

const styles= StyleSheet.create({
    reactions: {
        height: 28,
        width: 28,
        resizeMode: "contain",
      },
})