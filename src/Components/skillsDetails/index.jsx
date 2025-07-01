

import './index.css';

const SkillsDetails = (props)=>{
     // console.log(props);
     const {detailOfSkills} = props;

    

     return(
          <li className='skills-cont'>
          <img src={detailOfSkills.image_url} className='skills-image' alt="image" />
          <h6 className='skill-name-heading'>{detailOfSkills.name}</h6>
          </li>
     )
}

export default SkillsDetails;