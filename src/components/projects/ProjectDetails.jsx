import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id; //this is route default props
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dolores obcaecati magni deserunt eius eveniet sed, provident, eaque velit est sint repellat earum sapiente quae dolorum distinctio corrupti delectus architecto.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Yan Bryansky</div>
          <div>14 February, 10am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
