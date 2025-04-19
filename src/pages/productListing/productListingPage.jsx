import React, { useState } from 'react';
import ProductCard from '../../components/productCard/productCard';
import { useGetStoreData } from '../../utils/services/useGetStoreData';

import Header from '../../components/header/header';

import "./productListingPage.css";

import { GLOBAL_CONSTANTS, HEADER_CONSTANTS } from '../../utils/constants/globalConstants';
import { delayHandler } from '../../utils/handlers/delayHandler';

const ProductListingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { data, isLoading, error } = useGetStoreData();

    const delayMessage = delayHandler(isLoading, error);

    if (delayMessage) {
        return delayMessage;
    }
    const { products, categories } = data;
    const filteredProducts = selectedCategory === GLOBAL_CONSTANTS.ALL
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="product-listing-page">
            <Header
                headerTitle={HEADER_CONSTANTS.TITLE}
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;
