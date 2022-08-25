import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";


class Lifecycle extends React.Component{

    constructor(){
        super();
        console.log("constructor is called")
    }


    //  getDerivedStateFromProps(){
    //   console.log("getDerivedStateFromProps is called")
    // }


    render(){
      console.log("render is called")
      return (
      <View>
        <Text style = {{ fontSize:40}}> Lifecycle Example</Text>
      </View>
     )  
  }

    componentDidMount(){
        console.log("componentDidMount is called")
    }

    componentDidUpdate(){
      console.log("componentDidUpdate is called")

    }

    
    shouldComponentUpdate(){
      console.log("shouldComponentUpdate is called")
    }

    getSnapshotBeforeUpdate(){
      console.log("getSnapshotBeforeUpdate is called")
    }


    componentWillUnmount(){
      console.log("componentWillUnmount is called")

    }
}

export default Lifecycle;