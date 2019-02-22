import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject, addImage } from './../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import firebase from "firebase";//ffffffffffffffff
import FileUploader from "react-firebase-file-uploader";//ffffffffffffffffffffffff

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    imageName: '',
    isUploading: false,//ffffffff
    progress: 0,//ffffffffffffffff
    imageURL: ''//ffffffffffffffff
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({imageURL: this.refs.image1});

    console.log('imagURL ' + this.state.imageURL);

    this.props.createProject(this.state);
    this.props.history.push('/'); //redirect to homepage
  }

  handleUploadStart(){ 
    this.setState({ isUploading: true, progress: 0 });//ffffffffffffff
  }

  handleProgress(progress) {
    this.setState({ progress });//ffffffffffffffffffff
  }
  
  handleUploadError(error) {
    this.setState({ isUploading: false });//ffffffffffffffffff
    console.error(error);
  }

  handleUploadSuccess(imageName) {
    this.setState({ imageName: imageName, progress: 100, isUploading: false });
    this.props.addImage(this.state);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.imageURL !== nextProps.imageURL) {
      return {
        imageURL: nextProps.imageURL
      }
    }
    return null;
  }

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange.bind(this)}></textarea>
          </div>
            <label>Image:</label>
            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
            {this.props.imageURL && <img src={this.props.imageURL}  alt="img" />}
            <FileUploader
              accept="image/*"
              name="image"
              randomizeFilename
              storageRef={firebase.storage().ref("images")}
              onUploadStart={this.handleUploadStart.bind(this)}
              onUploadError={this.handleUploadError.bind(this)}
              onUploadSuccess={this.handleUploadSuccess.bind(this)}
              onProgress={this.handleProgress.bind(this)}
            />
          <div className="input-field">
            <button className="btn blue lightnen-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ', state.project.imageURL);
  const imageURL = state.project.imageURL ? state.project.imageURL : ''
  return {
    auth: state.firebase.auth,
    imageURL: imageURL
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    addImage: (project) => dispatch(addImage(project))//fffffffffffff
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
