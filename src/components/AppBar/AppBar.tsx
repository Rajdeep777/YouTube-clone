import SearchBar from "../SearchBar/SearchBar";
const AppBar = () => {
  return (
    <>
      <div className="flex justify-between p-3">
        <div className="text-md inline-flex items-center">YouTube</div>
        <div>
          <SearchBar />
        </div>
        <div>Sign In</div>
      </div>
    </>
  );
};
export default AppBar;
