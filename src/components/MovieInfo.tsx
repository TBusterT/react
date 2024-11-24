const MovieInfo = ({ label, description }: { label: string; description: string }) => {
    return (
        <div className="movie-info">
            <strong>{label}: </strong>
            <span>{description}</span>
        </div>
    );
};

export default MovieInfo;
