import React from 'react';
import {connect} from 'react-redux';

import {handleGuessing} from './actions';

export class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(handleGuessing(value));
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};
const mapStateToProps = state => ({
    guessCount: state.guesses.length,
    fewestGuesses: state.fewestGuesses,
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(GuessForm);
