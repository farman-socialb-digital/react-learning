import React, { useEffect, useState } from "react";
import loader from "/svg/loader.svg";
import { Link } from "react-router-dom";

function TanStack() {
  let [products, setProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);

  console.log(products)

  useEffect(() => {
    let fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        setProducts(data.products);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto mb-10 overflow-hidden rounded-xl">
      <p className="font-medium py-3 text-gray-300 bg-gray-800">
        Products Listing
      </p>
      <div
        className={`${
          isLoading
            ? ""
            : "mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {isLoading ? (
          error ? (
            <div className="my-6 text-red-600">
              Something went wrong with API Connect
            </div>
          ) : (
            <div>
              <img
                className="inline-block my-6"
                src={loader}
                height={34}
                width={34}
              />
            </div>
          )
        ) : (
          ""
        )}

        {products.map((product, i) => (
          <div key={i}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-800 lg:aspect-none group-hover:opacity-75 lg:h-80" onClick={()=>{
              console.log(product.title)
            }}>
              <Link to={`/tanstack/${product.id}`}>
                <img
                  alt={product.title}
                  src={product.thumbnail}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </Link>
            </div>
            <div className="mt-2 flex justify-between bg-gray-800 p-3 rounded-xl gap-5">
              <Link
                to={`/tanstack/${product.id}`}
                className="text-gray-400 truncate"
              >
                {product.title}
              </Link>
              <p className="text-green-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TanStack;