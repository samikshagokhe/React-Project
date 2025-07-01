import { BsBriefcaseFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import './index.css';
import { Link } from "react-router-dom";
/*
company_logo_url: "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png"
employment_type: "Internship"
id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"
job_description: "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support."
location: "Delhi"
package_per_annum: "10 LPA"
rating: 4
title: "Devops Engineer"

*/

const DisplayAllJobs = (props)=>{

     const {jobsItem} = props;
     // console.log(jobsItem);


     return(
         <>
         <Link to={`/jobs/${jobsItem.id}`} className="all-jobs-link-cont">
          <li className='jobs-small-card'>
               <div className='logo-title-cont'>
                    <img className="card-logo" src={jobsItem.company_logo_url} alt="company-logo" />
                    <div className="rating-cont">
                         <h5>{jobsItem.title}</h5>
                         <FaStar className="rating-icon" />
                         <span>{jobsItem.rating}</span>
                    </div>
               </div>
               <div className="locat-salary-cont">
                    <div className="location-emptype-cont">
                         <FaLocationDot />
                         <span className="span-cont">{jobsItem.location}</span>
                         <BsBriefcaseFill className="emp-icon"/>
                         <span className="span-cont">{jobsItem.employment_type}</span>

                    </div>
                    <span>{jobsItem.package_per_annum}</span>

               </div>
               <hr className="hr-line" />
               <div className="description-cont">
                    <h5 className="descrip-heading">Description</h5>
                    <span>{jobsItem.job_description}</span>

               </div>

          </li>
          <li className='jobs-large-card'>
               <div className='logo-title-cont'>
                    <img className="card-logo" src={jobsItem.company_logo_url} alt="company-logo" />
                    <div className="rating-cont">
                         <h3>{jobsItem.title}</h3>
                         <FaStar className="rating-icon" />
                         <span>{jobsItem.rating}</span>
                    </div>
               </div>
               
               <div className="locat-salary-cont">
                    <div className="location-emptype-cont">
                         <FaLocationDot />
                         <span className="span-cont">{jobsItem.location}</span>
                         <BsBriefcaseFill className="emp-icon"/>
                         <span className="span-cont">{jobsItem.employment_type}</span>

                    </div>
                    <span>{jobsItem.package_per_annum}</span>

               </div>
               <hr className="hr-line" />
               <div className="description-cont">
                    <h5 className="descrip-heading">Description</h5>
                    <span>{jobsItem.job_description}</span>

               </div>
               

          </li>
          </Link>
         </>
          
     )
}


export default DisplayAllJobs;