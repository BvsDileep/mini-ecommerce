import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../../utils/services/useGetProductById';
import { FaStar } from 'react-icons/fa';
import './ProductDetailPage.css';
import { formatDescription } from '../../utils/handlers/formatDescription';
import { renderStars } from '../../utils/handlers/renderStars';
import { GLOBAL_CONSTANTS } from '../../utils/constants/globalConstants';
import { delayHandler } from '../../utils/handlers/delayHandler';

const ProductDetailPage = () => {
    const { id } = useParams();  // Get the product ID from the URL
    const { data, isLoading, error } = useGetProductById(id);
    const [showFullDescription, setShowFullDescription] = useState(false); // State to toggle full description

    const delayMessage = delayHandler(isLoading, error);

    if (delayMessage) {
        return delayMessage;
    }
    const { title, price, description, image, rating, category } = data;

    // Handle long description toggle
    const handleDescriptionToggle = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                {/* Product Image */}
                <div className="image-wrapper">
                    <img
                        src={image}
                        alt={title}
                        className="product-detail-image"
                    />
                </div>

                {/* Product Details */}
                <div className="product-detail-info">
                    <h1 className="product-detail-title">{title}</h1>
                    <p className="product-detail-price">${price.toFixed(2)}</p>

                    {/* Rating */}
                    <div className="product-detail-rating">
                        {renderStars(rating.rate)}
                        <span> ({`${rating.count} ${GLOBAL_CONSTANTS.REVIEWS}`})</span>
                    </div>

                    {/* Product Category */}
                    <div className="product-detail-category">
                        <span className="category-tag">{category}</span>
                    </div>

                    {/* Product Description with Read More toggle */}
                    <div className="product-detail-description">
                        {showFullDescription ? formatDescription(description) : `${description.substring(0, 200)}...`}
                        <button className="read-more-toggle" onClick={handleDescriptionToggle}>
                            {showFullDescription ? GLOBAL_CONSTANTS.SHOW_LESS : GLOBAL_CONSTANTS.READ_MORE}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;