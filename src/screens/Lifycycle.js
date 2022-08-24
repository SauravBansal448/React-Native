import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class Lifycycle extends Component{

    constructor(){
        super();
        console.warn("constructor is called")
    }

    componentDidMount(){
        console.warn("componentDidMount is called")

    }

    render(){
        console.warn("render is called")

        return 
        <View>

            <Text style = {{ fontSize:40}}> Lifycycle Example</Text>
        </View>
    }

}

export default Lifycycle;