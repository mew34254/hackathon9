import './Footer.css'
import { useNavigate } from 'react-router-dom';
import { useSate, useEffect, createElement } from 'react'; 

function Footer(props) { 
    return (
        <>
        <footer className="footer">
            <div className="left"> 
                <p> ©2024 Financial Fighters</p>
            </div> 
            <div className="right">
                <img src="" />
            </div>
        </footer>
        </>
    ) 
}

export default Footer; 

