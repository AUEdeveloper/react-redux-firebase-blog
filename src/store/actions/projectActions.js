export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Yan',
      authorLastName: 'Bryansky',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_PROJECT', project});
    }).catch((error) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', error})
    })
  }
};