import React from "react"

const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-3 bg-gray-700 text-primary-content footer-center">
      <p className="text-sm">
        Copyright &copy; {footerYear} All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
