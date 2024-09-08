export default function RowsPerPageSelect({ rowsPerPage, setRowsPerPage }) {
    return (
        <div className="flex items-center">
            {/* Label for rows per page selection */}
            <label className="text-sm mr-2">Rows per page:</label>
            <div className="relative">
                {/* Dropdown to select number of rows per page */}
                <select
                    value={rowsPerPage}
                    onChange={(e) => setRowsPerPage(e.target.value)}
                    className="appearance-none w-full bg-white border border-gray-300 text-sm rounded-full px-4 py-2 focus:outline-none focus:border-gray-500"
                >
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                    <option value={15}>15</option>
                </select>
                {/* Icon for the dropdown arrow */}
                <img
                    src="/icons/rows-per-page.svg"
                    alt="Dropdown"
                    className="absolute top-2 right-2 w-4 h-4 pointer-events-none"
                />
            </div>
        </div>
    );
}
