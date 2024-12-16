import React from 'react'
import "./main.css"
import {Link} from 'react-router-dom'
const Main = () => {
  return (
    <>
     <main className="seller-main-section">
      {/* Welcome Header */}
      <header className="welcome-header">
        <h1>Welcome back, Muhammad Sarfraz Afzal!</h1>
        <p>Here's an overview of your selling activity.</p>
      </header>

      {/* Quick Stats */}
      <section className="quick-stats">
        <div className="stat-card">
          <h2>O$</h2>
          <p>Total Earnings</p>
        </div>
        <div className="stat-card">
          <h2>0</h2>
          <p>Active Orders</p>
        </div>
        <div className="stat-card">
          <h2>0%</h2>
          <p>Response Rate</p>
        </div>
        <div className="stat-card">
          <h2>0 hrs</h2>
          <p>Avg. Response Time</p>
        </div>
      </section>

      {/* Gigs Section */}
      <section className="gigs-section">
        <div className="gigs-header">
          <h2>Your Services</h2>
          <Link to='/SellerForm/Accountdetail/dashboard/serviceform'><button className="btn btn-primary">Create a New Service</button></Link>
        </div>

        {/* Gig Cards */}
        <div className="gig-cards">
          <div className="gig-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7EEnYclnniUgs5_sw1aNa7fyjCoqGLQOu6g&s"
              alt="Service Thumbnail"
            />
            <h3>Build a hand made minitaure art.</h3>
            <p>Price: $50</p>
            <p>Status: Active</p>
          </div>
          <div className="gig-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_rwVtwohefvvSLRKMDRLnY0PdKmdqYtPqw&s"
              alt="Service Thumbnail"
            />
            <h3>Hand made painted art</h3>
            <p>Price: $200</p>
            <p>Status: Paused</p>
          </div>
        </div>
      </section>

      {/* Orders Section */}
      <section className="orders-section">
        <h2>Recent Orders</h2>
        <div className="orders-list">
          <div className="order-card">
            <p>Order #12345</p>
            <p>Status: pending</p>
            <p>Earnings: $0</p>
          </div>
          <div className="order-card">
            <p>Order #12346</p>
            <p>Status: pending</p>
            <p>Earnings: $0</p>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Main
