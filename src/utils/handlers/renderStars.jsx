/**Substitute for our custom Rating component  */
import { FaStar } from 'react-icons/fa';

export const renderStars = (rating) => {

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <>
            {[...Array(fullStars)].map((_, idx) => (
                <FaStar key={`full-${idx}`} className="star full" />
            ))}
            {halfStar && <FaStar key="half" className="star half" />}
            {[...Array(emptyStars)].map((_, idx) => (
                <FaStar key={`empty-${idx}`} className="star empty" />
            ))}
        </>
    );
};