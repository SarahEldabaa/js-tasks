import React, { useCallback, useState } from "react";
import axios from "axios";
const AddPrd = () => {
  let [Prd, setPrd] = useState({
    title: "",
    description: "",
    stock: 0,
    thumbnail: "https://source.unsplash.com/random",
  });
  let HandleChange = useCallback((e) => {
    console.log(e);
    const { name, value } = e.target;
    setPrd((old) => ({
      ...old,
      [name]: value,
    }));
  });
  let AddPrd = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2000/products", Prd)
      .then((res) => {
        console.log(res.data);
        setPrd(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div class="container w-50"> 
      <h1 className="text-start my-3 text-danger">Add New Product</h1>
      <hr />
      <form action="" onSubmit={AddPrd}>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
            name="title"
            value={Prd.title}
            onChange={HandleChange}
          />
          <label for="title">Product title</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="description"
            placeholder="Description"
            name="description"
            value={Prd.description}
            onChange={HandleChange}
          />
          <label for="description">Product description</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="stock"
            placeholder="Stock"
            name="stock"
            value={Prd.stock}
            onChange={HandleChange}
          />
          <label for="stock">Product stock</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="thumbnail"
            placeholder="Thumbnail"
            name="thumbnail"
            value={Prd.thumbnail}
            onChange={HandleChange}
          />
          <label for="thumbnail">Product thumbnail</label>
        </div>
        <button className="btn btn-outline-info w-100 p-1 my-1 btn-sm">Submit</button>
      </form>
    </div>
  );
};

export default AddPrd;