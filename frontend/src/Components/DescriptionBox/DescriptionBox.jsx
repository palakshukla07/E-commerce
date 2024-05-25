import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
           <p>An ecommerce website is an online platform that facilitates the buying and selling of goods and services over the internet. These websites provide a virtual storefront where businesses can display their products or services, and customers can browse, select, and purchase items using various payment methods. </p> 
           <p>
           These platforms have revolutionized retail by providing convenient, 24/7 access to a vast array of products and services, often with competitive pricing and diverse delivery options.
           </p>
        </div>
    </div>
  )
}

export default DescriptionBox