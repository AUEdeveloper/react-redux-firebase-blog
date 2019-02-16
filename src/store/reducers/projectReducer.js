const initState = {
  projects: [
    {id: '1', title: 'first title', content: 'blah blah blah'},
    {id: '2', title: 'second title', content: 'blah blah blah'},
    {id: '3', title: 'third title', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Created new project!', action.project);
  }
  return state;
}

export default projectReducer;