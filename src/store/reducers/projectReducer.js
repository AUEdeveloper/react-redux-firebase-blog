const initState = {
  projects: [
    {id: '1', title: 'first title', content: 'blah blah blah'},
    {id: '2', title: 'secondt title', content: 'blah blah blah'},
    {id: '3', title: 'third title', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;