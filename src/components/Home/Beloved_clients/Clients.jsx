import React from 'react'
import './Clients.scss'

const Clients = () => {
    return (
        <>
            <section className='beloved_clients'>
                <div className="wrap">
                    <div class="client-title">
                        <h2>Our Beloved
                            Client</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div class="client-table">
                        <table>
                            <tr>
                                <td><a href="#">LOGO CLIENT 1</a></td>
                                <td><a href="#">LOGO CLIENT 2</a></td>
                                <td><a href="#">LOGO CLIENT 3</a></td>
                                <td><a href="#">LOGO CLIENT 4</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">LOGO CLIENT 5</a></td>
                                <td><a href="#">LOGO CLIENT 6</a></td>
                                <td><a href="#">LOGO CLIENT 7</a></td>
                                <td><a href="#">More Client</a></td>
                            </tr>

                        </table>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Clients
