const changeInput = 'CHANGE-INPUT';
const submitForm = 'SUBMIT-FORM';

let storage = {
  subscribe (observer) {
    this._renderEntireTree = observer;
  },
  dispatch (action) {
    if (action.type === changeInput) {
      let form = this._content.home.form;
      form.items.map(item => {
        if (item.id === action.id) {
          item.value = action.value;
          return true;
        }
        return false;
      });
      console.log(this.getContent());
      this._renderEntireTree(this.getContent());
    } else if (action.type === submitForm) {
      let form = this._content.home.form,
        submitData = [];
      form.items.map(item => {
        if (item.id === 'submit') {
          return false;
        } else {
          let element = {
            id: item.id,
            value: item.value
          };
          submitData.push(element);
          item.id === 'option' ? item.value = 'bills' : item.value = '';
          return true;
        }

      });
      this._renderEntireTree(this.getContent());
    }
  },
  getContent () {
    return this._content;
  },
  _renderEntireTree () {
    console.log('render method');
  },
  _content: {
    home: {
      label: 'home',
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
    }
  }
};

export const inputChangeActionCreator = (id, value) => {
  return (
    {
      id: id,
      type: changeInput,
      value: value
    }
  );
};

export const submitFormActionCreator = () => {
  return (
    {
      type: submitForm
    }
  );
};


export default storage;