export const SET_NEW_GAME = 'SET_NEW_GAME';
export const startNewGame = () => ({
  type: SET_NEW_GAME,
  correctAnswer: Math.round(Math.random() *100)
});

export const HANDLE_GUESSING = 'HANDLE_GUESSING';
export const handleGuessing = (guess) => ({
  type: HANDLE_GUESSING,
  guess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});
