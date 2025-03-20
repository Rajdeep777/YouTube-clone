const SearchBar = () => {
  return (
    <>
      <div className="w2/4">
        <form>
          <div className="flex">
          <div className="sm:w-sm md:w-lg lg:w-xl xl:w-2xl flex border border-[#303030] rounded-full rounded-r rounded pl-5 text-md focus-within:border-[#1C62B9]">
            <input
              id="default-search"
              className="w-full border-none outline-none"
              placeholder="Search"
              required
            />
          </div>
            <button className="bg-[#222222] text-white py-2 px-5 cursor-pointer rounded-l rounded-full inline-flex items-center border-r border-t border-b border-[#303030]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SearchBar;
