import "./Rating.css";

const Rating = ({ value = 0 }) => {
    return (
        <div className="rating-stars">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                let className = "star";

                if (value >= starValue) {
                    className += " filled";
                } else if (value >= starValue - 0.5) {
                    className += " half";
                }

                return <span key={index} className={className}>★</span>;
            })}
            <span className="rate">{value}</span>
        </div>
    );
};

export default Rating;
