export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      title: project.title,//ffffffffffffff ...project
      content: project.content,//ffffffff
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
      filename: project.imageName,//fffffffffffffffff
      imageURL: project.imageURL //fffffffffffffffffffffffff
    }).then(() => {
      dispatch({type: 'CREATE_PROJECT', project});
    }).catch((error) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', error})
    })
  }
};

export const addImage = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();//ffffffffffffffffffff
    firebase
      .storage()
      .ref("images")
      .child(project.imageName)
      .getDownloadURL()
      .then(url => {
        dispatch({type: 'ADD_IMAGE', url});
      }).catch(error => {
        dispatch({type: 'ADD_IMAGE_ERROR', error});
      })
  }
}