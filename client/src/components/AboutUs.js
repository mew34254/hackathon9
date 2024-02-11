import './AboutUs.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AboutUs(props) {


    return (
        <>
            <NavBar />

            <div className="image" >
                <div className="textContainerAboutUs" >
                    <div className="welcomeText" >
                        <h1>About <br></br> Us</h1>
                    </div>
                </div>

                <div className="textContainerSub" >
                    <div className="subtext" >
                        <p>The Financial Fighters mission is protect those most vulnerable from cyberattacks.</p>
                    </div>
                </div>

                <div className="bottomRightImage" >
                    <img src="images/columbiaBlue.png" alt="About Us Image" />
                </div>
            </div>

            <div className="textContainer2">
                <div className="body" >
                    <h1>Who are we?</h1>
                    <p>We are a non-profit dedicated to promoting prevention, awareness, and support for the victims of financial scams. Our goal is to spread resources to those affected by this issue, as well as share their stories, to hopefully one day put an end to these scams.</p>
            </div>
            </div>

            <div className="textContainer3">
                <div className="bodyA" >
                    <h1>What are financial scams?</h1>
                    <p>Financial scams encompass a wide range of fraudulent activities designed to deceive individuals or organizations out of their money or personal financial information. There are many types of financial scams, including: <br>
                    </br> <br></br>
                        <strong>Phishing:</strong> Scammers impersonate legitimate entities, such as banks or financial institutions, via email, phone calls, or text messages, tricking individuals into providing sensitive information like passwords, credit card numbers, or Social Security numbers. <br></br> <br></br>
                        <strong>Investment Fraud:</strong> Fraudulent schemes promising high returns with little or no risk, such as Ponzi schemes or pyramid schemes, where early investors are paid with the money from later investors rather than profits from a legitimate business venture. <br></br> <br></br>
                        <strong>Identity Theft:</strong> Thieves steal personal information, such as Social Security numbers, driver's license numbers, or financial account details, to open new accounts, make purchases, or commit other fraudulent activities in the victim's name. <br></br> <br></br>
                        <strong>Credit Card Fraud:</strong> Unauthorized use of someone else's credit card information to make purchases or withdraw cash without their knowledge or consent. <br></br>
                    </p>
                    </div>
                </div>

                <div className="textContainer4">
                    <div className="bodyB" >
                    <h1>How do we solve it?</h1>
                    <p>Spreading awareness is critical for preventing financial scams. Utilizing the resources on our website, you can gain access to helpful information, read the stories of those affected, and share your own story to help educate others. Above all, empathy is the key to helping those affected by financial scams.</p>
                    <br></br><br></br><br></br><br></br>
                    </div>
                </div>

            <div className="AboutUs-footer">
                <Footer />
            </div>

        </>
    )
}

export default AboutUs;