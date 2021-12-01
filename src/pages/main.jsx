import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../components/UI/button/myButton'

const Main = () => {
  return (
    <>
      <header className="container-box header">
        <h1 className="header-text">
          Привет, приятно познакомиться.
          <br />Я junior front-end developer из Беларуси.
          <br /> В настоящее время изучаю React, чтобы создавать потрясающие
          вещи.
        </h1>
        <p className="bg-dark w-75 p-2 m-4 text-center text-uppercase">
          Руслан Прокопец
        </p>
        <Link to="/projects">
          <MyButton>Проекты</MyButton>
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
