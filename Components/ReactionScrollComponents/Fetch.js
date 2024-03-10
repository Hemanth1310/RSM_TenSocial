import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable,Image, ToastAndroid,Alert } from 'react-native';
import PostLayout from './PostLayoutComponent';
import { ReactionContainer } from './ReactionContainerComponent';
import { IgnoreComponent } from './IgnoreComponent';


export default Fetch=()=>{
    const [users, setUsers] = useState([]);
    const [couter,setCounter] = useState([0]);
    const [store,setStore] =useState([0]);

    getUsers = () => {
        fetch('https://tenoo-2854a-default-rtdb.europe-west1.firebasedatabase.app/user.json')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
    }
    useEffect(() => {
        getUsers();
    }, []);
    useEffect(() => {
        if(store<5 && store!=0){
        ToastAndroid.show(`You have ${5-store} skips left`, ToastAndroid.SHORT);
        }
    }, [store]);
    const deadend = () =>{
        Alert.alert('You’ve exhausted your skips!')
    }

    function onNext(index) {
      setCounter(index);
    }


    function ignoreIt(index){
        setCounter(index)
    }

    function storeCount(){
        let x=parseInt(store)
        x++;
        if(x==5){
            x=0;
            setStore(x);
            deadend();

        }else{
            setStore(x)
        }
    }


  

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


    return(
        <View>
        <View style={styles.container} key={Math.random().toString()}>

          {users.map((data, index) => (
            <View style={styles.postdescription} key={Math.random().toString()}>
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
                      onNext={onNext}
                      unfo={showAlert}
                    ></PostLayout>
                  </View>
                  <View style={styles.expandDiv}>
                    <View style={styles.savelater}>
                      <Pressable onPress={showAlert}>
                        <View style={styles.saveSection}>
                          <Image
                            style={styles.fakesave}
                            source={require("../../assets/FakeSave.png")}
                          ></Image>
                        </View>
                      </Pressable>
                      <Pressable onPress={showAlert}>
                        <View style={styles.fakeReportSection}>
                          <Image
                            style={styles.fakereport}
                            source={require("../../assets/Report.png")}
                          ></Image>
                        </View>
                      </Pressable>
                    </View>
                    <View style={styles.bottomtabs}>
                      <View style={styles.interested}>
                        <View style={{ position: "relative" }}>
                          <ReactionContainer
                            nextPost={() => onNext(index + 1)}
                          ></ReactionContainer>
                        </View>
                        <Pressable onPress={showAlert}>
                          <Image
                            style={styles.reactions}
                            source={require("../../assets/FakeComments.png")}
                          ></Image>
                        </Pressable>
                      </View>
                      <View style={styles.notinterested}>
                        <View></View>
                        <IgnoreComponent onIgnore={() => ignoreIt(index + 1) } updateCount={storeCount} countStore={store}></IgnoreComponent>
                        
                      </View>
                    </View>
                  </View>
                </View>
              ) : null}
            </View>
          ))}
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
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
  fakesave: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  fakeReportSection: {
    marginHorizontal: 10,
  },
  fakereport: {
    height: 20,
    width: 20,
    resizeMode: "contain",
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
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"flex-start"
  },
  interested: {
    flex: 1,
    paddingLeft:20,
    flexDirection: "row",
    alignItems:"center",
  },

  ignore: {
    backgroundColor: "#182848",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  notinterested: {
    flex: 1,
    alignItems: "flex-end",
    padding: 10,
  },

});