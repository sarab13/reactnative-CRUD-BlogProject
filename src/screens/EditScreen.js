import React,{useContext} from 'react'
import InputForm from '../components/InputForm';
import { Context } from '../context/BlogContext';
export default function EditScreen({route,navigation}) {
    const {state,editblogpost}=useContext(Context)
    const {id}=route.params;
    const blogPost=state.find((blogPost)=>blogPost.id==id)
    
    return (
   <InputForm initialValues={{title:blogPost.title,content:blogPost.content}} onSubmit={(title,content)=>{
       editblogpost(id,title,content,()=>{
navigation.pop()
       })
   }}/>
    )
}
