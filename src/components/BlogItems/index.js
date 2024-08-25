import EditPopup from "../PopUp"
import "./index.css"
const BlogItems=(props)=>{ 
  
    const {blog,onUpdate} = props 
    const {title,excerpt,content} = blog



    return (
        <li className="list-item">
            <h1 className="title">{title}</h1>
            <p>{excerpt}</p>
            <p>{content}</p>
            <EditPopup blog={blog} onUpdate={onUpdate} />
        </li>
    )
}

export default BlogItems