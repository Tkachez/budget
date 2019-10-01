let storage = {
  searchHistory: [],
  main: {
    content: {
      home: {
        label: 'home',
        form: {
          items: [
            {
              id: 'select',
              origin: 'select',
              type: 'select',
              name: 'purchase-type',
              label: 'Purchase type',
              options: [
                { name: 'Bills', value: 'bills' },
                { name: 'Health', value: 'health' },
                { name: 'Food', value: 'food' },
                { name: 'Entertainment', value: 'entertainment' },
                { name: 'Alcohol', value: 'alcohol' }
              ]
            },
            {
              id: 'cost',
              origin: 'input',
              type: 'number',
              name: 'purchase-value',
              label: 'Purchase value'
            },
            {
              id: 'comment',
              origin: 'input',
              type: 'text',
              name: 'purchase-comment',
              label: 'Your comment (optional)'
            },
            {
              id: 'submit',
              origin: 'input',
              type: 'submit',
              name: 'purchase-submit',
              label: 'Confirm purchase'
            }
          ]
        }
      }
    }
  }
};

export default storage;