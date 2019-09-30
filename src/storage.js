let storage = {
  searchHistory: [],
  main: {
    content: {
      home:{
        label: 'home',
        form: {
          formIds: {
            select: 'select',
            value: 'value',
            comment: 'comment',
            button: 'submit',
          },
          formLabels:{
            select: 'Select purchase type',
            value: 'Enter purchase value',
            comment: 'Enter your comment (optional)',
            button: 'Submit',
          },
          formNames: {
            select: 'purchase-type',
            value: 'purchase-value',
            comment: 'purchase-comment',
            button: 'purchase-submit',
          },
          options: [
            { name: 'Bills' , value: 'bills'},
            { name: 'Health', value: 'health'},
            { name: 'Food', value: 'food'},
            { name: 'Entertainment', value: 'entertainment'},
            { name: 'Alcohol', value: 'alcohol'},
          ],
        },
      },
    },
  },
};

export default storage;