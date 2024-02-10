import './AddTestimonial.css';

import { useState, useEffect } from 'react';

function Testimonials(props) {
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
                    <label>
                        <input placeholder="name" onChange={(event) => {
                            setName(event.target.value);
                        }} />
                    </label>
                    <label>
                        <input placeholder="message" onChange={(event) => {
                            setMessage(event.target.value);
                        }} />
                    </label>
                </form>
                <button className="AddTestimonial-submit-button" type="submit" onClick={submitTestimonial}>Submit</button>
            </div>
        </>
    )
}

export default Testimonials;