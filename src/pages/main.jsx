import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../components/UI/button/myButton'

const Main = () => {
  return (
    <>
      <header className="container-box header">
        <div className="header-text">
          <p>Привет, приятно познакомиться!</p>
          <p>Я Junior Front-End Developer из Беларуси.</p>
          <p>Сейчас изучаю React, чтобы создавать потрясающие вещи.</p>
        </div>
        <Link to="/projects">
          <MyButton>Мои проекты</MyButton>
        </Link>
      </header>
    </>
  )
}

export default Main
