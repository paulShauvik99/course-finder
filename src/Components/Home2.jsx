import React  from 'react'
import home_svg from '../assets/9175118_6461.svg'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';



const Home2 = () => {


    return (
        <>
                <div className="home_main_div ">
                    <div className="hm_left  ">
                        <h1 className="text-5xl font-semibold text-shadow-lg">"Unlock Limitless Learning: Embark on an Extraordinary Journey with Our Course Finder Website" </h1>
                        <br /> <br />
                        <p className='text-3xl text-gray-300'>Welcome to our course finder website! Here, you can explore a diverse range of courses tailored to your interests and goals. Our user-friendly interface and intelligent recommendation system make it easy to discover the perfect learning opportunities. From business to technology, arts to sciences, we curate high-quality courses from renowned institutions and instructors. Join our community of learners today and embark on a transformative educational journey towards unlocking your true potential. Start exploring now!</p>
                        <br /><br />
                        <Link to='/courses'>
                            <Button variant="contained" className='expBtn text-2xl' endIcon={<SendIcon />}>
                                Explore Courses
                            </Button>
                        </Link>
                    </div>
                    <div className="hm_right ">
                        <img src={home_svg} alt="https://www.freepik.com/free-vector/female-student-listening-webinar-online_9175118.htm#query=course%20svg&position=8&from_view=search&track=ais" />
                    </div>
                </div>
                

        </>

    )
}

export default Home2