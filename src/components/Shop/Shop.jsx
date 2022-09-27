import { React, useEffect, useState } from 'react';
import './Shop.css'
import Product from './../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        console.log('hello', product)
        const newCart = [...cart, product]
        setCart(newCart)
    }



    return (
        <section id='shopSection'>
            <div className="productsContainer">
                {
                    products.map(product => {
                        return (
                            <section className='producSection'>
                                <Product addToCart={addToCart} product={product} key={product.id}></Product>
                            </section>
                        )
                    })
                }
            </div>
            <div className="cartContainer">
                <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
                <div className="cartDetails">
                    <h4>Selected Items : {cart.length}</h4>
                </div>
            </div>
        </section>
    );
};

export default Shop;