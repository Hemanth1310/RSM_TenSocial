import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable,Alert, TextInput } from 'react-native';
import {
  ref,
  set
} from 'firebase/database';
import { db } from './firebase-config';
import NewPost from './NewPostComponent';
import OldPost from './OldPostComponent';
import PostLayout from './PostLayoutComponent';

export default Fetch=()=>{

     //  Fetch.js
     //      -Fetchs Posts from data bases
     //      -Logic for Old-New Recognition test
     //      -Rendering each post by looping through the list of posts

    const [users, setUsers] = useState([]);
    const [couter,setCounter] = useState([0]);
    const [store,setStore] =useState([0]);
    const [newCount,setNewCount]=useState(0);
    const [oldCount,setOldCount]=useState(0);
    const [answers,setAnswers]=useState([]);
    const [record,setRecord]=useState(0);
    const [submit, onSubmitChange] = useState(false);
    const [correctAnswers,onCorrectAnswers]=useState(0);
    const [wrongAnswers,onWrongAnswers]=useState(0)
    const [storeText,onStoreText]=useState('')
    const [name, setName] = useState('')
    var n = ''
    var ans = ['New','old','old','old','New','old','old','old','New','old','New','old','New','old','old','old','New','old','old','New','old','New','old','old','old','old','New','old','old','New']

    

    const onsubmit=()=>{
      onSubmitChange(true)
      console.log({answers})
      var i=0
      var cans=0
      var wans=0
      answers.map((value)=>{
        if(ans[i]==value)
        {
            cans++
        }else{
            wans++
        }
        onCorrectAnswers(cans)
        onWrongAnswers(wans)
        i++
      })
      console.log(`Correct-${correctAnswers}`)
      set(ref(db,'submissions/'+name),{
        name:name,
        answers:answers,
        Score:cans,
        Mistakes:wans
      })
    }
    getUsers = () => {
        fetch('https://tenn-a8b52-default-rtdb.europe-west1.firebasedatabase.app/user.json')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
     
    }
    useEffect(() => {
       
        getUsers();
    }, []);

    const deadend = () =>{
        Alert.alert('You’ve exhausted your skips!')
    }

    function onNew(index) {
      setCounter(index);
      setNewCount(newCount+1)
      setRecord(record+1)
      setAnswers([
        ...answers,
        'New'
      ])
    }


    function onOld(index){
        setCounter(index)
        setOldCount(oldCount+1)
        setRecord(record+1)
        setAnswers([
          ...answers,
          'old'
        ])
     
    }

    const showAlert = () =>
  Alert.alert(
    'Please Note',
    'This function is disabled at the moment',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
    },
  );   
    return (
      
        <View style={styles.container} key={Math.random().toString()}>
          <>
          {users.map((data, index) => (
            
              <View
                style={styles.postdescription}
                key={Math.random().toString()}
              >
                {couter == index ? (
                  <View style={styles.postcard}>
                    <View style={styles.poset_section}>
                      <PostLayout
                        userName={data.userName}
                        date={data.posts[0].date}
                        propic={data.profilePicture}
                        title={data.posts[0].title}
                        description={data.posts[0].postDrescription}
                        postImage={data.posts[0].postImage}
                        tag={data.posts[0].category}
                        unfo={showAlert}
                      ></PostLayout>
                    </View>
                    <View style={styles.expandDiv}>
                      <View style={styles.bottomtabs}>
                        <View style={styles.oldPostSection}>
                          <View>
                            <Pressable onPress={() => onOld(index + 1)}>
                              <View style={styles.oldPostButton}>
                                <OldPost></OldPost>
                              </View>
                            </Pressable>
                          </View>
                        </View>
                        <View style={styles.newPostSection}>
                          <View>
                            <Pressable onPress={() => onNew(index + 1)}>
                              <View style={styles.newPostButton}>
                                <NewPost></NewPost>
                              </View>
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                ) : null}

               
              </View>
            
          ))}
             {record == 30 ? (
                  <View>
                  <View style={{alignItems:"center",justifyContent:"center",marginTop:200}} key={Math.random().toString()}>
                    <Text style={{fontSize:22}}>Thanks for participation!!!!</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter Participant ID"
                      onChangeText={(val)=>n = val}
                      onEndEditing={()=>setName(n)}
                      defaultValue={name}
                    />
                    <Pressable onPress={()=> onsubmit()}>
                      <View style={{flexDirection:"row",borderRadius:10, height:45,width:160,backgroundColor:"#4B6CB7",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color:"#ffffff"}}> Submit</Text>
                        </View>
                    </Pressable>
                  </View>
                  <View style={{marginTop:30,justifyContent:"center",alignItems:"center"}}>
                    {submit?(<View style={{justifyContent:"center",alignItems:"center", borderWidth: 3,borderColor:"#4B6CB7",backgroundColor:"#ADC6FF",padding:15}}>
                    <Text style={{fontSize:18,padding:5,}}>Participant ID : {name}</Text>
                    <Text>-----------</Text>
                    <Text style={{fontSize:18,padding:5}}>Submission </Text>
                    <Text style={{fontSize:18,padding:5,color:"green"}}>Correct Answers : {correctAnswers} </Text>
                    <Text style={{fontSize:18,padding:5,color:"red"}}>Wrong Answers : {wrongAnswers} </Text>
               
                    </View>):null}
                  
                  
                  </View>
                  </View>
                ) : null}
          </>
       
      </View>
    );
}



const styles = StyleSheet.create({
    input: {
      height: 40,
      width:260,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      borderColor:"#D9D9D9"
    },
      skips:{
          position:"absolute",
          height:45,
          width:"100%",
          backgroundColor:"#4B6CB7",
          zIndex:100,
          top:500,
          alignItems:"center",
          justifyContent:"center",
          borderRadius:30
      },
      skipText:{
          fontSize:16,
          color:"#ffffff"
      },
      outer:{
          position:"absolute",
          top:-100,
          height:100,
          width:100,
          backgroundColor:"red",
       },
       box:{
          height:100,
          width:100,
          backgroundColor:"red",
         
       },
    container: {
      flex: 1,
      flexDirection: "column",
      paddingTop: 10,
      width:"100%"
    },
    postdescription: {
    },
    
    postcard: {
      flexDirection: "column",
    },
    savelater: {
      flexDirection: "row",
      alignItems: "space-between",
      justifyContent: "flex-end",
      paddingHorizontal: 15,
      marginBottom:10,
    },
    saveSection: {
      marginHorizontal: 10,
    },
  
    reactions: {
      height: 52,
      width: 52,
      resizeMode: "contain",
    },
    poset_section: {},
    expandDiv: {
      justifyContent: "flex-end",
    },
    bottomtabs: {
      height: 160,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
    },
    oldPostSection: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems:"center"
    },
    oldPostButton: {
      backgroundColor: "red",
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 15,
      width:150,
      alignItems:"center"
    },
  
    newPostButton: {
      backgroundColor: "#182848",
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 15,
      width:150,
      alignItems:"center"
    },
    newPostSection: {
      flex: 1,
      alignItems: "center",
      padding: 5,
      
    },
  
  });
  
