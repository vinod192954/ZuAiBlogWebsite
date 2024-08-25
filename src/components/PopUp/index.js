import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; 
import "./index.css"

const EditPopup = ({ blog, onUpdate }) => {
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
    <Popup  trigger={<button>Edit</button>} position="right center">
      {(close) => (
        <div>
          <h3>Edit Blog Post</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate(close); }}>
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <br />
            <label>
              Excerpt:
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </label>
            <br />
            <label>
              Content:
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </label>
            <br />
            <button type="submit" disabled={loading}>
              {loading ? 'Updating...' : 'Update Blog'}
            </button>
          </form>
        </div>
      )}
    </Popup>
    
  );
};

export default EditPopup;
