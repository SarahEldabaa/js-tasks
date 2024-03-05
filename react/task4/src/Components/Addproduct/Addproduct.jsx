import React, { useCallback, useState } from "react";
import axios from "axios";

const AddPrd = () => {
  const [prd, setPrd] = useState({
    title: "",
    description: "",
    stock: 0,
    thumbnail: "https://source.unsplash.com/random",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setPrd((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const addPrd = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2000/products", prd)
      .then((res) => {
        console.log(res.data);
        setPrd({
          title: "",
          description: "",
          stock: 0,
          thumbnail: "https://source.unsplash.com/random",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container w-50"> 
      <h1 className="text-start my-3 text-danger">Add New Product</h1>
      <hr />
      <form onSubmit={addPrd}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            name="title"
            value={prd.title}
            onChange={handleChange}
          />
          <label htmlFor="title">Product title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Description"
            name="description"
            value={prd.description}
            onChange={handleChange}
          />
          <label htmlFor="description">Product description</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="stock"
            placeholder="Stock"
            name="stock"
            value={prd.stock}
            onChange={handleChange}
          />
          <label htmlFor="stock">Product stock</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            placeholder="Thumbnail"
            name="thumbnail"
            value={prd.thumbnail}
            onChange={handleChange}
          />
          <label htmlFor="thumbnail">Product thumbnail</label>
        </div>
        <button className="btn btn-outline-info w-100 p-1 my-1 btn-sm" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPrd;
