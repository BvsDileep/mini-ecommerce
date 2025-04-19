import React from 'react';
import './loadingError.styles.css';
import { GLOBAL_CONSTANTS } from '../../utils/constants/globalConstants';

const LoadingError = ({ isLoading, error }) => {
    if (isLoading) {
        return (
            <div className="loading">
                <div className="loading-spinner"></div>
                <p>{`${GLOBAL_CONSTANTS.LOADING}...`}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <p>{error.message || GLOBAL_CONSTANTS.ERROR_FETCH_MESSAGE}</p>
            </div>
        );
    }

    return <></>;
};

export default LoadingError;