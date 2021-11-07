const todoListsId_1 = '23ir-67nb'
const todoListsId_2 = '24ir-88nb'

const todoLists = [
  {
    id: todoListsId_1,
    title: 'What to learn',
    filter: 'all'
  },
  {
    id: todoListsId_2,
    title: 'What to buy',
    filter: 'all'
  },
];

const tasks = {
  [todoListsId_1]: [
    {id: 'qws2s3', title: 'JS', isDone: true},
    {id: 'qgh2s1', title: 'CSS', isDone: true},
    {id: 'qws343', title: 'React', isDone: true},
  ],
  [todoListsId_2]: [
    {id: 'avb31f', title: 'Meat', isDone: true},
    {id: 'am451f', title: 'Bread', isDone: false},
    {id: 'ash56k', title: 'Milk', isDone: true},
  ]
}