import React from "react"
import UserResults from "../components/users/UserResults"
import SearchUsers from "../components/users/SearchUsers"
const Home = () => {
  return (
    <div>
      <SearchUsers />
      <UserResults />
    </div>
  )
}

export default Home
