import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../components/UI/button/myButton'

const Main = () => {
  return (
    <>
      <header className="header">
        <h1 className="header-text font-monospace w-75">
          Привет, приятно познакомиться. Я junior front-end developer из
          Беларуси. В настоящее время изучаю React, чтобы создавать потрясающие
          вещи.
        </h1>
        <div className="bg-black text-light w-75 p-1 mb-3 text-italic">
          <em>Руслан Прокопец</em>
        </div>
        <Link to="/projects">
          <MyButton>Посмотреть проекты </MyButton>
        </Link>
      </header>
    </>
  )
}

export default Main
