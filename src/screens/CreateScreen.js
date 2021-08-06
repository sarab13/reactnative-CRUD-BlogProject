import React,{useContext} from 'react'
import InputForm from '../components/InputForm'
import {Context} from '../context/BlogContext'
const CreateScreen=({navigation})=>{
    const {addblogpost}=useContext(Context)
   
    return(
        <InputForm onSubmit={(title,content)=>{
addblogpost(title,content,()=>{navigation.navigate('Blogs')})
        }}/>
    )
}



export default CreateScreen