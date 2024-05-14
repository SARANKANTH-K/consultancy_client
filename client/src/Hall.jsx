import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './assets/css/hall.css';
import book from './assets/img/book.png';

function Hall() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [place, setPlace] = useState('');
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [errors, setErrors] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/hall', { name, email, phone, place, eventName, date, time });
            console.log(response.data);
            if (response.status === 201) { 
                console.log("Booking created:", response.data);
                setSuccess(true);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setError(response.data.message || 'An unexpected error occurred');
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || 'An unexpected error occurred');
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="login-content"> 
        <img src={book} alt="img" className="log_img" />
        <div className="content">
        <div className="text">
          Hall Booking
        </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">HALL BOOKED</div>}
            <form onSubmit={handleSubmit}>
            <div className="field"> 
                    <input type="text" placeholder='Name' id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="field">
                    <input type="email" placeholder='Email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br />
                <div className="field">
                    <input type="tel" id="phone" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <br />  
                <div className="field">
                    <input type="text" placeholder='Place' className={errors.place && 'is-invalid'} id="place" value={place} onChange={(e) => setPlace(e.target.value)} />
                    {errors.place && <div className="invalid-feedback">{errors.place}</div>}
                </div>
                <br />
                <div className="field">
                    <input type="text" className={errors.eventName && 'is-invalid'} placeholder='Event Name' id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                    {errors.eventName && <div className="invalid-feedback">{errors.eventName}</div>}
                </div>
                <br />
                <div className="field">
                    <input type="date" id="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <br />
                <div className="field">
                    <input type="time" id="time" placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
                <div className="sign-up">
                Don't want to continue? <Link to="/login">Logout</Link> 
                </div>
            </form>
        </div>
        </div>
    );
}

export default Hall;
