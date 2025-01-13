import React from 'react'
import './Form.scss'

const Form = () => {
    return (
        <>
            <section>
                <div className="wrap">
                    <div className="form-body">
                        <div className="contactUs">
                            <div>
                                <img src="./images/Group.png" alt="Form" />
                            </div>
                            <div>
                                <h3>ADDRESS</h3>
                                <p>
                                    Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.
                                </p>
                                <h3>PHONE</h3>
                                <ul>
                                    <li><a href="#">+62-812-7313-4321</a></li>
                                    <li><a href="#">+62-817-000-1234</a></li>
                                </ul>
                                <h3>ONLINE SERVICE</h3>
                                <ul>
                                    <li><a href="#">www.afrianska.com</a></li>
                                    <li><a href="#">hello.afrian@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-container">
                            <form action="">
                                <h3>SEND US MESSAGE</h3>
                                <label htmlFor="name">Full Name
                                    <input type="text" name="name" id="name" placeholder="Your Name" /></label>
                                <label htmlFor="email">Email
                                    <input type="email" name="email" id="email" placeholder="Your Email" /></label>
                                <label htmlFor="message">Message
                                    <textarea type="text" name="message" id="message" placeholder="Your Message" /></label>
                                <button type="submit">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form
