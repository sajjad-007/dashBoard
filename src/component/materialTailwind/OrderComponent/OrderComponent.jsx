import React from "react";
import { Link } from "react-router-dom";

const OrderComponent = () => {
  return (
    <section className="bg-white antialiased dark:bg-gray-900 ">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/*Order header part */}
        <div className="gap-4 sm:flex sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            My orders
          </h2>
          <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
            <div>
              <label
                for="order-type"
                className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Select order type
              </label>
              <select
                id="order-type"
                className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                <option selected>All orders</option>
                <option value="pre-order">Pre-order</option>
                <option value="transit">In transit</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <span className="inline-block text-gray-500 dark:text-gray-400">
              {" "}
              from{" "}
            </span>

            <div>
              <label
                for="duration"
                className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Select duration
              </label>
              <select
                id="duration"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                <option selected>this week</option>
                <option value="this month">this month</option>
                <option value="last 3 months">the last 3 months</option>
                <option value="lats 6 months">the last 6 months</option>
                <option value="this year">this year</option>
              </select>
            </div>
          </div>
        </div>
        {/*Order header part */}

        {/* table boady part */}
        <div className="mt-6 flow-root sm:mt-8 ">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {/* new flowbite */}
            <div className=" space-y-4 overflow-y-scroll h-[600px] w-full ">
              {/* Headers */}
              <div className="flex flex-wrap items-center gap-y-4 sticky top-0 z-10 ">
                {["Order ID", "Date", "Price", "Status", "Actions"].map(
                  (header, idx) => (
                    <div
                      key={idx}
                      className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1"
                    >
                      <p className="text-base font-medium text-gray-700 dark:text-gray-300 bg-blue-gray-50 rounded py-2 pl-1 ">
                        {header}
                      </p>
                    </div>
                  )
                )}
              </div>
              {/* Values Start */}
              {[...Array(12)].map((_, index) => (
                <div className="flex flex-wrap items-center justify-center gap-y-4 ">
                  {/* Order ID */}
                  <div className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <a
                      href="#"
                      className="text-base px font-semibold text-gray-900 hover:underline dark:text-white"
                    >
                      #FWB127364372
                    </a>
                  </div>

                  {/* Date */}
                  <div className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <p className="text-base pl-2   font-semibold text-gray-900 dark:text-white">
                      20.12.2023
                    </p>
                  </div>

                  {/* Price */}
                  <div className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <p className="text-base pl-3 font-semibold text-gray-900 dark:text-white text-left bg-white">
                      $48,574
                    </p>
                  </div>

                  {/* Status */}
                  <div className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <span className="pl-4 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300 ">
                      <svg
                        className="me-1 h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Pre-order
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="w-full sm:grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                    <button
                      type="button"
                      className="w-full rounded-lg border border-red-700 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white"
                    >
                      Cancel order
                    </button>
                    <Link
                      to={`/order/${"sdfsd"}`}
                      className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* new flowbite */}
          </div>
        </div>
        {/* table boady part */}
      </div>
    </section>
  );
};

export default OrderComponent;
