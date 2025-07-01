import Header from '../header';
import './index.css'
import FilterSection from '../filterSection';
import DisplayAllJobs from '../displayAllJobs';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { IoIosSearch } from "react-icons/io";
import { BsTypeH1 } from 'react-icons/bs';

const Jobs =()=>{

     const [allValues, setValues] = useState({
          jobsList : [],
          empType : [],
          minPackage : "",
          userSearchIn : "",
          showErrorMsg : false,

     });
     const token = Cookies.get("jwtToken")


     useEffect(()=>{
         
          const getJobsData =async ()=>{
               // console.log(allValues.empType);

               const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.minPackage}&search=${allValues.userSearchIn}`;

               const option = {
                    method : "Get",
                    headers : {
                         Authorization : `Bearer ${token}`
                    }
               }

               const response = await fetch(api, option);

               const jobsData = await response.json();

               // console.log(jobsData.jobs);

               if(response.ok === true){
                    setValues({...allValues, jobsList : jobsData.jobs, showErrorMsg : false,})
               }
               else{
                    setValues({...allValues,showErrorMsg : true})
               }
          }

          getJobsData();
          
     },[allValues.userSearchIn,allValues.empType,allValues.minPackage]);

     const onChangeUserInput =(e)=>{
          // console.log(e.target.value);
          if(e.key === "Enter"){
               setValues({...allValues, userSearchIn : e.target.value})  
          }
     }

     const onChangeEmpType =(value,isChecked)=>{
          // console.log(value);
          // console.log(isChecked);
          if(isChecked === true){
               setValues({...allValues, empType : [...allValues.empType,value]})

          }else{
               setValues({...allValues, empType : allValues.empType.filter( each=> each !==value)})

          }
          
     };

     const onChangeSalaryRange =(value)=>{
          setValues({...allValues, minPackage : value})
     };




     return(
          <>
             <Header/>
             {allValues.showErrorMsg? ( <h1>Its Not You Its Us!!!</h1>) : (
               <>
               <div className='job-small-cont'>
               <div className='search-bar-cont'>
                    <input onKeyDown={onChangeUserInput} type="search" className='my-search text-white' name="" id="" placeholder='Search'/>
                    <button className='search-btn'><IoIosSearch className='search-icon'/></button>
                    </div>
               <div className='filter-section-cont'>
                    <FilterSection empTypeChange= {onChangeEmpType} salaryRangeChange = {onChangeSalaryRange}/>
               </div>
               <div className='display-all-jobs-cont'>
                    <ul className='alljobs-ul-cont'>
                         { allValues.jobsList.map( (each)=> <DisplayAllJobs key = {each.id} jobsItem = {each}/>)}

                    </ul>
               </div>
             </div>
             
             <div className='job-large-cont'>
               <div className='filter-section-cont'>
                   <FilterSection empTypeChange = {onChangeEmpType} salaryRangeChange = {onChangeSalaryRange}/>
               </div>
               <div className='display-all-jobs-cont'>
                    <div className='search-bar-cont'>
                    <input onKeyDown={onChangeUserInput} type="search" className='mb-3 my-search text-white' name="" id="" placeholder='Search' />
                    <button className='search-btn'><IoIosSearch className='search-icon'/></button>
                    </div>
                    <ul className='alljobs-ul-cont'>
                              { allValues.jobsList.map( (each)=> <DisplayAllJobs key = {each.id} jobsItem = {each}/>)}

                    </ul>
                    
                    
               </div>
             </div>
               </>
             )}
             
             
             

          </>
     )
}


export default Jobs;