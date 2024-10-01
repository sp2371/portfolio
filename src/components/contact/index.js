import './index.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders';
import AnimatedLetters from '../../AnimatedLetters';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const navigate = useNavigate();
    const refForm = useRef();
    const serviceId = "service_ec5kbb4";
    const templateId = "template_r06jj0a";
    const publicKey = "uoZz6rRYRGGSOUYhf";
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
    }, [])
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
            .then(
                () => {
                    alert('Message sent successfully');
                    navigate('/');
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            )
    }
    return (
        <>

            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className='info-map'>
                    Swayamprakash Busam
                    <br />
                    India
                    <br />
                    chandanagar
                    <br />
                    Hyderabad
                    <br />
                    <span>swayamprakashbusam87@gmail.com</span>


                </div>
                <div className='map-wrap'>
                    <MapContainer center={[17.489932, 78.335901]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[17.489932, 78.335901]}>
                            <Popup>Swayamprakash lives here, come over for a cup of coffee :) </Popup>
                        </Marker>


                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
};
export default Contact;