
import createDataContext from './createDataContext'
import api from '../api/JsonServer'
const reducer=(state,action)=>{
    switch(action.type){
        case 'get_blogpost':
            return action.payload
        case 'edit_blogpost':
            return state.map(blogPost=>(blogPost.id===action.payload.id?action.payload:blogPost))
        case 'delete_blogpost':
            return state.filter(blogPost=>blogPost.id!==action.payload)
        
        
        default:
            return state
    }
}
   const getblogpost=(dispatch)=>{
       
       return async()=>{
        const response=await api.get('/blogPosts')
        dispatch({type:'get_blogpost',payload:response.data})
       }
   }
    const addblogpost=(dispatch)=>{
        return async(title,content,callback)=>{
            await api.post('/blogPosts',{title,content})
           // dispatch({type:'add_blogpost',payload:{title,content}})
             callback();}
     }
    const deleteblogpost=(dispatch)=>{
        return async(id)=>{
await api.delete(`/blogPosts/${id}`)
      dispatch({type:'delete_blogpost',payload:id})
        
    }  
}
const editblogpost=dispatch=>{
    return async(id,title,content,callback)=>{
        await api.put(`blogPosts/${id}`,{title,content})
        dispatch({type:"edit_blogpost",payload:{id,title,content}})
        callback()
    }
}


export const {Context,Provider}=createDataContext(reducer,{addblogpost,deleteblogpost,editblogpost,getblogpost},[{
    id:"1",
    title:"Hi",
    content:"content"
}])
