export const formatDescription = (desc) => {
    const parts = desc.split(/(?<=\w)\.(?=\s|$)|,(?=\s|$)/);

    return parts.map((part, index) => {
        const trimmedPart = part.trim();

        if (trimmedPart.includes(':')) {
            const [key, value] = trimmedPart.split(':').map(item => item.trim());
            return (
                <div key={index} className="description-item">
                    <strong>{key}:</strong> <span>{value}</span>
                </div>
            );
        }

        return <div key={index}>{trimmedPart}</div>;
    });
};