import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import {Link} from 'react-router-dom'
import "./index.css"

const Header=()=>{
    const [activeTab,setActiveTab] = useState('home')
    const [isShow,setIsShow] = useState(false)
    const isShowingLinks=()=>{
        setIsShow(prevState=>!prevState)
    }

    const handleTabClick=(activeTab)=>{
        setActiveTab(activeTab)
    }

    const closeNavLinks=()=>{
        setIsShow(false)
    }

    return (
        <div>
         <nav className="header-container">
            <div className="logo">
                <h1>ZuAI</h1>
            </div>
            <div >
                <ul className="nav-links">
                    <Link to="/" onClick={() => handleTabClick('home')} className={`link-item ${activeTab==='home' ? 'active-tab' : ''}`}>
                        <li className="m-3 ">
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
                <div className='hamburger'>
                      <GiHamburgerMenu onClick={isShowingLinks} />
                </div>
            </div>
        </nav>  
        <div >
            {isShow ? <ul  className="hamburger-links-container">
                    <Link to="/" onClick={() => handleTabClick('home')} className={`link-item ${activeTab==='home' ? 'active-tab' : ''}`}>
                        <li>
                            Home
                           
                        </li>
                       
                    </Link>
                    <Link onClick={() => handleTabClick('addBlog')} className={`link-item ${activeTab==='addBlog' ? 'active-tab' : ''}`} to="/blogs/addBlog">
                        <li >Add Blog</li>
                    </Link>
                    
                    <li >
                        About Us
                    </li>
                   
                    <li >
                        Contact Us
                    </li>
                    <button className='cancel-btn' onClick={closeNavLinks}>
                        <IoIosClose size={10}/>
                    </button>
                    
                </ul> : ''}    
            
            </div> 
        </div>
    
)
}
export default Header