import {useEffect,useState} from 'react'
import BlogItems from '../BlogItems'
import "./index.css"
const Blogs=()=>{
  const [blogsData,setBlogsData] = useState([])

  const getBlogItems=async()=>{
    const url="https://zuaiblog.onrender.com/posts" 
    const response = await fetch(url)
    const data = await response.json()
    setBlogsData(data)
}

    useEffect(()=>{
     
        getBlogItems()
    },[])

    const handleUpdate = (updatedBlog) => {
      setBlogsData(blogsData.map(blog => 
        blog.id === updatedBlog.id ? updatedBlog : blog
      ));

      getBlogItems()
    };

    return (
        <div>
            <h1>Blogs Items</h1>
            <ul className='blogs-items'>
              {blogsData.map((eachBlog)=>(
                <BlogItems blog={eachBlog} key={eachBlog.id} onUpdate={handleUpdate}  />
              ))}
            </ul>
        </div>
    )
}

export default Blogs