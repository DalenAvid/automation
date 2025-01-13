import React from 'react'
import './Services.scss'

const Services = () => {
    return (
        <>
            <section >
                <div className="wrap">
                    <div class="services">
                        <h2>What we do to help our client grow in digital era,</h2>
                        <div class="service-cards">
                            <div class="card">
                                <img src="./images/image1.png" alt="Service 1" />
                                <h3>Make Your Business To Be Better Famous In Internet</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#">Learn more &#8594;</a>
                            </div>
                            <div class="card">
                                <img src="./images/image2.png" alt="Service 2" />
                                <h3>Bring Technology To Your Comfortable Home</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#">Learn more &#8594;</a>
                            </div>
                            <div class="card">
                                <img src="./images/image3.png" alt="Service 3" />
                                <h3>Build Your Digital Product That Suitable For Your Need</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#">Learn more &#8594;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
