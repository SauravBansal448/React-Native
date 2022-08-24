import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import Screen1 from "./src/screens/Screen1";


class TextInANest extends React.Component {

    render() {
    return (
      <Text style= {{fontSize : 50}}>Hello World</Text>
    );
  }
}


export default TextInANest;