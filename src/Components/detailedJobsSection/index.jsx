
import { useParams } from 'react-router-dom';
import './index.css';
import Cookies from 'js-cookie'
import { useState } from 'react';
import Header from '../header';
import { BsBriefcaseFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import SkillsDetails from '../skillsDetails';
import SimilarJobs from '../similarJobs';

const DetailedJobsSection =()=>{
     // console.log(useParams());
     
     const {id} = useParams();
     // console.log(id);
     const token = Cookies.get("jwtToken")

     const [allValues,setValues] = useState({
          jobDetails : {},
          skillsDetails : [],
          lifeAtCompDetails : {},
          similarJobsDetails : []
     })

     const getDetailedJobsData = async()=>{
          const api = `https://apis.ccbp.in/jobs/${id}`;

          const options = {
               method : "Get",
               headers : {
                    Authorization : `Bearer ${token}`
               }
          }
          const response = await fetch(api,options);

          const detailedJobsData = await response.json();

          // console.log(detailedJobsData.similar_jobs);
          setValues({...allValues, 
               jobDetails : detailedJobsData.job_details, 
               skillsDetails : detailedJobsData.job_details.skills, 
               lifeAtCompDetails : detailedJobsData.job_details.life_at_company,
               similarJobsDetails : detailedJobsData.similar_jobs
          });


     }

     getDetailedJobsData();


     return(
          <>
          <Header/>
          <div className='small-cont'>

          </div>
          <div className='large-cont'>
               <div className='detail-cont'>
               <div className='logo-title-cont'>
                    <img className="card-logo" src={allValues.jobDetails.company_logo_url} alt="company-logo" />
                    <div className="rating-cont">
                         <h3>{allValues.jobDetails.title}</h3>
                         <FaStar className="rating-icon" />
                         <span>{allValues.jobDetails.rating}</span>
                    </div>
               </div>
               <div className="locat-salary-cont">
                    <div className="location-emptype-cont">
                         <FaLocationDot />
                         <span className="span-cont">{allValues.jobDetails.location}</span>
                         <BsBriefcaseFill className="emp-icon"/>
                         <span className="span-cont">{allValues.jobDetails.employment_type}</span>

                    </div>
                    <span>{allValues.jobDetails.package_per_annum}</span>

               </div>
               <hr className="hr-line" />
               <div className="description-cont">
                    <h5 className="descrip-heading">Description</h5>
                    <span>{allValues.jobDetails.job_description}</span>

               </div>
               <br />
               <h5 className="descrip-heading">Skills</h5>
               <ul className='skills-cont'>
                    {allValues.skillsDetails.map( each=><SkillsDetails key={each.id} detailOfSkills={each}/>)}
               </ul>
               <h5 className="descrip-heading">Life at Company</h5>
               <div className='life-cmpny-cont'>
                    <span className='comp-descrip-span'>{allValues.lifeAtCompDetails.description}</span>
                    <img className='company-image' src={allValues.lifeAtCompDetails.image_url} alt="company-image" />

               </div>
               </div>
               <br />
               <div className='similar-jobs-cont'>
               <h4 className="descrip-heading">Similar Jobs</h4>
               <ul className='similar-jobs-ul-cont'>
                   {allValues.similarJobsDetails.map( each=><SimilarJobs key={each.id} detailOfSimilarJobs={each}/>)}
               </ul>
               </div>

          </div>
          </>
     )
}


export default DetailedJobsSection;