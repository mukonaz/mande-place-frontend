import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export { store };
