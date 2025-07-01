
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react';
import './index.css';

/*
name: "Rahul Attluri"
profile_image_url: "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
short_bio: "Lead Software Developer and AI-ML expert"
*/

const employmentTypesList =[
     {
          label : "Full Time",
          employmentTypeId : "FULLTIME"

     },
     {
          label : "Part Time",
          employmentTypeId : "PARTTIME"

     },
     {
          label : "Freelance",
          employmentTypeId : "FREELANCE"

     },
     {
          label : "Internship",
          employmentTypeId : "INTERNSHIP"

     }
]

const salaryRangeList = [
     {
          label : "10 LPA and above",
          salaryRangeId : "1000000"
     },
     {
          label : "20 LPA and above",
          salaryRangeId : "2000000"
     },
     {
          label : "30 LPA and above",
          salaryRangeId : "3000000"
     },
     {
          label : "40 LPA and above",
          salaryRangeId : "4000000"
     },
]


const FilterSection = (props)=>{
     
     const token = Cookies.get("jwtToken")

     // console.log(props);
     const {empTypeChange, salaryRangeChange} = props;

     const [allValues,setValues] = useState({
          profileDetails: {}
     })

     useEffect(()=>{

          const getProfile = async()=>{
               const api = "https://apis.ccbp.in/profile";

               const options = {
                    method : "Get",
                    headers : {
                         Authorization : `Bearer ${token}`
                    }
               }
               
               const response = await fetch(api, options);

               const profileData = await response.json();

               // console.log(profileData);

               if(response.ok === true){
                    setValues({...allValues, profileDetails: profileData.profile_details})
               }

               

          }
          getProfile();

          
     },[])
     
     const renderProfileDetails = ()=>(

          
               <>
               <img  src={allValues.profileDetails.profile_image_url} alt="profile" />
               <h3 className='profile-name'>{allValues.profileDetails.name}</h3>
               <p className='short-bio'>{allValues.profileDetails.short_bio}</p>
               </>
     )
     

     const renderEmploymentTypeList =()=>{

          const onChangeEmployeeType=(e)=>{
               // console.log(e.target.value);
               empTypeChange(e.target.value,e.target.checked)
               // console.log(e);
          }

          return employmentTypesList.map( (each) =>{
               return(
                   <li className="fliters-list-item" key = {each.employmentTypeId}>
                    <input 
                    type="checkbox" 
                    className='checkbox-input'
                    value={each.employmentTypeId}
                    id={each.employmentTypeId}
                    name='employment types'
                    onChange={onChangeEmployeeType}
                    />
                    <label className="filter-label" htmlFor={each.employmentTypeId}>
                         {each.label}
                    </label>
                   </li>
               )
          })
     }

     const renderEmploymentTypes =()=>(

          
          <>
               <h1 className="filter-heading">Type of Employment</h1>
               <br />
               <ul className="filters-list">{renderEmploymentTypeList()}</ul>
          </>
     )
     

     const renderSalaryRangeList=()=>{

          const onChangeSalaryRange=(e)=>{
               // console.log(e.target.value);
               salaryRangeChange(e.target.value)
          }

          return salaryRangeList.map((each)=>{
               return(
                    <li className="fliters-list-item" key ={each.salaryRangeId}>
                         <input
                         className='checkbox-input' 
                         type="radio" 
                         value={each.salaryRangeId}
                         id={each.salaryRangeId} 
                         name='salary-ranges'
                         onChange={onChangeSalaryRange}
                         />
                         <label className='filter-label' htmlFor={each.salaryRangeId}>
                              {each.label}
                         </label>
                    </li>
               )
          }) 
     }


     const renderSalaryRange =()=>(

          
               <>
               <h1 className='filter-heading'>Salary Range</h1>
               <br />
               <ul className='filters-list'>{renderSalaryRangeList()}</ul>
               </>

          

     )

     

    
     return(
          <>
          
          <div className='profile-large-bg-cont'>
               
             {renderProfileDetails()}

          </div>
          
          <hr className='seperator' />
          <div>
               {renderEmploymentTypes()}

          </div>
          <hr />
          <div>
               {renderSalaryRange()}

          </div>
          
          </>
     )

     }

   



export default FilterSection;
