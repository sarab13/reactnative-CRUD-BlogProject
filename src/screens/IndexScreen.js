import React,{useContext,useEffect} from 'react'
import {Text,FlatList,View,Button,StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'
const IndexScreen=({navigation})=> {

    const {state,deleteblogpost,getblogpost}=useContext(Context)
    useEffect(()=>{
    getblogpost();
    const listener=navigation.addListener('focus',()=>{
        getblogpost();
    })
    return ()=>listener()
},[])
    return (
        <View >
        
   
        <FlatList renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
             <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
           <TouchableOpacity onPress={()=>deleteblogpost(item.id)}>
            <Feather style={styles.icon} name="trash"/>
            </TouchableOpacity>
        </View>
        </TouchableOpacity>)} data={state} keyExtractor={(blogPost)=>blogPost.title}/>

        </View>
    )
}


const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:18
    }
})

export default IndexScreen