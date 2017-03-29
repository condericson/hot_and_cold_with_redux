import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export function Game(props) {
        return (
            <div>
                <Header />
                <GuessSection />
                <GuessCount />
                <GuessList />
            </div>
        );
    }


export default connect()(Game);
