import { StyleSheet,View,Text,Image,Pressable } from "react-native";
import React,{useEffect,useState} from 'react' ;
import ReactionsPopUp from "./ReactionPopUpScreen";

export const ReactionContainer =(props)=>{
  // Reaction Container directing to reaction modal.
  const [reactComponent, setReactComponent] = useState(false);
  const [cheersState,setCheersState] = useState(false) 
  const [reactionState,setReactionState]= useState(0)

  const boxView = () => {
    setReactComponent(true);
   
  };

  const route = () => {
    setReactComponent(!reactComponent);
  };

  const onReaction =(reaction )=>{
  
    setReactionState(reaction)
    setReactComponent(!reactComponent);
  }

  return (
    <View>
      {reactComponent == true ? (
        <ReactionsPopUp onReaction={onReaction}></ReactionsPopUp>
      ) : null}
      {reactionState == 0 ? (
        <Pressable onPress={boxView}>
          <Image
            style={styles.reactions}
            source={require("../../assets/Reaction-unclicked.png")}
          ></Image>
        </Pressable>
      ) : reactionState == 1 ? (
        <Pressable onPress={boxView}>
          <Image
            style={styles.reactions}
            source={require("../../assets/Congratulations.png")}
          ></Image>
        </Pressable>
      ) : reactionState == 2 ? (
        <Pressable onPress={boxView}>
          <Image
            style={styles.reactions}
            source={require("../../assets/Cheers.png")}
          ></Image>
        </Pressable>
      ) : reactionState == 3 ? (
        <Pressable onPress={boxView}>
          <Image
            style={styles.reactions}
            source={require("../../assets/Inspiring.png")}
          ></Image>
        </Pressable>
      ) : reactionState == 4 ? (
        <Pressable onPress={boxView}>
          <Image
            style={styles.reactions}
            source={require("../../assets/Love.png")}
          ></Image>
        </Pressable>
      ) : null}
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