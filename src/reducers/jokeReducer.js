
import { FETCH_JOKE_ERROR, FETCH_JOKE_REQUEST, FETCH_JOKE_SUCCESS } from "../thunk"


const initialState = {
    loading: false,
    joke: "",
    error: ""
}

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_JOKE_REQUEST":
            return { ...state, loading: true, joke: "", error: "" }
        case "FETCH_JOKE_SUCCESS":
            return { ...state, loading: false, joke: action.payload, error: "" }
        case "FETCH_JOKE_ERROR":
            return { ...state, loading: false, joke: "", error: action.payload }
    }

}

export default jokeReducer;
