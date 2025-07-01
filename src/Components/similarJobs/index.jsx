
import './index.css';
import { BsBriefcaseFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const SimilarJobs =(props)=>{
     // console.log(props);

     const {detailOfSimilarJobs} = props;


     return(
          <li className='similar-jobs-li-cont'>
                <div className='logo-title-cont'>
                    <img className="card-logo" src={detailOfSimilarJobs.company_logo_url} alt="company-logo" />
                    <div className="rating-cont">
                         <h5>{detailOfSimilarJobs.title}</h5>
                         <FaStar className="rating-icon" />
                         <span>{detailOfSimilarJobs.rating}</span>
                    </div>
               </div>
               <div className="description-cont">
                    <h5 className="descrip-heading">Description</h5>
                    <span className='description-span'>{detailOfSimilarJobs.job_description}</span>

               </div>
               <div className="location-emptype-cont">
                         <FaLocationDot className='icon'/>
                         <span className="span-cont">{detailOfSimilarJobs.location}</span>
                         <BsBriefcaseFill className="icon briefcase-icon"/>
                         <span className="span-cont">{detailOfSimilarJobs.employment_type}</span>

                </div>
               
          </li>
     )
}


export default SimilarJobs;