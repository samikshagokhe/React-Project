import { useNavigate } from 'react-router-dom';
import './index.css';
import Header from '../header';
import { Link } from 'react-router-dom';


const Home =()=>{


     return(
          <>
          <Header/>
          
          <div className="home-sm-bg">
               <h2>Find The Job That Fits  Your Life</h2>
               <br />
               <p>Millions of people are searching for jobs, 
                    salary information, company reviews. 
                    Find the job <br /> that fits your abilities and potential.
               </p>
               <br />
               <Link to= "/jobs">
               <button className='btn btn-primary'>Find Jobs</button>

               </Link>
               

          </div>
          <div className="home-lg-bg">
               <h1 className='large-home-heading'>Find The Job That Fits <br /> Your Life</h1>
               
               <p>Millions of people are searching for jobs, 
                    salary <br /> information, company reviews. 
                    Find the job that fits <br /> your abilities and potential.
               </p>
               
               <Link to= "/jobs">
               <button className='btn btn-primary btn-find-job'>Find Jobs</button>

               </Link>
               
          </div>
          
          </>
     )
}


export default Home;