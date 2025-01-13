import React from 'react'
import './Contact.scss'
import Form from './Form/Form'

const Contact = () => {
  return (
    <>
      <section className='contact'>
        <div className="wrap">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </section>
      <Form />

      <section>
        <div className="wrap">
          <div className="map">
            <img  src="./images/map.png" alt="map" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
