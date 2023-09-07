import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const isButtonDisabled = formData.name.length === 0 || formData.email.length === 0 || formData.message.length === 0;

    const { name, email, message } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const handleFormSubmit = () => {
        if (formData.name.length === 0 || formData.email.length === 0 || formData.message.length === 0) {

            console.log("data is empty");
        }
    };



    return (
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="">Submit the form below to get in touch with me</p>
                </div>

                <div className=" flex justify-center items-center">
                    <form action="https://getform.io/f/21edf317-33aa-44bb-b19f-91ea37cc4229" method="POST" className=" flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" value={name} onChange={handleChange} className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <input type="email" name="email" placeholder="Enter your Email" value={email} onChange={handleChange} className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            value={message}
                            onChange={handleChange}
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>

                        <button onClick={handleFormSubmit} className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                            disabled={isButtonDisabled}
                        >
                            Let's talk
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
