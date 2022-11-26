import React from 'react'

// homepage with input form
const NewWarning = () => {
  return (
    <div>
      <h1>Add a new warning</h1>
      <form action="/add-warning" enctype="multipart/form-data" method="post">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Add a title" name="name" />
          <input type="text" className="form-control" placeholder="Add a description" name="description" />
          <input type="file" className="form-control-file" name="image" />
          <input type="submit" value="Get me the stats!" className="btn btn-default" />
        </div>
      </form>
    </div>
  )
};

export default NewWarning
