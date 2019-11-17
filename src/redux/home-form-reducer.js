import * as axios from 'axios';

const SUBMIT_FORM = 'SUBMIT-FORM';
const CHANGE_INPUT = 'CHANGE-INPUT';

/**
 *
 * @type {{form: {items: *[]}}}
 */
let initialState = {
  form: {
    items: [
      {
        id: 'option',
        origin: 'select',
        type: 'select',
        name: 'purchase-type',
        label: 'Purchase type',
        variants: [
          { name: 'Bills', value: 'bills' },
          { name: 'Health', value: 'health' },
          { name: 'Food', value: 'food' },
          { name: 'Entertainment', value: 'entertainment' },
          { name: 'Alcohol', value: 'alcohol' }
        ],
        value: 'bills'
      },
      {
        id: 'cost',
        origin: 'input',
        type: 'number',
        min: '0',
        name: 'purchase-value',
        label: 'Purchase value',
        value: ''
      },
      {
        id: 'comment',
        origin: 'input',
        type: 'text',
        name: 'purchase-comment',
        label: 'Your comment (optional)',
        value: ''
      },
      {
        id: 'submit',
        origin: 'input',
        type: 'submit',
        value: 'Submit',
        name: 'purchase-submit',
        label: 'Confirm purchase'
      }
    ]
  }
};

const homeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM: {
      let stateCopy = { ...state };
      let items = [...state.form.items];
      let submitData = {};
      items.map(item => {
        if (item.id !== 'submit') submitData[item.id] = item.value;
        if (item.id === 'submit' || item.id === 'option') {
          return false;
        } else {
          return item.value = '';
        }
      });
      axios.post('http://localhost:5000/transactions/add/', {
        "option": submitData.option,
        "value": submitData.cost,
        "comment": submitData.comment
      }).catch(err => console.log(err));
      return stateCopy;
    }
    case CHANGE_INPUT: {
      let stateCopy = { ...state };
      let items = [...state.form.items];
      items.map(item => {
        if (item.id === action.id) {
          return item.value = action.value;
        }
        return false;
      });
      return stateCopy;
    }
    default:
      return state;
  }
};

export const submitFormActionCreator = () => {
  return (
    {
      type: SUBMIT_FORM
    }
  );
};

export const inputsChangeActionCreator = (event) => {
  return (
    {
      id: event.target.id,
      type: CHANGE_INPUT,
      value: event.target.value
    }
  );
};

export default homeFormReducer;