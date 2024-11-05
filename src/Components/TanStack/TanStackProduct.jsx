import Loader from "/svg/loader.svg";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function TanStackProduct() {
  const params = useParams();

  let fetchProduct = async () => {
    let response = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    let data = await response.json();
    return data;
  };

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", params.product],
    queryFn: fetchProduct,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading ? (
        <img className="inline-block" src={Loader} height={34} width={34} />
      ) : error ? (
        <div className="my-6 text-red-600">{error.message}</div>
      ) : (
        ""
      )}

      <div className="container m-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="bg-gray-800 rounded-2xl">
            <img className="w-full" src={product?.images} alt="" />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0 text-left">
            <h1 className="text-xl font-semibold sm:text-2xl dark:text-white">
              {product?.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold sm:text-3xl text-yellow-400">
                {product?.price}
              </p>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href="#"
                title=""
                className="text-white mt-4 sm:mt-0 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center bg-gray-700"
                role="button"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </a>
            </div>

            <hr className="my-6 md:my-8 border-gray-800 dark:border-gray-800" />

            <p className="text-gray-500 mb-7">
              {product?.description}
            </p>
            
            <p className="text-gray-500 mb-7">
              {product?.description}
            </p>
            
            <p className="text-gray-500 mb-7">
              {product?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TanStackProduct;
