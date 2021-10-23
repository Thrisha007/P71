import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler'
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        storyTitle: '',
        author: '',
        writeStory: ''
      }
    }

    submitStory = ()=>{
      db.collection("Story").add({
        'storyTitle': this.state.storyTitle,
        'author': this.state.author,
        'writeStory': this.state.writeStory
      })
    }

    render(){
      return(
        
       <View style={styles.container}>

        <View style={styles.title}> 
          <Text>Write Story</Text>
        </View>

              <View style = {styles.inputView}>
                <TextInput
                style = {styles.inputBox}
                placeholder = "Story Title"
                onChangeText = {(text)=>{
                  this.setState({
                  storyTitle: text
                  })
                }}/>

                <TextInput
                style = {styles.inputBox}
                placeholder = "Author"
                onChangeText = {(text)=>{
                  this.setState({
                    author: text
                  })
                }}/>

                <TextInput
                style = {styles.inputBox}
                placeholder = "Write Story"
                onChangeText = {(text)=>{
                  this.setState({
                    writeStory: text
                  })
                }}
                multiline = 'true'/>

                <TouchableOpacity 
                style = {styles.button}
                onPress = {this.submitStory}>
                  <Text style = {styles.buttonText}>Submit</Text>
                </TouchableOpacity>
  </View>
          
        </View>
      )
      }
}

  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
    heigth: 80,
    backgroundColor: "pink",
    textAlign: "center",
    marginBottom: 130
  },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
    },
    button: {
      width:100,
         height:30, 
         justifyContent:'center', 
         alignItems:'center', 
         marginBottom: 20,
         backgroundColor:"#ff5722"
    },
    inputView:{
      flexDirection: 'column',
      margin: 20,
      marginTop: 10
    },
    inputBox:{
      width: 200,
      heigh: 100,
      borderRadius:10, 
      borderWidth:1, 
      marginBottom: 60, 
      padding:10,
    },
  });