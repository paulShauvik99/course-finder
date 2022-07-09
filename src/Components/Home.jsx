import { Autocomplete ,Checkbox, TextField, FormGroup, FormControlLabel, Stack, Pagination, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from './CourseCard';
import {fetchData} from '../Redux'
import TypeWriterEffect from 'react-typewriter-effect';




const Home = () => {
    
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(fetchData());
    },[])




    
    const fetchedData = useSelector(state => state.cardData)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)

    // console.log(fetchedData)

    const [childSubject,setChildSubject] = useState([]);
    const [courses,setCourses]= useState([]);

    const [searchCourse,setSearchCourse] = useState([]);
    const [pag,setPag] = useState(false);
    const [reset,setReset] = useState(false);


    const [cardData , setCardData] = useState([])
    
    const [page,setPage] = useState(1);
    const [page2,setPage2] = useState(1);



    //PAGINATION-------

    const pageSize = 6;

    const [pagination, setPagination] = useState({
            count : 0,
            from : 0,
            to : pageSize 
    })


    const [pagination2, setPagination2] = useState({
            count : 0,
            from : 0,
            to : pageSize 
    })
   
    const handlePageChange2 =(e,page)=>{
            const from = (page-1)*pageSize;
            const to = (page-1)*pageSize+pageSize;

            setPage2(page)
            setPagination2({
                ...pagination2,
                from:from,
                to:to
            })
    }
        
    const searchCourses=()=>{
        
        setPage2(1)

        setPagination2({
            ...pagination2,
            from:0,
            to:pageSize
        })

        const cards = [];


        if(value && value2 && checked){

            fetchedData.map((curr,ind)=>{
                if(curr['Child Subject'] === value && curr['Course Name']===value2 && curr['Next Session Date']==='Self paced')
                cards.push(curr);
            })
            setPag(true)
            setSearchCourse(cards);
        }else if(value && value2){
            fetchedData.map((curr,ind)=>{
                if(curr['Child Subject'] === value && curr['Course Name']===value2 )
                    cards.push(curr);
            })
            setPag(true)
            setSearchCourse(cards);
            
        }else if(value){

            fetchedData.map((curr,ind)=>{
                if(curr['Child Subject'] === value )
                    cards.push(curr);
            })
            setPag(true)
            setSearchCourse(cards);
        }else if(checked){
            fetchedData.map((curr,ind)=>{
                if(curr['Next Session Date'] === 'Self paced' )
                    cards.push(curr);
            })
            setPag(true)
            setSearchCourse(cards);

        }
        // console.log(cards);
    }
    
    useEffect(() => {
            var data = []; 
            // if(sear)
            data = searchCourse.slice(pagination2.from, pagination2.to)
            // console.log(data);
            setCardData(data);
            console.log(pagination2.from + " " + pagination2.to);
            
            setPagination2({
                ...pagination2,
                count : searchCourse.length
            })

            
        },[pagination2.from,pagination2.to,searchCourse])

        
        
        
        useEffect(() => {
            var data = []; 
            loading? (<h3> Loading... </h3>) : error?(<h3> {error} </h3>) : data = fetchedData.slice(pagination.from, pagination.to)
            setCardData(data);
            getChildSub();
            // console.log(pagination.from + " " + pagination.to);

            setPagination({
                ...pagination,
                count : fetchedData.length
            })
        },[pagination.from,pagination.to,fetchedData,reset])

   
        const handlePageChange =(e,page)=>{
            const from = (page-1)*pageSize;
            const to = (page-1)*pageSize+pageSize;

            setPage(page)
            setPagination({
                ...pagination,
                from:from,
                to:to
            })
    }

    //Search Constraints...

    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [value2, setValue2] = useState(null);
    const [inputValue2, setInputValue2] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }
    


    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }


    const getCourses =()=>{
        var childSub = []

        fetchedData.map((curr,ind)=>{
            if(curr['Child Subject'] === value) childSub.push(curr['Course Name'])
        })
        var unique = childSub.filter(onlyUnique);
        setCourses(unique)
        // console.log(childSub);
    }

    const getChildSub = () => {
        var coursess =[];
        
        fetchedData.map((curr)=>coursess.push(curr['Child Subject']))
        var unique = coursess.filter(onlyUnique);
        setChildSubject(unique)
        // console.log(unique)    

    }



    useEffect(() => {
        getCourses();
        // console.log(value + "  " + inputValue)
    }, [value,inputValue])

    // const searchCourses=()=>{
    //     const cards = [];
    //     if(value ||  value2){
    //         fetchedData.map((curr,ind)=>{
    //             if(curr['Child Subject'] === value || curr['Course Name']===value2)
    //                 cards.push(curr);
    //         })
    //     }
    //     setPag(true)
    //     console.log(cards);
    //     setCardData(cards);
    // }








    return (
        <>
            <div className=" contaiener-fluid contentHome row">
                <h1 className='col-md-12 text-center display-4 text-danger'>
                    <b> Welcome To Course-Finder </b>
                </h1>
                <h1 className='col-md-12 text-center display-4 '>
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: '#3F3D56',
                                fontWeight: 500,
                                fontSize: '1.2em',
                                textAlign: 'center'
                            }}
                            
                            cursorColor="#3F3D56"
                            multiText={[
                                'Find Your Courses Here...',
                                'Start Your Course Today...',
                                'Happy Learning :)'
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={80}
                            multiTextLoop
                        />
                        
                </h1>
                <div className="container mt-4  col-md-12 homeSearch">
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            setValue2(null)
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={childSubject}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Child Subject" />}
                    />
                    <Autocomplete
                        disablePortal
                        value={value2}
                        onChange={(event, newValue2) => {
                            setValue2(newValue2);
                        }}
                        id="combo-box-demo"
                        inputValue={inputValue2}
                        onInputChange={(event, newInputValue2) => {
                            setInputValue2(newInputValue2);
                        }}
                        options={courses}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Course Name" />}
                    />
                    <FormGroup>
                        <FormControlLabel 
                            control={<Checkbox checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}     
                                    />} 
                            label="Self Paced" />
                    </FormGroup>
                    <Button variant='contained' onClick={searchCourses} > Search </Button>
                    <Button variant='contained' onClick={()=>{setReset(!reset); setValue(null); setValue2(null); setChecked(false); setPag(false);setPage(1)}} > Reset </Button>
                </div>
                            
          
            </div>
            <br /><br /> <br />          
            <div className="container cardsContainer row">
                {   
                    loading ? (<h3 className="text-center"> Loading... </h3>) : error ? (<h3 className="text-center"> {error} </h3>) : cardData.length===0? (
                        <h3 className="text-center"> No Courses Found </h3>
                    ) :
                        cardData.map((curr, index)=>{
                            return (
                                <div className="col-md-4">
                                    <CourseCard
                                        key={curr.index}
                                        courseName={curr['Course Name']}
                                        parentSub={curr['Parent Subject']}
                                        childSub={curr['Child Subject']}
                                        courseId={curr['Course Id']}
                                        provider={curr['Provider']}
                                        nxtSess={curr['Next Session Date']}
                                        uni={curr['Universities/Institutions']}
                                        url={curr['Url']}
                                        vurl={curr['Video(Url)']}
                                    />
                                </div>
                            )
                        })
                    
                }
                
                <div className="container d-flex mt-3 justify-content-end me-5 pe-5 ">
                    <Stack spacing={2}>
                        {
                            !pag ? (
                                <Pagination count={Math.ceil(pagination.count/pageSize)} showFirstButton showLastButton 
                                    onChange={handlePageChange}
                                    page={page}
                                />
                            ):
                            (
                                <Pagination count={Math.ceil(pagination2.count/pageSize)} showFirstButton showLastButton 
                                    onChange={handlePageChange2}
                                    page={page2}
                                />
                            )
                        }
                    </Stack>
                </div>
                <br /> <br />
            </div>
        </>
    )
}



export default Home