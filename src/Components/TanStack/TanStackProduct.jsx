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
    // staleTime: 10000,
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
          <div className="bg-slate-800 rounded-2xl">
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

            <div className="mt-6">
              <button className="text-white rounded-lg px-5 py-2.5 flex items-center justify-center bg-slate-700">
                Shop Now
              </button>
            </div>

            <hr className="my-6 md:my-8 border-slate-800 dark:border-slate-800" />

            <p className="text-slate-500 mb-7">{product?.description}</p>

            <p className="text-slate-500 mb-7">{product?.description}</p>

            <p className="text-slate-500 mb-7">{product?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TanStackProduct;
