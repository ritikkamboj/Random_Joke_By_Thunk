export const FETCH_JOKE_REQUEST = "FETCH_JOKE_REQUEST";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_ERROR = "FETCH_JOKE_ERROR";



const fetchJoke = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_JOKE_REQUEST })
        try {

            const res = await fetch(`https://official-joke-api.appspot.com/random_joke`);
            const data = await res.json();
            const joke = data.setup + " " + data.punchline
            dispatch({ type: FETCH_JOKE_SUCCESS, payload: joke })

        } catch (error) {
            dispatch({ type: FETCH_JOKE_ERROR, payload: error })

        }
    }
}

export default fetchJoke;