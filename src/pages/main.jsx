import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../components/UI/button/myButton'

const Main = () => {
  return (
    <>
      <header className="container-box header">
        <h1 className="header-text">
          Hi, nice to meet you.
          <br />I am a Junior Front-End Developer from Belarus.
          <br /> Currently studying React to create awesome things.
        </h1>
        <p className="bg-dark w-75 p-2 m-4 text-center text-uppercase">
          Ruslan Prakapets
        </p>
        <Link to="/projects">
          <MyButton>See Projects</MyButton>
        </Link>
        <i
          className="bi bi-hand-index-thumb mt-1"
          style={{ fontSize: '30px' }}
        />
      </header>
    </>
  )
}

export default Main
