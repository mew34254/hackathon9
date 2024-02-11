import './Testimonials.css';
import NavBar from './NavBar';
import AddTestimonial from './AddTestimonial';
import Footer from './Footer';

import { useState, useEffect } from 'react';

function Testimonials(props) {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/testimonials/get`)
            .then(res => res.json())
            .then(data => {
                setTestimonials(data)
                console.log(data)
            }).catch(err => {
                console.log(err)
            });
    }, []);

    const [option, setOption] = useState(0);

    function addClick() {
        if (option == 1) {
            setOption(0);
        } else if (option == 0) {
            setOption(1);
        }
    }

    return (
        <>
            <NavBar />
            <div className="Testimonials-intro">
                <h2 className="Testimonials-intro-title">Testimonials</h2>
                <p>People all over the world are falling victim to cyberattacks. Have you?</p>
                <button className="Testimonials-form-button">
                    <a href="#Testimonials-add-container">Share your story</a>
                </button>
            </div>
            <div className="Testimonials-page-container">
                <div className="Testimonials-container">
                    {testimonials.map((item) => (
                        <div className="Testimonials-message-container" key={item.id}>
                            <p>"</p>
                            <p>{item.message}</p>
                            <p>"</p>
                            <p className="Testimonials-name">- {item.name}</p>
                        </div>
                    ))}
                </div>

                {option === 0 &&
                    <div id="Testimonials-add-container">
                        <button className="Testimonials-form-button" onClick={addClick}>Share your story</button>
                    </div>
                }

                {option === 1 &&
                    <div id="Testimonials-add-container">
                        <AddTestimonial />
                    </div>
                }

            </div>

            <Footer />
        </>
    )
}

export default Testimonials;