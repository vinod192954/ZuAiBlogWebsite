import "./index.css"
import Blogs from "../Blogs"
const HomePage=()=>{
    return (
        <div className="home">
            <div className="banner">
                <div className="content">
                <h1 className="heading">Blogs on Techies</h1>
                <p className="quote">“Blogging is to writing what extreme sports are to athletics: more free-form, more accident-prone, less formal, more alive. ...</p>
                </div>
            </div>
            <div className="blogs">
                <Blogs/>
            </div>
        </div>
    )
}

export default HomePage