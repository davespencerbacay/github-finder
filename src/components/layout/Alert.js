import React, { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"

const Alert = () => {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2  mt-10">
        {alert.type === "error" && (
          <div className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle" /> {alert.msg}
          </div>
        )}
      </p>
    )
  )
}

export default Alert
