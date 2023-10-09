import React from 'react';

const Components = () => {
  return (
    <div className='box'>
    <div className="container">
    <div className='img'>
      <picture>
        <source
          media="(min-width: 640px)"
          srcset="image-product-desktop.jpg"
        />
        <img src="image-product-mobile.jpg" alt="" />
      </picture>
    </div>
    <div>
    <h2>perfume</h2>

    <h1>Gabrielle Essence Eau De Parfum</h1>

    <p>
      A floral, solar and voluptuous interpretation composed by Olivier
      Polge, Perfumer-Creator for the House of CHANEL.
    </p>

    <ul>
      <li class="price">$149.99</li>
      <li><s>$169.99</s></li>
    </ul>

    <button class="btn">
      <img src="./images/icon-cart.svg" alt="" /> Add to Cart
    </button>
  </div>
  </div>
  </div>
  )
}

export default Components