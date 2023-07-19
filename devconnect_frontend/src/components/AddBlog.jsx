import React from 'react'

const AddBlog = () => {
  return (
    <div>AddBlog
     <form>

      <label htmlFor="title">Title</label>
      <input type="text"  />

      <label htmlFor="description">Description</label>
      <input type="text" />

      <label htmlFor="image">Image</label>
      <input type="file" />

      <label htmlFor="user">User</label>
      <input type="text" />

      <label htmlFor="createat">CreatedAt</label>
      <input type="number" />
      </form> 
    </div>

  

  
  )
}

export default AddBlog
