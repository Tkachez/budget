import {renderEntireTree} from './render';

let storage = {
  searchHistory: [],
  main: {
    content: {
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
              action: (event) => {
                let form = storage.main.content.home.form;
                form.items.map(item => {
                  if(item.id === event.target.id){
                    item.value = event.target.value;
                    return true;
                  }
                  return false;
                });
                form.submitData.option = event.target.value;
                renderEntireTree(storage);
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
                let form = storage.main.content.home.form;
                form.items.map(item => {
                  if(item.id === event.target.id){
                    item.value = event.target.value;
                    return true;
                  }
                  return false;
                });
                form.submitData.cost = event.target.value;
                renderEntireTree(storage);
              }
            },
            {
              id: 'comment',
              origin: 'input',
              type: 'text',
              name: 'purchase-comment',
              label: 'Your comment (optional)',
              value: '',
              action: (event) => {
                let form = storage.main.content.home.form;
                form.items.map(item => {
                  if(item.id === event.target.id){
                    item.value = event.target.value;
                    return true;
                  }
                  return false;
                });
                form.submitData.comment = event.target.value;
                renderEntireTree(storage);
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
          submitData: {
            option: 'bills',
            cost: '',
            comment: ''
          },
          action: (event) => {
            event.preventDefault();
            let form = storage.main.content.home.form;
            console.log(form.items);
            form.items.map( item => {
              if(item.id === 'submit' || item.id === 'option' ){
                return false;
              } else {
                item.value = '';
                return true;
              }
            });
            renderEntireTree(storage);
          }
        }
      }
    }
  }
};

export default storage;