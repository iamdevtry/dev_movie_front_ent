const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '9cc294ead579f40fe8b6815c182d9469',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
