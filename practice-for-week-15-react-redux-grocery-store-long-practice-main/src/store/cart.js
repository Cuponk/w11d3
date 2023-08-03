
const ADD_ITEM = 'ADD_ITEM';

export default function cartReducer(state = {}, action) {
  const nextState = { ...state };
  switch (action.type) {
    case ADD_ITEM:
        if (nextState[action.payload.id]){
            nextState[action.payload.count]++
        } else {
            const newObj = {
              ...action.payload,
              newKey: { property: "1" },
            };
          nextState[action.payload.id] = newObj;
        }
      return nextState
    default:
      return state;
  }
}

export const addItem = (id) =>({
  type: ADD_ITEM, payload: id
})