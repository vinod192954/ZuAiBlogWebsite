import "./index.css"
import {Link} from 'react-router-dom'
const Header=()=>{
    return (
         <nav className="header-container">
            <div className="logo">
                <h1>ZuAI</h1>
            </div>
            <div>
                <ul className="nav-links">
                    <Link to="/" className="link-item">
                        <li className="m-3">
                            Home
                        </li>
                    </Link>
                    <Link className="link-item" to="/blogs/addBlog">
                        <li className="m-3">Add Blog</li>
                    </Link>
                    <li className="m-3">
                        About Us
                    </li>
                    <li className="m-3">
                        Contact Us
                    </li>
                    
                </ul>
            </div>
        </nav>   
    
)
}
export default Header