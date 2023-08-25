import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import TypeWriterEffect from 'react-typewriter-effect';
import CourseCard from './CourseCard';
import { IconButton} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Badge from '@mui/material/Badge';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';


const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 200,
      fontSize: 16
    },
  });



const client_id = process.env.REACT_APP_CLIENT_ID 
const client_secret = process.env.REACT_APP_CLIENT_SECRET


const Courses = () => {
    
    const bookmarkCourses = useSelector(state => state.bookmarkCourses)
    const favoriteCourses = useSelector(state => state.favoriteCourses)
    //Authentication
    const token = btoa(`${client_id}:${client_secret}`);
    const config = { headers: { Authorization: `Basic ${token}` } };
    //Card Data
    const [actualData,setActualData] = useState({})
    //Results 
    const [results,setResults] = useState([])
    //Loading Flag
    const [loading,setLoading] = useState(true)
    //Handling Courses Tabs
    const [value,setValue] = useState('courses')
    //Setting Bookmark Courses and Favorite Course
    //Loading Data Fetch
    async function fetchData(){
        try{
            const cdata = await axios.get('https://www.udemy.com/api-2.0/courses/?page=1&page_size=12', config)
            setActualData(cdata.data)
        }catch(e){
            const msg = e.message
            setActualData(msg)
        }
    }
    //Next Page Data Fetch
    async function nextPage(){
       setLoading(true)
        try{
            const nextData = await axios.get(actualData.next , config)
            setActualData(nextData.data)
        }catch(e){
            const msg = e.message
            setActualData(msg)
        }        
    }
    //Previous Page Data Fetch
    async function prevPage(){
        setLoading(true)
        try{
            const prevData = await axios.get(actualData.previous , config)
            setActualData(prevData.data)
        }catch(e){
            const msg = e.message
            setActualData(msg)
        }     
    }
    //Calling the Data for the first time
    useEffect( () => {
        fetchData();
    },[])
    //Setting the results
    useEffect(()=>{
        if(Object.keys(actualData).length === 0){
            setLoading(true)
        }else{
            setResults(actualData.results)
            setLoading(false)
        }
    },[actualData])

    return (
        <>
            <div className="courses_main_div">
                <div className="top_div w-100 flex flex-col items-center justify-items-center mb-5 h-40">
                    <h1 className="text-5xl mb-3 text-white">"Explore Our Extensive Course Collection: Discover Knowledge That Ignites Your Passion"</h1>
                    <h2 className="">
                    <TypeWriterEffect
                        textStyle={{
                            color: '#ffffffb3',
                            fontWeight: 600,
                            fontSize: '2.5rem',
                            textAlign: 'center'
                        }}   
                        cursorColor="#ffffffb3"
                        multiText={[
                            'Expand your horizons, one course at a time.',
                            'Ignite your passion for learning with our captivating courses.',
                            'Unlock new skills and open doors to endless opportunities.',
                            'Step into a realm of inspiration and intellectual curiosity.',
                            'Challenge yourself, embrace curiosity, and excel in your chosen field.'
                        ]}
                        multiTextDelay={900}
                        typeSpeed={90}
                        multiTextLoop
                    />
                    </h2>
                </div>
                {
                    loading && results.length === 0 ? 
                    (   
                        <div className="loader_div w-screen h-max flex justify-center items-center">
                            <HashLoader className="loader"  color="#2AD773" loading={loading} size={35} />
                        </div>
                    ) : 
                    (
                        <>
                            <div className="courses_outer_div mb-5">
                                <TabContext value={value}>
                                    <div className="bookmark_favorite w-100 flex place-content-end">
                                        {/* <h1 className="text-white">Hey ! Welcome to Courses</h1>     */}
                                        <CustomWidthTooltip
                                            title='Courses'
                                            arrow
                                            placement='top'
                                        >
                                            <IconButton size='large' onClick={e => { setValue('courses') }}>
                                                <LibraryBooksIcon style={{fontSize: 25 , color: 'white'}} />
                                            </IconButton>
                                        </CustomWidthTooltip>
                                        <CustomWidthTooltip
                                            title='Bookmarks'
                                            arrow
                                            placement='top'
                                        >
                                            <IconButton size='large' onClick={e => { setValue('bookmarks') }}>
                                                <Badge color="success" badgeContent={bookmarkCourses.length} max={9}>
                                                    <BookmarksIcon  style={{fontSize : 25 , color : 'white'}} />
                                                </Badge>
                                            </IconButton>
                                        </CustomWidthTooltip>
                                        <CustomWidthTooltip
                                            title='Favorites'
                                            arrow
                                            placement='top'
                                        >
                                            <IconButton size='large' onClick={e => { setValue('favorites') }}>
                                                <Badge color="secondary" badgeContent={favoriteCourses.length} max={9} >
                                                    <FavoriteIcon style={{fontSize : 25 , color : 'white'}} />
                                                </Badge>
                                            </IconButton>
                                        </CustomWidthTooltip>
                                    </div>
                                        <TabPanel value="courses">
                                            <h1 className="w-100 h-28 flex items-center justify-center text-white">
                                                Courses
                                            </h1>                                   
                                            <div className="course_card_inner_div mt-5">
                                                {
                                                    results.map( (curr,ind) => {
                                                        return (
                                                            <div className="card_div">
                                                                <CourseCard 
                                                                    key={ind}
                                                                    myKey={ind}
                                                                    id={curr.id}
                                                                    tutor_det={curr.visible_instructors}
                                                                    course_title = {curr.title}
                                                                    course_img = {curr.image_480x270}
                                                                    course_headline = {curr.headline}
                                                                    course_price = {curr.price}
                                                                    course_img_alt = {curr.published_title}  
                                                                    course_url={curr.url}              
                                                                />
                                                            </div>    
                                                        )    
                                                    })
                                                } 
                                            </div>
                                            <div className="courses_pagination flex place-content-between mt-5">
                                                    {
                                                        actualData.previous ? (                                                
                                                            <IconButton aria-label='previous' size='large' className='arrow' onClick={prevPage}>
                                                                <ArrowBackIosIcon fontSize='large'/> 
                                                            </IconButton>) : 
                                                            (
                                                                <IconButton aria-label='previous' size='large' disabled className='arrow' >
                                                                    <ArrowBackIosIcon fontSize='large'/>  
                                                                </IconButton>
                                                            ) 
                                                    }
                                                <IconButton aria-label='next' size='large' className='arrow' onClick={nextPage}>
                                                    <ArrowForwardIosIcon fontSize='large' />
                                                </IconButton>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value="bookmarks">
                                            <h1 className="w-100 h-28 flex items-center justify-center text-white">
                                                Bookmarks
                                            </h1>
                                            <div className="bookmark_cards">
                                                <div className="bookmarkcards">
                                                    {
                                                        bookmarkCourses.length === 0 ? 
                                                        (
                                                            <h4 className="w-100 h-28 flex items-center justify-center text-white nodata">
                                                                No Courses Added to Bookmarks
                                                            </h4> 
                                                        ) :
                                                        bookmarkCourses.map( (curr,ind) => {
                                                            return (
                                                                <div className="bookmarkcard_div">
                                                                    <CourseCard 
                                                                        key={ind}
                                                                        id={curr.prop.id}
                                                                        tutor_det={curr.prop.tutor_det}
                                                                        course_title = {curr.prop.course_title}
                                                                        course_img = {curr.prop.course_img}
                                                                        course_headline = {curr.prop.course_headline}
                                                                        course_price = {curr.prop.course_price}
                                                                        course_img_alt = {curr.prop.course_img_alt}                
                                                                        course_url={curr.prop.url}
                                                                    />
                                                                
                                                                </div>    
                                                            )    
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value="favorites">
                                            <h1 className="w-100 h-28 flex items-center justify-center text-white">
                                                Favorites
                                            </h1>
                                            <div className="favorite_cards">
                                                <div className="favoritecards w-100">
                                                    {
                                                        favoriteCourses.length === 0 ? 
                                                        (
                                                            <h4 className="w-100 h-28 flex items-center justify-center text-white nodata">
                                                                No Courses Added to Favorites
                                                            </h4> 
                                                        ) : 
                                                            favoriteCourses.map( (curr,ind) => {
                                                                return (
                                                                    <div className="favorite_div">
                                                                        <CourseCard 
                                                                            key={ind}
                                                                            id={curr.prop.id}
                                                                            tutor_det={curr.prop.tutor_det}
                                                                            course_title = {curr.prop.course_title}
                                                                            course_img = {curr.prop.course_img}
                                                                            course_headline = {curr.prop.course_headline}
                                                                            course_price = {curr.prop.course_price}
                                                                            course_img_alt = {curr.prop.course_img_alt}      
                                                                            course_url={curr.prop.url}
                                                                        />
                                                                    </div>    
                                                                )    
                                                            })
                                                    }   
                                                </div>
                                            </div>
                                        </TabPanel>
                                </TabContext>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Courses