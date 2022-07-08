import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from '../Redux'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';






const Chart = () => {
      
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchData())
      },[])

      const fetchedData = useSelector((state) => state.cardData);
      // const loading = useSelector(state => state.loading)


      const [value,setValue] = useState('Child Subject')
      const handleChange = (e) =>{
          setValue(e.target.value)
      }

      const [data,setData] = useState([])
      const [count,setCount] = useState([])
      


      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      
      const colorPalette = ['#198754', '#dc3545', '#ffc107', '#0d6efd', '#f2ac08', '#f20866', '#08d7f2', '#93f208', '#f20856b8', '#7dc2a2', '#24c799']  // green red yellow blue
      
      
      
      useEffect(() =>{

        const arr = []; 

        fetchedData.map(curr => arr.push(curr[value]));

        var uniArr = arr.filter(onlyUnique)


        console.log(uniArr)
        // console.log(arr)


        const count = {};

        for (const element of arr) {
          if (count[element]) {
            count[element] += 1;
          } else {
            count[element] = 1;
          }
        }
        console.log(count)
        // console.log(count)

        const countArr = []
        const getCountArr = (item,ind) =>{
            // console.log(item)
            // console.log(count[item])
            
            countArr.push({
              value : count[item],
              itemStyle:{
                color : colorPalette[ind%colorPalette.length]
              }
            })
        }
        
        uniArr.forEach(getCountArr);
        console.log(countArr)
        // console.log(Object.keys(count).length)

        setData(uniArr)
        setCount(countArr)


      },[fetchedData,value])


      // console.log(value);




      const option = {
            legend: {
              bottom: '10%',
              left: '15%'
            },
            color: ['#FD7E14'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
                label: {
                  backgroundColor: '#00000'
                },
                animation: true
              }
            },
            xAxis: {
              type: 'category',
              data: data
            },
            yAxis: {
              type: 'value',
              nameTextStyle: {
                fontStyle: 'oblique',
                fontWeight: 500
              }
            },
            series: [
              {
                data: count,
                type: 'bar',
                
              }
            ]
      };

      return (
        <>

          <div className=" contentCharts  container-fluid ">
              <h1 className="display-4 text-center ">
                  Check the Statistics Here...
              </h1>
              <div className="container mt-5">
                  <FormControl style={{fontSize:'100px'}}>
                      <FormLabel id="demo-row-radio-buttons-group-label"> <h3 >  Number Courses Available According To </h3> </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel value="Child Subject" control={<Radio />} label="Child Subject" />
                        <FormControlLabel value="Parent Subject" control={<Radio />} label="Parent Subject" />
                        <FormControlLabel value="Provider" control={<Radio />} label="Provider" />
                        
                      </RadioGroup>
                  </FormControl>
              </div>
          </div>  


          <ReactECharts option={option} style={{ height: '450px', width: '100%' }} />
        </>
      )
}

export default Chart