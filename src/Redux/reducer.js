import { GET_RANDOM_QUOTE } from "./actions";

const quotes = [
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde"},
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "That it will never come again is what makes life so sweet.", author: "Emily Dickinson"},
    { text: "It is never too late to be what you might have been.", author: "George Eliot" }
  ];

  const defaultState = {
    currentQuote: quotes[Math.floor(Math.random() * quotes.length)]
  };

const quotesReducer = (state = defaultState, action) => {

    switch(action.type) {
        case GET_RANDOM_QUOTE:
            const randomIndex = Math.floor(Math.random() * quotes.length);
            return {
                ...state, 
                currentQuote: quotes[randomIndex]
            }

        default:
            return state;
    }
};

export default quotesReducer;