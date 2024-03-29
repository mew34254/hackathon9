import './AddTestimonial.css';

import { useState, useEffect } from 'react';

function AddTestimonial(props) {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const data = {
        'name': name,
        'message': message
    }

    const submitTestimonial = async () => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const result = await fetch("http://localhost:8080/testimonials/insert", requestOptions)

        const resultinJSON = await result.json();
        console.log(resultinJSON)
    }

    return (
        <>
            <div className="AddTestimonial-container">
                <form className="AddTestimonial-form">
                    <input className="AddTestimonial-name" placeholder="name" onChange={(event) => {
                        setName(event.target.value);
                    }} />
                    <input className="AddTestimonial-message" placeholder="message" onChange={(event) => {
                        setMessage(event.target.value);
                    }} />
                </form>
                <button className="AddTestimonial-submit-button" type="submit" onClick={submitTestimonial}>Submit</button>
            </div>
        </>
    )
}

export default AddTestimonial;