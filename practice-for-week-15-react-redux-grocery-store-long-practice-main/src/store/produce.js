import produceData from '../mockData/produce.json'


export default function produceReducer(state = {}, action) {
    const nextState = { ...state }
    switch (action.type) {
        case POPULATE:
            return Object.assign(nextState, action.payload)
      default:
        return state;
    }
  }


  const POPULATE = 'POPULATE';

  export const populateProduce = () =>({
    type: POPULATE, payload: produceData
  })