import './Testimonials.css';

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

        const result = await fetch("http://localhost:8080/", requestOptions)

        const resultinJSON = await result.json();
        console.log(resultinJSON)
    }

    return (
        <>
            <div className="AddTestimonial-container">
                <form>
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
            </div>
        </>
    )
}

export default Testimonials;