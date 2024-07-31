import React from "react";
import { getRandomQuote } from "./Redux/actions";
import { connect } from "react-redux";

const QuoteGenerator = ({ getRandomQuote, quote }) => {
    return (
        <div>
            <h3 id="text">{quote.text}</h3>
            <p id="author">{quote.author}</p>
            <button id="new-quote" onClick={getRandomQuote} >New Quote</button>
            <a id="tweet-quote" href="twitter.com/intent/tweet" target='_blank'>twitter icon</a>
        </div>
    )
};

const mapStateToProps = (state) => ({
    quote: state.currentQuote
});

const mapDispatchToProps = {
    getRandomQuote
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteGenerator);