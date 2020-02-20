const ON_PAGE_LOADED = 'ON_PAGE_LOADED';
const SET_HEALTH = 'SET_HEALTH';
const SET_FOOD = 'SET_FOOD';
const SET_BILLS = 'SET_BILLS';
const SET_ENTERTAINMENT = 'SET_ENTERTAINMENT';
const SET_ALCOHOL = 'SET_ALCOHOL';

let initialState  = {
  isLoading: true,
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
    case ON_PAGE_LOADED: {
      return {
        ...state,
        isLoading: false
      }
    }
    case SET_HEALTH: {
      return {
        ...state,
        health: {
          ...state.health,
          value: action.health
        }
      };
    }
    case SET_FOOD: {
      return {
        ...state,
        food: {
          ...state.food,
          value: action.food
        }
      };
    }
    case SET_BILLS: {
      return {
        ...state,
        bills: {
          ...state.bills,
          value: action.bills
        }
      };
    }
    case SET_ENTERTAINMENT: {
      return {
        ...state,
        entertainment: {
          ...state.entertainment,
          value: action.entertainment
        }
      };
    }
    case SET_ALCOHOL: {
      return {
        ...state,
        alcohol: {
          ...state.alcohol,
          value: action.alcohol
        }
      };
    }
    default: {
      return state;
    }
  }
};

export const onPageLoadedActionCreator = () => {
  return (
    {
      type: ON_PAGE_LOADED
    }
  );
};

export const setHealthActionCreator = (health) => {
  return (
      {
        type: SET_HEALTH,
        health
      }
  );
};

export const setFoodActionCreator = (food) => {
  return (
      {
        type: SET_FOOD,
        food
      }
  );
};

export const setBillsActionCreator = (bills) => {
  return (
      {
        type: SET_BILLS,
        bills
      }
  );
};

export const setEntertainmentActionCreator = (entertainment) => {
  return (
      {
        type: SET_ENTERTAINMENT,
        entertainment
      }
  );
};

export const setAlcoholActionCreator = (alcohol) => {
  return (
      {
        type: SET_ALCOHOL,
        alcohol
      }
  );
};



export default statisticsReducer;