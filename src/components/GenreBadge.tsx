const GenreBadge = ({ genres }: { genres: { id: number; name: string }[] }) => {
    return (
        <div className="genre-badge">
            {genres.map((genre) => (
                <span key={genre.id} className="badge">
          {genre.name}
        </span>
            ))}
        </div>
    );
};

export default GenreBadge;
