import React, { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"

const SearchUsers = () => {
  const [text, setText] = useState("")

  const { users, searchUsers, clearUsers } = useContext(GithubContext)
  const changeHandler = (e) => {
    setText(e.target.value)
  }

  const formHandler = (e) => {
    e.preventDefault()
    if (text === "") {
      alert("Field are required.")
    } else {
      searchUsers(text)
      setText("")
    }
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 mb-0 gap-8">
      <div>
        <form onSubmit={formHandler}>
          <div className="form-control">
            <div className="relative">
              <input
                class="w-full pr-40 bg-gray-200 input input-lg text-black"
                type="text"
                placeholder="Search"
                value={text}
                onChange={changeHandler}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                GO!
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="text-center">
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}

      <div></div>
    </div>
  )
}

export default SearchUsers
