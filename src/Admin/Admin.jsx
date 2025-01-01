// Admin.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { AdminContainer, AdminForm } from './AdminStyledComponents.jsx';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [youtubeVideo, setYoutubeVideo] = useState('');
  const [date, setDate] = useState('');
  const [code, setCode] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, content, link, youtubeVideo, date, code, author };
    try {
      await axios.post('http://localhost:5173/api/blogs', newBlog);
      alert('Blog added successfully!');
      // Clear form
      setTitle('');
      setContent('');
      setLink('');
      setYoutubeVideo('');
      setDate('');
      setCode('');
      setAuthor('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminContainer>
      <h2>Add New Blog</h2>
      <AdminForm onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        <input type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
        <input type="text" placeholder="YouTube Video Embed Link" value={youtubeVideo} onChange={(e) => setYoutubeVideo(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <textarea placeholder="Code" value={code} onChange={(e) => setCode(e.target.value)}></textarea>
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Submit</button>
      </AdminForm>
    </AdminContainer>
  );
};

export default Admin;
