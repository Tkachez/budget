const SHOW_HEALTH = 'SHOW_HEALTH';
const SHOW_FOOD = 'SHOW_FOOD';
const SHOW_ENTERTAINMENT = 'SHOW_ENTERTAINMENT';
const SHOW_BILLS = 'SHOW_BILLS';
const SHOW_ALCOHOL = 'SHOW_ALCOHOL';

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
    case SHOW_HEALTH: {
      return {
        ...state,
        health: action.data
      };
    }
    case SHOW_FOOD: {
      return {
        ...state,
        food: action.data
      };
    }
    case SHOW_ENTERTAINMENT: {
      return {
        ...state,
        entertainment: action.data
      };
    }
    case SHOW_BILLS: {
      return {
        ...state,
        bills: action.data
      };
    }
    case SHOW_ALCOHOL: {
      return {
        ...state,
        alcohol: action.data
      };
    }
    default: {
      return state;
    }
  }
};

export const showHealthCountActionCreator = (data) => {
  return (
    {
      type: SHOW_HEALTH,
      data: data
    }
  );
};

export const showFoodCountActionCreator = (data) => {
  return (
    {
      type: SHOW_FOOD,
      data: data
    }
  );
};

export const showEntertainmentCountActionCreator = (data) => {
  return (
    {
      type: SHOW_ENTERTAINMENT,
      data: data
    }
  );
};

export const showBillsCountActionCreator = (data) => {
  return (
    {
      type: SHOW_BILLS,
      data: data
    }
  );
};

export const showAlcoholCountActionCreator = (data) => {
  return (
    {
      type: SHOW_ALCOHOL,
      data: data
    }
  );
};

export default statisticsReducer;