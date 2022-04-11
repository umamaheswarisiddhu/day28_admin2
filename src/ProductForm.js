import React from "react";

function ProductForm() {
  // create product detail form
  return (
    
    <form>
      <h1 className="text-center">Create Product Details</h1>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Name :
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Price :
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputPassword3" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Catogory :
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputPassword3" />
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
