const SUBMIT_FORM = 'SUBMIT-FORM';
const CHANGE_INPUT = 'CHANGE-INPUT';

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
    case SUBMIT_FORM:
      let submitData = [];
      state.form.items.map(item => {
        submitData.push(item.value);
        if(item.id === 'submit' || item.id === 'option') {
          return false;
        } else {
          return item.value = '';
        }
      });
      //todo: add fom submission logic;
      console.log(submitData);
      return state;
    case CHANGE_INPUT:
      state.form.items.map(item => {
        if (item.id === action.id) {
          return item.value = action.value;
        }
        return false;
      });
      return state;
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

export const inputsChangeActionCreator = (id, value) => {
  return (
    {
      id: id,
      type: CHANGE_INPUT,
      value: value
    }
  );
};

export default homeFormReducer;