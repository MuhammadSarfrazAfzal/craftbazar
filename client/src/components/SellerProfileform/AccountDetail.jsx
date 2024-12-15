import React from 'react'
import { useState } from "react";
import './accountdetail.css'
import { Link } from 'react-router-dom';
const AccountDetail = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    profession: "",
    skills: "",
    experience: "Beginner"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:5000/api/accountDetail", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        alert("Profile saved successfully!");
        setFormData({
          fullName: "",
          profession: "",
          skills: "",
          experience: "Beginner",
          
        });
      } else {
        alert("Error saving profile.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the server.");
    }
  };
  return (
    <div className="profile-setup-container">
      <h1>Profile Setup</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          id="profession"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          placeholder="Your profession (e.g., Craft Artist)"
          required
        />

        <label htmlFor="skills">Skills</label>
        <textarea
          id="skills"
          name="skills"
          rows="4"
          value={formData.skills}
          onChange={handleChange}
          placeholder="List your skills, separated by commas"
          required
        ></textarea>

        <label htmlFor="experience">Experience Level</label>
        <select
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>

        <Link to='/SellerForm/Accountdetail/Dashboard'><button type="submit">Save Profile</button></Link>
      </form>
    </div>
  )
}

export default AccountDetail
