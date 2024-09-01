import React from 'react'

const PaginationArea = ({ pageNumber, paginate, currentPage, next, prev }) => {
    return (
        <nav className='py-4' aria-label="Page navigation example">
            <ul className="flex items-center justify-center space-x-2 text-sm">
                {/* Previous Button */}
                <li>
                    <button
                        onClick={prev}
                        disabled={currentPage === 1}
                        className={`flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <span className="sr-only">Previous</span>
                        &lt;
                    </button>
                </li>

                {/* Page Number Buttons */}
                {pageNumber.map((item, i) => (
                    <li key={i}>
                        <button
                            onClick={() => paginate(item)}
                            className={`flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium transition duration-300 ease-in-out ${currentPage === i + 1 ? 'bg-[#FB2E86] text-white' : 'bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'} ${currentPage === i + 1 ? 'shadow-md' : ''}`}
                        >
                            {item + 1}
                        </button>
                    </li>
                ))}

                {/* Next Button */}
                <li>
                    <button
                        onClick={next}
                        disabled={currentPage === pageNumber.length}
                        className={`flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition duration-300 ease-in-out ${currentPage === pageNumber.length ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <span className="sr-only">Next</span>
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default PaginationArea
