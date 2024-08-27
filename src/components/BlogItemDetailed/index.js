import { useEffect,useState } from "react"
import "./index.css"
const BlogItemDetailed=(props)=>{
    const [detailedBlog,setDetailedBlog] = useState({})

    const getDetailedBlog=async()=>{
        const {match} = props 
        const {params} = match 
        const {id} = params 
        const url=`https://zuaiblog.onrender.com/detailedPosts/${id}`
        const response = await fetch(url)
        const data = await response.json() 
        console.log(data)
        const detailedObject = {
            author:data.author,
            blogId:data.blog_id,
            detailedContent:data.detailed_content,
            publishedDate:data.publish_date
        }
        console.log(detailedObject)
        setDetailedBlog(detailedObject)
    }

    useEffect(()=>{
        getDetailedBlog()
    })
   
    return (
        <div className="main-container">
            <div className="detailed-blog-container">
            <h1>{detailedBlog.author}</h1>
                <p>{detailedBlog.detailedContent}</p>
                <p>{detailedBlog.publishedDate}</p>
            </div>
        </div>
    )
}

export default BlogItemDetailed