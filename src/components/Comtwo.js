import React from 'react'
import ex1 from '../images/ex1.jpg'
import ex2 from '../images/ex2.jpg'
import ex3 from '../images/ex3.jpg'
import ex4 from '../images/ex4.jpg'
import ex5 from '../images/ex5.jpg'
import './Comtwo.css';
function comtwo() {
    return (
        <div id='com'>
            <h2>Bring your business online
            </h2>
            <p>
                Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.
            </p>
            <div>
                Explore more examples
            </div>
            <div className='flex'>
                <img src={ex1} alt="ex1" />
                <img src={ex2} alt="ex2" />
                <img src={ex3} alt="ex3" />
                <img src={ex4} alt="ex4" />
                <img src={ex5} alt="ex5" />

            </div>
            <h2>
                Take the best path forward
            </h2>
            <div className='facility'>
                <h3>
                    Start an online business
                </h3>
                <p>
                    Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.
                </p>
            </div>
            <div className='facility'>
                <h3>
                    Move your business online
                </h3>
                <p>
                    Turn your retail store into an online store and keep serving customers without missing a beat.
                </p>
            </div>
            <div className='facility'>
                <h3>
                    Switch to Shopify
                </h3>
                <p>
                    Bring your business to Shopify, no matter which ecommerce platform you’re currently using.
                </p>
            </div>
            <div className='facility'>
                <h3>
                    Hire a Shopify expert
                </h3>
                <p>
                    Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.
                </p>
            </div>
        </div>
    )
}

export default comtwo
