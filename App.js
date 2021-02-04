
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './screens/searchScreen'
import TransectionScreen from './screens/transectionScreen'
import{createAppContainer} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>bookWilli</Text>
      <AppContainer/>


    </View>
  );
}
const tabNavigator=createBottomTabNavigator({
  transection:{screen:TransectionScreen},
  search:{screen:SearchScreen}
})
const AppContainer=createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
