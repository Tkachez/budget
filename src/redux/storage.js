import homeFormReducer from './home-form-reducer';

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

    this._content.home.form = homeFormReducer(this._content.home.form, action);

    this._renderEntireTree(this._content);
  },

  /**
   *
   * @return {storage._content|{home}}
   */
  getState () {
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

export default storage;