import React from 'react'

export default function About() {
  return (
    <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
      {/* <img src="/" className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">Информация</h5>
        <p className="card-text">версия приложения <strong>1.0.0</strong></p>
        {/* <a href="#a" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  )
}
