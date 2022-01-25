import React from 'react'
import './Comone.css';
import { Link } from 'react-router-dom';
function Comone() {
    return (
        <div className="hi">
            <div className="text">
                <h1>
                    Anyone, anywhere can start an ecommerce website
                </h1>
                <form>
                    <input type="text" id="formforemail" name="email" placeholder="Enter your email address" />
                </form>
                <Link to="/Startfree"><button type="button">Try for Free</button></Link>

                <p>
                    Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.
                </p>

            </div>
            <img alt="online shop with shopify" src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero/in-hero-product-small-0c64c4c1013fc8ac477cb5ff62bf5b56b2903aec697e6b708b90d3b65a09baf8.jpg"
            />
        </div>
    )
}

export default Comone
