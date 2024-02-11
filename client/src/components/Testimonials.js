import './Testimonials.css';
import NavBar from './NavBar';
import AddTestimonial from './AddTestimonial';

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

    return (
        <>
            <NavBar />
            <div className="Testimonials-intro">
                <h2 className="Testimonials-intro-title">Testimonials</h2>
                <p>People all over the world are falling victim to cyberattacks.</p>
                <button className="Testimonials-form-button">Share your story</button>
            </div>
            <div className="Testimonials-page-container">
                <div className="Testimonials-container">
                    <div>
                        {testimonials.map((item) => (
                            <div>
                                <div key={item.id}>
                                    <p>{item.name} says:</p>
                                    <p>{item.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <AddTestimonial />
            </div>
        </>
    )
}

export default Testimonials;