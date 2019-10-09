let storage = {
  subscribe (observer) {
    this.renderEntireTree = observer;
  },
  renderEntireTree () {
    console.log('render method');
  },
  getContent () {
    return this._content;
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
            value: 'bills',
            action (event) {
              let form = storage._content.home.form;
              form.items.map(item => {
                if (item.id === event.target.id) {
                  item.value = event.target.value;
                  return true;
                }
                return false;
              });
              storage.renderEntireTree(storage.getContent());
            }
          },
          {
            id: 'cost',
            origin: 'input',
            type: 'number',
            name: 'purchase-value',
            label: 'Purchase value',
            value: '',
            action: (event) => {
              let form = storage._content.home.form;
              form.items.map(item => {
                if (item.id === event.target.id) {
                  item.value = event.target.value;
                  return true;
                }
                return false;
              });
              storage.renderEntireTree(storage.getContent());
            }
          },
          {
            id: 'comment',
            origin: 'input',
            type: 'text',
            name: 'purchase-comment',
            label: 'Your comment (optional)',
            value: '',
            action (event) {
              let form = storage._content.home.form;
              form.items.map(item => {
                if (item.id === event.target.id) {
                  item.value = event.target.value;
                  return true;
                }
                return false;
              });
              storage.renderEntireTree(storage.getContent());
            }
          },
          {
            id: 'submit',
            origin: 'input',
            type: 'submit',
            value: 'Submit',
            name: 'purchase-submit',
            label: 'Confirm purchase'
          }
        ],
        action: (event) => {
          event.preventDefault();
          let form = storage._content.home.form,
            submitData = [];
          form.items.map(item => {
            if(item.id === 'submit'){
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
          storage.renderEntireTree(storage.getContent());
        }
      }
    }
  }
};

window.state = storage.getContent();
export default storage;