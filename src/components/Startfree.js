import React from 'react'
function Startfree() {
    return (
        <div>
            <h2>Start your free 14-day trial of Shopify</h2>
            <form>
                    <input type="text" id="formforemail" name="email" placeholder="Email address" />
                    <input type="text" id="password" name="pass" placeholder="Password" />
                    <input type="text" id="store" name="name" placeholder="Your store name" />
            </form>  
            <p>This is the URL that customers will use to visit your store. You can also buy a custom domain like mystore.com and connect it to this store.</p>      
        </div>
    )
}

export default Startfree
