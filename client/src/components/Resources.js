import './Resources.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Resources(props) {

    return (
        <>
        <NavBar/>
            <div className="resourcesBanner">
                <div className="textContainer">
                        <h1> Welcome to Soemthing </h1>
                        <p> Some description... </p>
                </div>
                <img src= "images/columbiaBlue.png" alt="resourcesBanner"/>
            </div>

            <div class="container">

        <div className="cardHeader"> 
        <h2>Organizations</h2>
        </div>
    <div class="resourcesGrid">
        <div class="card">
            <img src="images/resourcesIcon1.png" alt="Image 1"/>
            <div className="cardText">
                <h3><a href="https://www.ftc.gov/" target="_blank">Federal Trade Commission</a></h3>
                <p>The FTC offers information on how to recognize, avoid, and report scams 
                    and fraud. Their website provides tips on protecting yourself from identity 
                    theft, impostor scams, and other forms of financial fraud.</p>
            </div>
        </div>
        <div class="card">
            <img src="images/resourcesIcon2.png" alt="Image 2"/>
            <div className="cardText">
                <h3><a href="https://www.bbb.org/" target="_blank">Better Business Bureau</a></h3>
                <p>The BBB provides consumer protection resources, including scam alerts, 
                    tips for avoiding fraud, and information on businesses with questionable practices.</p>
            </div>
        </div>
        <div class="card">
            <img src="images/resourcesIcon3.png" alt="Image 3"/>
            <div className="cardText">
                <h3><a href="https://www.consumerfinance.gov/consumer-tools/fraud/" target="_blank">Consumer Financial Protection Bureau</a></h3>
                <p>The CFPB offers resources to help consumers make informed financial decisions 
                    and protect themselves from fraud, including information on banking scams, credit card 
                    fraud, and more.</p>
            </div>
        </div>
        <div className="card">
            <img src="images/resourcesIcon4.png" alt="Image 4"/>
            <div class="cardText">
                <h3><a href="https://www.idtheftcenter.org/" target="_blank">Identity Theft Resource Center</a></h3>
                <p>The ITRC provides assistance to victims of identity theft and offers resources to 
                    help individuals protect themselves from identity theft and related financial fraud.</p>
            </div>
        </div>
    </div>
</div>
<Footer/>
        </>
    )
}

export default Resources;