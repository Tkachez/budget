import * as axios from 'axios';
const SHOW_STATS = 'SHOW_STATS';

let initialState  = {
  health: {
    label: 'health',
    value: 0
  },
  food: {
    label: 'food',
    value: 0
  },
  bills: {
    label: 'bills',
    value: 0
  },
  entertainment: {
    label: 'entertainment',
    value: 0
  },
  alcohol: {
    label: 'alcohol',
    value: 0
  },
};

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STATS: {
      axios.get('http://localhost:5000/transactions/all/' + state.health.label)
          .then(res => {
            console.log(res.data)
          })
          .catch(err => console.log('Error: ' + err));
      return state;
    }
    default: {
      return state;
    }
  }
};

export const showStatisticsActionCreator = () => {
  return (
      {
        type: SHOW_STATS
      }
  );
};


export default statisticsReducer;