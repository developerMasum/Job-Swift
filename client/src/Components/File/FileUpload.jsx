import React from 'react';

const FileUpload = () => {
  return (
    <div className='container mx-auto'>
      <form>
       <fieldset className='border rounded-md'>
        <legend>Personal Details</legend>
       <label htmlFor="name">name</label>
        <input type="text" />
       </fieldset>
      </form>
    </div>
  );
};

export default FileUpload;