import SearchBar from "../SearchBar/SearchBar"

const AppBar = () => {
    return (
        <>
            <div className="flex justify-between">
                <div>
                    YouTube
                </div>
                <div>
                    <SearchBar/>
                </div>
                <div>
                    Sign In
                </div>
            </div>
        </>
  )
}

export default AppBar