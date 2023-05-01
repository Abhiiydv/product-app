import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Product = () => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [productPrice, setProductPricce] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const productData = {
      productName,
      brandName,
      productPrice,
    };

    console.log(productData);

    // Perform validation
    const errors = {};
    if (productName.trim() === "") {
      errors.productName = "Product Name is required";
    }
    if (brandName.trim() === "") {
      errors.brandName = "Brand Name is required";
    }
    if (productPrice.trim() === "") {
      errors.productPrice = "Product Price is required";
    } else if (isNaN(productPrice)) {
      errors.productPrice = "Product Price must be a number";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const productData = {
        productName,
        brandName,
        productPrice,
      };

     

      // Make a POST request to the backend API to submit the product data
      axios
        .post("http://localhost:8081/api/products/create", productData)
        .then((response) => {
          console.log(response.data); // Handle the response from the backend API
          swal({
            text: "Product created with ID :" + response.data.productId,
            icon: "success",
            button: "OK",
          });
        })
        .catch((error) => {
          console.log(error); // Handle the error from the backend API
          
          swal({
            text: "Something went wrong.",
            icon: "error",
            button: "Close",
          });
        });
    }
  };

  return (
    <>
      <div
        className="container-fluid"
       
      >
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 my-5">
                <div className="card p-3">
                  <div className="card-title text-center my-3"><h3>Product Entry</h3></div>
                  <div className="card-body p-5" >
                  
                    <form onSubmit={handleSubmit}>
                    {/* <div className="form-floating mb-3">
                        <input
                          type="number" disabled
                          value={productId}
                          onChange={(event) =>
                            setProductId(event.target.value)
                          }
                          className="form-control"
                          id="floatingInput"
                        
                        />
                        <label
                          htmlFor="productId"
                         
                        >
                          Product Id
                        </label>
                        {errors.productId && (
                          <span className="error">{errors.productId}</span>
                        )}
                      </div> */}
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          value={productName}
                          onChange={(event) =>
                            setProductName(event.target.value)
                          }
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="productName" >
                          Product Name
                        </label>
                        {errors.productName && (
                          <span className="error">{errors.productName}</span>
                        )}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          value={brandName}
                          onChange={(event) => setBrandName(event.target.value)}
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="brandName" >
                          Brand Name
                        </label>
                        {errors.brandName && (
                          <span className="error">{errors.brandName}</span>
                        )}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          value={productPrice}
                          onChange={(event) =>
                            setProductPricce(event.target.value)
                          }
                          className="form-control"
                          id="floatingInput"
                        
                        />
                        <label
                          htmlFor="productPrice"
                          
                        >
                          Product Price
                        </label>
                        {errors.productPrice && (
                          <span className="error">{errors.productPrice}</span>
                        )}
                      </div>

                      <div className="d-flex mb-3 my-5 justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
         
        </div>
     
    </>
  );
};

export default Product;
