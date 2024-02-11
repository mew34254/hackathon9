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

        </>
    )
}

export default Resources;