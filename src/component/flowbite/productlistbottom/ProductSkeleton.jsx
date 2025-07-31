import React from 'react';

const ProductSkeleton = () => {
  return (
    <div>
      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <div className="bg-white rounded shadow p-4">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-600 uppercase">
                <th className="p-2">Image</th>
                <th className="p-2">Product Name</th>
                <th className="p-2">Category</th>
                <th className="p-2">Subcategory</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Price</th>
                <th className="p-2">Description</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(8)].map((_, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 text-sm">
                  <td className="p-2">
                    <div className="w-10 h-10 bg-gray-200 rounded" />
                  </td>
                  <td className="p-2">Product {i + 1}</td>
                  <td className="p-2 text-gray-500">--</td>
                  <td className="p-2 text-gray-500">--</td>
                  <td className="p-2">--</td>
                  <td className="p-2">--</td>
                  <td className="p-2 truncate max-w-xs">
                    This is a description...
                  </td>
                  <td className="p-2">
                    <button className="bg-green-500 text-white px-2 py-1 rounded mr-1 text-sm">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                      Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end items-center mt-4 gap-2 text-sm">
            <button className="bg-gray-300 text-black px-3 py-1 rounded">
              Prev
            </button>
            <span>Page 1 of 4</span>
            <button className="bg-black text-white px-3 py-1 rounded">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductSkeleton;
