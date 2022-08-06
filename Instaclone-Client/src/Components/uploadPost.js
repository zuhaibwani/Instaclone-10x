import React, { useEffect , useState} from 'react'
import { useNavigate } from "react-router-dom";
import Header from './header'
import "./uploadPost.css"
import axios from 'axios'

export default function UploadPost() {
    const [formData, setFormData] = useState({})
    const [base64Image, setImagePath] = useState("")
    const [filePath, setFilepath]= useState("")
    const [postBtn, setPostBtn] = useState(false)

    let navigate = useNavigate();
    const handleSubmit= (e)=>{
        e.preventDefault();
        setFormData({
            name : e.target.elements.name.value,
            image : base64Image || e.target.elements.img2.value,
            location : e.target.elements.location.value,
            description : e.target.elements.description.value
        }) 
        // console.log("inside handle submit =>", formData)   
        setPostBtn(true) 
    }
    

    const fileTobase64 = (file)=> {
            return new Promise((resolve, reject)=> {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = ()=> {
                  resolve(reader.result)
                }
                reader.onerror = (err)=> {
                  reject(err);
                }
          
              })
      }

    const handleUpload = async (e)=> {
        // console.log(`${e.target.files[0].type} : Jpeg => ${e.target.files[0].type==="image/jpeg" } , Png => ${e.target.files[0].type==="image/png"}`)
         if(e.target.files[0].size > 76614){
            // console.log("Within handleupload if block => ",e.target.files[0].size )
            window.alert("Please upload a file smaller than 75 KB");
        }else{
        // console.log("Within handleupload else block => ",e.target.files[0].size )
        setFilepath(e.target.files[0].name)
        const base64Path = await fileTobase64(e.target.files[0])
        setImagePath(base64Path)
        }
      }
    useEffect(()=>{
        const postData = ()=>{
            axios({
            method: "POST",
            url: "https://server-inst.herokuapp.com/uploadpost",
            data : formData
        }).then(()=>{
            navigate("/postview");
        }).catch((err)=>{
            console.log("Error from axios ->", err)
        })
    }
    if(formData.name!=="" && postBtn===true){
        postData()
        // console.log(postBtn)
        // console.log(formData)
    }
        
    }, [formData, navigate, postBtn])

    
    
  return (
    <>
    <Header/>
    <div className='upContainer'>
        <div className='formDiv'>
            <form method='POST' action='/uploadpost' onSubmit={handleSubmit}>
                <div >
                    <input className='row-1' placeholder='No file chosen' name='img2' defaultValue={filePath} ></input>
                    <label id='btn' htmlFor="image" >Browse
                    <input name='image'  type="file" id='image' onChange={(e)=> {handleUpload(e)}} /> 
                    </label>
                </div>

                <div className='row-2'>
                    <input placeholder='Author' id='name' name='name'/> 
                    <input placeholder='Location' id='location' name='location' /> 
                </div>

                <div>
                    <input className='row-3' placeholder='Description' id='description' name='description'/> 
                </div>
                
                <div className='row-4'>
                    <button id='btn'  type='submit' >Post</button>
                </div>
                
                
            </form>
        </div>
       
    </div>
    </>
    
  )
}
