export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
    return async dispatch => {

        const result = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a1853de9a0284c99ad9376d54f101e8e');

        const resultData = await result.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload : resultData
        });
    }
}

export const toggleFavorites = url => {
    return {
        type: TOGGLE_FAVORITES,
        payload: url
    }
}