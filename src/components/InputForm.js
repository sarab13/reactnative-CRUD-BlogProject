import React,{useState} from 'react'
import { Text,TextInput,Button,View,StyleSheet } from 'react-native'
export default function InputForm({onSubmit,initialValues}) {
    const [title,setTitle]=useState(initialValues.title)
    const [content,setContent]=useState(initialValues.content)
    return (
        <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)} />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text)=>{setContent(text)}}/>
        <Button
          onPress={()=>{onSubmit(title,content)}}
        title="Save Blog Post"/>
        </View>
    )
}
InputForm.defaultProps={
    initialValues:{
        title:"",
        content:""
    }
}
const styles=StyleSheet.create({
    label:{
        fontSize:20,
        margin:5
    },
    input:{
        fontSize:18,
        borderColor:'black',
        borderWidth:1,
        padding:5,
        margin:5
    }
})