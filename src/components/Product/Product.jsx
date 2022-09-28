import React from 'react';
import './Product.css'
// import errorImg from '../../images/404notfound.jpg'

const Product = (props) => {
    const { name, category, seller, price, stock, ratings, ratingsCount, img, shipping } = props.product;
    const { addToCart } = props

    return (
        <article className='productCard'>
            <div className="cardImg">
                <img src={img}
                    alt="products" className='productImg' />
            </div>
            <div className="productDetails">
                <h3>{name}</h3>
                <h5>Price : {price}</h5>
                <h5>Manufacturer : {seller}</h5>
                <h5>Category : {category}</h5>
                <p><span style={{ marginRight: '5px' }}>Stock : {stock}</span> <span>Shipping Carg : {shipping} </span></p>
                <div className='productRating'>
                    <h5>Rating : <span style={{ color: 'rgb(238, 167, 13)' }}> {ratings}</span> </h5>
                    <h5>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </h5>
                </div>
                <p>Total Rating: {ratingsCount}</p>
            </div>
            <button className='addCardBtn' onClick={() => addToCart(props.product)}> <span><i className="fas fa-cart-plus" style={{ marginRight: '0.8rem' }}></i></span> Add To Card</button>
        </article>
    );
};

export default Product;