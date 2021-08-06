import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import Show from './src/screens/Show'
import {StyleSheet,TouchableOpacity,Text} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
const Stack = createStackNavigator();

function App() {
  return (
    <Provider>
    <NavigationContainer initialRouteName='IndexScreen'>
      <Stack.Navigator>
        <Stack.Screen name="Blogs" component={IndexScreen} 
              options={({ navigation }) => ({ title: "Blogs" ,headerRight:()=>(<TouchableOpacity style={styles.plusIcon}
              onPress={()=>{navigation.navigate('Create')}}><Feather size={30}  name="plus"/></TouchableOpacity>)})}   
        />
        <Stack.Screen name="Show" component={Show}
        options={({ route,navigation }) => ({ title: "Details" ,headerRight:()=>(<TouchableOpacity style={styles.plusIcon}
          onPress={()=>{
            const {id}=route.params
            navigation.navigate('Edit',{id})}}><EvilIcons size={30}  name="pencil"/></TouchableOpacity>)})}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles=StyleSheet.create({
  plusIcon:{
    marginRight:12,
    
  }
})
export default App;