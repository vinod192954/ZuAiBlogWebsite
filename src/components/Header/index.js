import { useState } from 'react'
import {Link} from 'react-router-dom'
import "./index.css"

const Header=()=>{
    const [activeTab,setActiveTab] = useState('home')

    const handleTabClick=(activeTab)=>{
        setActiveTab(activeTab)
    }

    return (
         <nav className="header-container">
            <div className="logo">
                <h1>ZuAI</h1>
            </div>
            <div>
                <ul className="nav-links">
                    <Link to="/" onClick={() => handleTabClick('home')} className={`link-item ${activeTab==='home' ? 'active-tab' : ''}`}>
                        <li className="m-3">
                            Home
                        </li>
                    </Link>
                    <Link onClick={() => handleTabClick('addBlog')} className={`link-item ${activeTab==='addBlog' ? 'active-tab' : ''}`} to="/blogs/addBlog">
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