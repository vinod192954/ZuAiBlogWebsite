import Footer from '../Footer';
import {useState} from 'react'

import "./index.css"
const NewBlog=()=>{
    const [title,setTitle]  = useState('')
    const [excerpt,setExcerpt] = useState('')
    const [content,setContent] = useState('')
    const [author,setAuthor] = useState('')
    const [publishDate,setPublishDate] = useState('')
    const [detailedContent,setDetailedContent] = useState('')

    const onSubmitToAddBlog=async(event)=>{
        event.preventDefault()
        const userEnterDetails ={title,excerpt,content,author,publish_date:publishDate,detailed_content:detailedContent}
        const url = "https://zuaiblog.onrender.com/posts"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userEnterDetails)
        }
        const response = await fetch(url,options)
        const data = await response.json()
        
    }

    const onChangeTitle=(event)=>{
        setTitle(event.target.value)
    }

    const onChangeExcerpt=(event)=>{
        setExcerpt(event.target.value)
    }

    const onChangeAuthor=(event)=>{
        setAuthor(event.target.value)
    }

    const onChangeContent=(event)=>{
        setContent(event.target.value)
    }
  
    const onChangeDate=(event)=>{
        setPublishDate(event.target.value)
    }

    const onChangeDetailedBlog=(event)=>{
        setDetailedContent(event.target.value)
    }

    return (
       <>
        <div className="New-blog-form">
            <h1>New Blog</h1>
            <form onSubmit={onSubmitToAddBlog}>
                <div>
                    <label>Blog Title :</label>
                    <input onChange={onChangeTitle}  value={title} type="text" placeholder="Enter Blog Title" />
                </div>
                <div>
                    <label>Excerpt :</label>
                    <input onChange={onChangeExcerpt} value={excerpt} type="text" placeholder="Enter Blog Excerpt" />
                </div>
                <div>
                    <label>Content :</label>
                    <textarea onChange={onChangeContent} value={content} rows={8} cols={50} placeholder="Content"></textarea>
                </div>
                <div>
                    <label>Author :</label>
                    <input onChange={onChangeAuthor} type="text" value={author} placeholder="Enter your name" />
                </div>
                <div>
                    <label>Date of Publish : </label>
                    <input type="date" value={publishDate} onChange={onChangeDate}/>
                </div>
                <div>
                    <label>Detailed Blog :</label>
                    <textarea onChange={onChangeDetailedBlog} value={detailedContent} rows={8} cols={55} placeholder="Enter Detailed Blog"></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            
            </div>
            <Footer/>
            </>
    )
}

export default NewBlog