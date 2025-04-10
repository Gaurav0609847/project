import React, { useState } from 'react';
import './Content.css';

function Content() {
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');

    const handleAgeCheck = () => {
        if (age > 18) {
            setMessage('Welcome to our site');
        } else {
            setMessage('Sorry, you must be older than 18');
        }
    };

    return (
        <div className='full'>
            <div className='left'>
                <img src='' id='one' alt='Profile' />
            </div>
            <div className='right'>
                <p>Hello Everyone, my name is Ram Bhatt.</p>
            </div>
            <div className='fine'>
                <input type='number' placeholder='Enter your age' value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button onClick={handleAgeCheck}>Submit</button>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Content;