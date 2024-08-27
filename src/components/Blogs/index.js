import {useEffect,useState} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItems from '../BlogItems'
import "./index.css"

const Blogs=()=>{
  const [blogsData,setBlogsData] = useState([])
  const [isLoading,setLoading] = useState(true)
  

  const getBlogItems=async()=>{
    setLoading(true)
    const url="https://zuaiblog.onrender.com/posts" 
    const response = await fetch(url)
    if (response.ok===true){
      setLoading(false)
      const data = await response.json()
      setBlogsData(data)
    }
   
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
     
        <div className='blogs-items-container'>
            {isLoading ? (<Loader type='TailSpin' color='#fff' className="loader" height={80} width={80}/>) : (<ul className='blogs-items'>
              {blogsData.map((eachBlog)=>(
                <BlogItems blog={eachBlog} key={eachBlog.id} onUpdate={handleUpdate} getBlogItems={getBlogItems} />
              ))}
            </ul>)}
            
        </div>
        
    )
}

export default Blogs