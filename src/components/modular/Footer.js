
import React, { useState } from "react";
import "./Footer.css"


const About = () => {

    const [sendMessage, setSendMessage] = useState(false);
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    return <footer className="footer">


        <p>

            <a href={() => false} style={{ cursor: "pointer", marginRight: "10px" }} className="footer__link" onClick={() => setSendMessage(!sendMessage)}>
                <span className="iconify icon:carbon:email" ></span> 
                
            </a>

            <a href="https://github.com/Madalin-Antonoiu"  target="_blank" rel="noreferrer"  style={{ cursor: "pointer" }} className="footer__link" >
                <span class="iconify" data-icon="akar-icons:github-fill" data-inline="false"></span>
            </a>
        </p>



        {
            sendMessage === true ?
                <div className="form-control ">
                    <form
                        id="contact-form"
                        method="post"
                        action="https://forms.un-static.com/forms/56c61763070ff294ba6cb6d3de4b6f8dcf3ac287">

                        <input
                            label="Full Name"
                            name="fullname"
                            onChange={event => setFullName(event.target.value)}
                            value={fullname}
                            type="text"
                            id="fname"
                            placeholder="Name"
                        />

                        <input
                            name="email"
                            id="email"
                            label="E-Mail"
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            placeholder="Email Adress" />

                        <textarea
                            name="message"
                            id="description"
                            label="Description"
                            value={message}
                            onChange={event => setMessage(event.target.value)}
                            type="textarea"
                            placeholder="Message"
                            rows="5" />

                        <button className="btn" type="submit" value="Submit" >Send</button>

                    </form>
                </div>
                : ""
        }





    </footer >
}

export default About





