import { Link } from "react-router-dom";
import EditPopup from "../PopUp";
import { MdDeleteOutline } from "react-icons/md";
import "./index.css";

const BlogItems = (props) => {
  const { blog, getBlogItems,onUpdate } = props;
  const { id, title, excerpt, content } = blog;

  // Function to prevent link navigation
  const handleEditClick = (event) => {
    event.stopPropagation(); // Prevents the event from bubbling up to the Link component
  };

  const onDeleteBlog = async (id) => {
    try {
      const response = await fetch(`https://zuaiblog.onrender.com/posts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete the blog');
      }
      // After deletion, call getBlogItems to refresh the list
      getBlogItems()
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <li className="list-item">
      {/* Link wrapper for blog details */}
      <Link to={`/blogs/${id}`} className="link-item">
        <h1 className="title">{title}</h1>
        <p>{excerpt}</p>
        <p>{content}</p>
      </Link>
      <MdDeleteOutline className="delete-icon" size={20} onClick={() => onDeleteBlog(id)} />
      <EditPopup blog={blog} onUpdate={onUpdate} onEditClick={handleEditClick} />
    </li>
  );
};

export default BlogItems;
