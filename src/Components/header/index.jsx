
import { FiLogOut } from "react-icons/fi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './index.css';
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";


const Header = ()=>{

     const navigate = useNavigate();
     
     const onClickLogout=()=>{
          const token = Cookies.remove("jwtToken");
         
          console.log(token);
          navigate('/login')


     }

     return(
         <>
          <nav className='my-nav-small'>
               <Link to= "/">
                    <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png " className='web-logo'/>
               </Link>
               <ul className='my-ul-cont'>
                    <li>
                         <Link className='my-nav-items' to= "/"><AiFillHome /></Link>
                    </li>
                    <li>
                         <Link className='my-nav-items' to= "/jobs"><BsFillBriefcaseFill /></Link>
                    </li>
                    <li>
                         <Link className='my-nav-items' to= "/login" ><FiLogOut /></Link>
                    </li>
                    
               </ul>
               

          </nav>
          <nav className='my-nav-large'>
               <Link to= "/">
                    <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png " className='web-logo'/>
               </Link>
               <ul className='my-ul-cont'>
                    <li >
                         <Link to= "/" className='my-nav-items' >Home</Link>
                    </li>
                    <li>
                         <Link to= "/jobs" className='my-nav-items' href="#">Jobs</Link>
                    </li>
                    
               </ul>
               <button onClick={onClickLogout} className='btn btn-primary'>Logout</button>

          </nav>

         </>
     )
}


export default Header;