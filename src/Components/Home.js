import React, { Component } from "react";
import { View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from "react-redux";
import { Provider } from "react-redux";
import ViewComponent from "./ViewComponent";
import FetchApi from "../Api/FetchApi";
import Lifecycle from "./Lifecycle";
import store from "../Services/rootReducer";
import { toggleFlag } from "../Services/Home/action";



const Separator = () => (
  <View style={styles.separatorbtn} />
);

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style = {{fontSize: 50}}>Home Screen</Text>
    
      { <Button
        title="Check LifeCycle"
        onPress={() => navigation.navigate('Lifecycle')}
      /> }

<Separator></Separator>

<Button
      title="View Component"
      // onPress={() => {
      //   // setTimeout(()=> {
      //   //  navigation.navigate('Screen1', { name: 'Screen1' });
      //   // }, 2000);
      //   // navigation.navigate('ViewComponent', { name: 'ViewComponent' });
        
      // }}
      onPress={() => navigation.navigate('ViewComponent')}
    />

<Separator></Separator>

{ <Button
        title="Fetch API Call"
        onPress={() => navigation.navigate('FetchApi')}
      /> }
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ViewComponent" component={ViewComponent} />
        <Stack.Screen name="Lifecycle" component={Lifecycle} />
        <Stack.Screen name="FetchApi" component={FetchApi} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


const mapStateToProps = state => {{

  flag: state.homeReducer.homeFlag

}};
    

const mapDispatchToProps = {
    toggleHomeFlag : toggleFlag,
};


export default connect(
  mapStateToProps, mapDispatchToProps
)(Home);


const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemList: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleList: {
    fontSize: 32,
  },
  containerToggleButtonComponent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerbtn: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  titlebtn: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToTextbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separatorbtn: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container2: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text2: {
    fontSize: 16,
  },

  container: {
    paddingTop: 10
    ,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});