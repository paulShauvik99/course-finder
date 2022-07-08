import { Card,CardContent,Typography,Button } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkIcon from '@mui/icons-material/Link';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';




const CourseCard = (props) => {

    return (
        <>
            <Card sx={{ maxWidth: 400, minHeight: 480 }} className='card'>
                    
                    
                    <CardContent>
                        <div className="d-flex justify-content-between align-items-center">
                            <Typography gutterBottom variant="h6" component="h6">
                                {props.courseId?props.courseId:'N/A'}
                            </Typography>
                            
                            <Typography gutterBottom variant="subtitle2" component="h3">
                                <CalendarMonthIcon /> {props.nxtSess?props.nxtSess:'N/A'}
                            </Typography>
                        </div>
                        <Typography variant="subtitle1" component="p"  color="text.dark">
                            <b> Course Name:</b><br />
                            {props.courseName?props.courseName:'N/A'}
                        </Typography>
                        <br />
                        <Typography variant="subtitle1" component="p"  color="text.dark">
                            <b> Provider:</b>&nbsp;
                            {props.provider?props.provider:'N/A'}
                        </Typography>
                        <br />
                        <Typography variant="subtitle1" component="p"  color="text.dark">
                            <b> University:</b>&nbsp;
                            {props.uni?props.uni:'N/A'}
                        </Typography>
                        <br />
                        <div className="d-flex justify-content-between row align-items-center">
                            <Typography gutterBottom variant="subtitle2" className="col-md-7" component="h6">
                            <b> Parent Subject:</b><br />
                            {props.courseName?props.courseName:'N/A'}
                            </Typography>
                            
                            <Typography gutterBottom variant="subtitle2" className='col-md-5' component="h3">
                            <b> Child Subject:</b><br />
                            {props.childSub?props.childSub:'N/A'}
                            </Typography>
                        </div>


                        <div className="container-fluid cardAction">
                            {
                                props.url?(
                                    <Button size="small" className='butn' href={props.url}  target="_blank" variant="contained" 
                                        startIcon={<LinkIcon />}
                                    >
                                        Visit Site
                                    </Button>
                                ):(<></>)
                            }

                            {
                                props.vurl?(
                                    <Button size="small" className='butn' href={props.vurl} target="_blank" variant="contained" 
                                        startIcon={<OndemandVideoIcon />}
                                    >
                                        Video Link
                                    </Button>
                                ):(<></>)
                            }
                            
                        </div>
                    </CardContent>
            </Card>
        </>
    )
}

export default CourseCard