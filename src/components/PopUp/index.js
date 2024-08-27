import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; 
import { CiEdit } from "react-icons/ci";
import "./index.css"

const EditPopup = ({ blog, onUpdate,onEditClick }) => {
  const [title, setTitle] = useState(blog.title);
  const [excerpt, setExcerpt] = useState(blog.excerpt);
  const [content, setContent] = useState(blog.content);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (close) => {
    setLoading(true);
    try {
      const response = await fetch(`https://zuaiblog.onrender.com/posts/${blog.id}`, {
        method: 'PUT', // Use PATCH if only partial update
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, excerpt, content }),
      });
      if (!response.ok) {
        throw new Error('Failed to update the blog');
      }
      const updatedBlog = await response.json();
      onUpdate(updatedBlog);
      close(); // Close the popup on successful update
    } catch (error) {
      console.error('Error updating blog:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popup  className='pop-up-container'  trigger={<button className='update-button' onClick={(e) => { e.stopPropagation(); onEditClick(e); }}><CiEdit  size={20}/></button>} position="right center">
      {(close) => (
        <div className='form-container'>

          <form className='form-control' onSubmit={(e) => { e.preventDefault(); handleUpdate(close); }}>
           <h1>Edit Blog Post</h1>
            <label>
              Title:
              <input
                type="text"
                value={title}
                className='m-2 title-input'
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <br />
            <label>
              Excerpt:
              <textarea
                value={excerpt}
                rows={8}
                cols={35}
                className='m-2'
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </label>
            <br />
            <label>
              Content:
              <textarea
              rows={8}
              cols={35}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </label>
            <br />
            <button className='btn btn-primary' type="submit" disabled={loading}>
              {loading ? 'Updating...' : 'Update Blog'}
            </button>
            <button
              type="button"
              className='btn btn-secondary'
              onClick={() => close()} // Close the popup when cancel is clicked
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </Popup>
    
  );
};

export default EditPopup;
