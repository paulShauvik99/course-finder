import React from 'react'
import abt_img from '../assets/4661525_2480558.svg'
const About = () => {
    return (
        <>
            <div className="about_outer">
                <div className="ab_left">
                  <img src={abt_img} alt="https://www.freepik.com/free-vector/contact-us-concept-landing-page_4661525.htm#query=about%20us&position=2&from_view=search&track=ais" />
                </div>
                <div className="ab_right">
                  <h2 className="text">
                    Welcome to our Course Finder App! 🌟
                    <br/><br/>
                    Embark on a journey of knowledge and growth with our innovative Course Finder App. Whether you're a lifelong learner seeking new skills or a professional aiming to enhance your expertise, our app is your gateway to a world of educational opportunities.
                    <br /><br />
                    Discover a vast array of courses meticulously curated from top-tier institutions and instructors worldwide. Our user-friendly interface empowers you to easily search, filter, and compare courses across diverse subjects, ensuring you find the perfect fit for your learning goals.
                    <br/><br/>
                    With personalized recommendations based on your interests and preferences, navigating your educational path has never been more seamless. Enrich your mind, elevate your career, and unlock your full potential with the Course Finder App. Start exploring today and embrace a future filled with knowledge and achievement! 🚀
                  </h2>
                </div>
            </div>
        </>
  )
}

export default About