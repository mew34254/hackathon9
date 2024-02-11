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
                <img src= "images/banner.jpg" alt="banner"/>
            </div>

            <div className="gridContainer">
                <div className="gridItem">
                    <img src="images/hpIcon1.png" alt="Icon 1"/>
                    <h2> Title </h2>
                    <p>Text for item 1</p>
                </div>
                <div className="gridItem">
                     <img src="images/hpIcon2.png" alt="Icon 2"/>
                    <h2> Title </h2>
                    <p>Text for item 2</p>
                </div>
                 <div className="gridItem">
                     <img src="images/hpIcon3.png" alt="Icon 3"/>
                     <h2> Title </h2>
                     <p>Text for item 3</p>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Homepage; 