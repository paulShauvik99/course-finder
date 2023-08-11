import { Card,CardContent,Button, CardHeader, Avatar, IconButton, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkIcon from '@mui/icons-material/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Rating from '@mui/material/Rating';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { bookmarkCourse, favoriteCourse } from '../Redux';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import { FacebookShareButton, FacebookIcon, WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,LinkedinShareButton,LinkedinIcon, TelegramShareButton,TelegramIcon } from 'react-share';


const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 200,
      fontSize: 18
    },
  });

const IconTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 200,
      fontSize: 10,
    },
  });



const CourseCard = (props) => {

    const dispatch = useDispatch()

    //Functions for Adding Bookmark and Favorite Courses
    function addBookmark(course_id,props){          
    
        let course = {id : course_id, prop : props}
    
        dispatch(bookmarkCourse(course))
    
    
    }

    function addFavorite(course_id,props){      
        let course = {id : course_id, prop : props}

        dispatch(favoriteCourse(course))
    }

    //Bookmark And Favorite Selectors
    const bookmarkCourses = useSelector(state => state.bookmarkCourses)
    const favoriteCourses = useSelector(state => state.favoriteCourses)
    
    const [checked , setChecked ] = useState(false)
    
    let shareUrl = `https://www.udemy.com${props.course_url}`

    //Joining Tutor Names
    let names = props.tutor_det.map((curr)=>{    
        return curr.name
    })
    let tutor_names = names.join(', ')
    

    function redirect(){
        window.open(shareUrl,'_blank')
    }



    return (
        <>
            <Card sx={{ maxWidth: 380, minHeight: 300, fontSize : '1.5rem' }} className='card' >
                    
                    <CustomWidthTooltip 
                        title='Explore Course' 
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 1100 }} 
                        arrow
                        placement='top'
                    >
                        <CardMedia
                                component="img"
                                height="194"
                                image={props.course_img}
                                alt={props.course_img_alt}
                                onClick={redirect}
                        />
                    </CustomWidthTooltip>
                    <CardContent>
                        <h1 className="text-2xl" style={{}}>
                            {props.course_title}
                        </h1>
                        <div className="card_content_tutor_names">
                            <h6 className='mr-2' > <b>Instructors:</b> &nbsp; {tutor_names}  </h6>
                        </div>

                        <div className="card_end flex w-100 items-center place-content-between">
                            <p className="h-100 m-0"> {props.course_price} </p>
                            
                            <div className="card_icons flex place-content-around">
                                
                                {
                                    bookmarkCourses.some(ele => ele.id === props.id) ? 
                                    (
                                        <>
                                            <IconTooltip
                                                title='Bookmark Added'
                                                arrow
                                                placement='top'
                                            >
                                                <IconButton aria-label="bookmark" size='large' onClick={e => addBookmark(props.id,props)}>
                                                    <BookmarkAddedIcon fontSize='large' style={{color : '#07be07'}} /> 
                                                </IconButton>
                                            </IconTooltip>
                                        </>
                                    ) : 
                                    (
                                        <>
                                            <IconTooltip
                                                title='Add to Bookmarks'
                                                arrow
                                                placement='top'
                                            >
                                                <IconButton aria-label="bookmark" size='large' onClick={e => addBookmark(props.id,props)}>
                                                    <BookmarkAddIcon  fontSize='large'/>
                                                </IconButton>
                                            </IconTooltip>
                                        </>
                                    )
                                }
                                {
                                    favoriteCourses.some(ele => ele.id === props.id) ? 
                                    (
                                        <>
                                            <IconTooltip
                                                title='Favorite Added'
                                                arrow
                                                placement='top'
                                            >
                                                <IconButton aria-label="favorite" size='large' onClick={e => addFavorite(props.id,props)}>
                                                    <FavoriteIcon fontSize='large' style={{color : '#f82121' }} />                                                 
                                                </IconButton>        
                                            </IconTooltip>
                                        </>
                                    ) : 
                                    (
                                        <>
                                            <IconTooltip
                                                title='Add to Favorites'
                                                arrow
                                                placement='top'
                                            >
                                                <IconButton aria-label="favorite" size='large' onClick={e => addFavorite(props.id,props)}>
                                                    <FavoriteIcon fontSize='large'  /> 
                                                </IconButton>        
                                            </IconTooltip>
                                        </>
                                    )
                                }

                                <input type="checkbox" id='click' onClick={e => setChecked(!checked)} />
                               
                                <label htmlFor="click" className="share_label">
                                    <span className="social_share">
                                        
                                        {
                                            checked ? (
                                                <>
                                                    <IconButton size='large' className='share_btn' >
                                                        <CloseIcon fontSize='large' className='clsIco' /> 
                                                    </IconButton>

                                                </>
                                            ) : 
                                            (
                                                <>    
                                                    <IconButton size='large' className='share_btn' >
                                                        <ShareIcon fontSize='large' className='shrIco'/> 
                                                    </IconButton>
                                                </>
                                            )
                                        }
                                        <WhatsappShareButton className='social_icons' url={shareUrl} >
                                            <WhatsappIcon size={30} round={true} />
                                        </WhatsappShareButton>
                                        <TwitterShareButton className='social_icons' url={shareUrl} >
                                            <TwitterIcon size={30} round={true} />
                                        </TwitterShareButton>
                                        <LinkedinShareButton className='social_icons' url={shareUrl} >
                                            <LinkedinIcon size={30} round={true} />
                                        </LinkedinShareButton>
                                        <FacebookShareButton className='social_icons' url={shareUrl} >
                                            <FacebookIcon size={30} round={true} />
                                        </FacebookShareButton>
                                        <TelegramShareButton className='social_icons' url={shareUrl} >
                                            <TelegramIcon size={30} round={true} />
                                        </TelegramShareButton>
                                    </span>
                                </label>
                            </div>
                        </div>

                    </CardContent>
            </Card>
        </>
    )
}

export default CourseCard