const INITIAL_STATE = {
  lojas: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case 'SETLOJAS':
      return {
        ...state,
        lojas: action.lojas,
      };
    default:
      return state;
  }
}
