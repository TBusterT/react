const PosterPreview = ({ posterPath, title }: { posterPath: string; title: string }) => {
    const imageUrl = posterPath
        ? `https://image.tmdb.org/t/p/w500/${posterPath}`
        : '/no-image-available.png'; // Вказати шлях до заглушки для відсутніх постерів.

    return <img src={imageUrl} alt={title} className="poster-preview" />;
};

export default PosterPreview;
