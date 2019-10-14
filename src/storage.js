const changeInput = 'CHANGE-INPUT';
const submitForm = 'SUBMIT-FORM';

let storage = {

  /**
   *
   * @param observer
   */
  subscribe (observer) {
    this._renderEntireTree = observer;
  },

  /**
   *
   * @param action
   */
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
      this._renderEntireTree(this.getContent());
    } else if (action.type === submitForm) {
      let form = this._content.home.form,
        submitData = [];
      form.items.map(item => {
          let validate = this._validateForm(item);
          return validate ? submitData.push(item) : this._showValidationError(item);
      });
      this._clearForm();
      this._renderEntireTree(this.getContent());
    }
  },

  /**
   *
   * @return {storage._content|{home}}
   */
  getContent () {
    return this._content;
  },

  /**
   *
   * @private
   */
  _renderEntireTree () {
    console.log('render method');
  },

  /**
   *
   * @private
   */
  _clearForm () {
    let items = this._content.home.form.items;
    items.map(item => {
      if(item.id === 'submit'){
        return false;
      }
      return item.id === 'option' ? item.value = 'bills' : item.value = '';
    });
  },

  /**
   *
   * @param item
   * @return {boolean}
   * @private
   */
  _validateForm(item) {
     return item.value !== '' || item.id === 'comment';
  },

  /**
   *
   * @param item
   * @private
   */
  _showValidationError (item) {
    alert(`${item.id} can not be empty`);
  },

  /**
   *
   */
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