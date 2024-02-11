import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import { useSate, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';


function Homepage(props) {
    return (
        <>
        <NavBar/>
            <div className="homepageBanner">
                <div className="textContainer">
                    <div className="bannerText">
                        <h1> Welcome to Soemthing </h1>
                        <p> Some description... </p>
                    </div>
                </div>
                <img src= "images/columbiaBlue.png" alt="banner"/>
            </div>

            <div className="gridContainer">
                <div className="gridItem">
                    <img src="images/icon1.png" alt="Icon 1"/>
                    <h2> Prevention </h2>
                    <p>Giving consumers tools for prevention</p>
                </div>
                <div className="gridItem">
                     <img src="images/icon2NEW.png" alt="Icon 2"/>
                    <h2> Support </h2>
                    <p>Promoting community outreach and understanding</p>
                </div>
                 <div className="gridItem">
                    <div className="icon3Size">
                     <img src="images/icon3.png" alt="Icon 3"/>
                      </div>
                     <h2> Awareness </h2>
                     <p>Educating others to bring awareness</p>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Homepage; 