import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import { useSate, useEffect } from 'react';


function Homepage(props) {
    return (
        <>
        <section class="section1"> 
            <div className="Homepage-banner">
                <img src= "images/banner.jpg" alt="banner"/>
            </div>
       
         </section>

         <section class="section2">
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
        </section>
        </>
    )
}

export default Homepage; 