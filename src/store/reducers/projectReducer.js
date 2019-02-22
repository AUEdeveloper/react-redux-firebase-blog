/*const initState = {
  projects: [
    {id: '1', title: 'first title', content: 'blah blah blah'},
    {id: '2', title: 'second title', content: 'blah blah blah'},
    {id: '3', title: 'third title', content: 'blah blah blah'}
  ]
}*/

const initState = {
  imageURL: ''
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Created new project!', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('Create project error', action.error);
      return state;
    case 'ADD_IMAGE'://fffffffffffffffffffffffff
      console.log('Added image on URL: ', action.url);
      return {
        ...state,
        imageURL: action.url
      }
    case 'ADD_IMAGE_ERROR'://fffffffffffffffffffffffffffff
      console.log('Add image error', action.error);
      return state;
    default:
      return state;
  }
}

export default projectReducer;