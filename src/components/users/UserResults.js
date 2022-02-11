import React, { useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"

const UserResults = () => {
  const { users, isLoading } = useContext(GithubContext)

  if (!isLoading) {
    return (
      <React.Fragment>
        {users.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid:cols-3 md:grid-cols-2 mt-7">
            {users.map((user) => {
              return <UserItem key={user.id} user={user} />
            })}
          </div>
        ) : (
          <p className="text-center">No data found.</p>
        )}
      </React.Fragment>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
