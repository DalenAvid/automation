import React from 'react';
import './Promo.scss'

const Promo = () => {
    return (
        <>
            <section className='promo'>
                <div className="wrap">
                    <div className='promo__bg'>
                        <div className='promo__text'>
                            <h1>New Automation
                                Tool for Your Home</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
                            <button>See Our Project</button>
                        </div>
                        <div className='promo__img'>
                            <img src="./images/illustration.png" alt="promo" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Promo;
