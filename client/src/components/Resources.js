import './Resources.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Resources(props) {


    return (
        <>
            <div className="resourcesBanner">
                <div className="textContainer">
                        <h1> Welcome to Soemthing </h1>
                        <p> Some description... </p>
                </div>
                <img src= "images/resourcesBanner.jpg" alt="resourcesBanner"/>
            </div>

            <div class="container">
                
    <h2>Header Text</h2>
    <div class="grid">
        <div class="card">
            <img src="images/resourcesIcon1.jpg" alt="Image 1"/>
            <div class="card-text">
                <h3>Card Title 1</h3>
                <p>Some text description for card 1.</p>
            </div>
        </div>
        <div class="card">
            <img src="images/resourcesIcon2.jpg" alt="Image 2"/>
            <div class="card-text">
                <h3>Card Title 2</h3>
                <p>Some text description for card 2.</p>
            </div>
        </div>
        <div class="card">
            <img src="images/resourcesIcon3.jpg" alt="Image 3"/>
            <div class="card-text">
                <h3>Card Title 3</h3>
                <p>Some text description for card 3.</p>
            </div>
        </div>
        <div class="card">
            <img src="images/resourcesIcon4.jpg" alt="Image 4"/>
            <div class="card-text">
                <h3>Card Title 4</h3>
                <p>Some text description for card 4.</p>
            </div>
        </div>
    </div>
</div>


        </>
    )
}

export default Resources;