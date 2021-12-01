import React from 'react'

const Social = ({ nav }) => {
  const link = nav ? 'social-nav' : 'social'
  return (
    <div className="m-3">
      <a href="https://github.com/kyoto430" className={link + ' m-1'}>
        <i className="bi bi-github"></i>
      </a>
      <a href="https://t.me/Kyoto430" className={link + ' m-1'}>
        <i className="bi bi-telegram"></i>
      </a>
    </div>
  )
}

export default Social
