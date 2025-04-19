import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import Rating from '../rating/rating';
import { GLOBAL_CONSTANTS } from '../../utils/constants/globalConstants';

const ProductCard = ({ product }) => {
    const { id, image, title, price, rating } = product;

    return (
        <Link to={`/product/${id}`} >
            <div className="product-card">
                <div className="product-img">
                    <img src={image} alt={title} />
                </div>

                <div className="product-details">
                    <p className="title">{title}</p>
                    <div className="price-section">
                        <span className="price">₹{price}</span>
                        <span className="count">{`${rating.count} ${GLOBAL_CONSTANTS.REVIEWS}`} </span>
                    </div>
                    <Rating value={rating.rate} />
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;