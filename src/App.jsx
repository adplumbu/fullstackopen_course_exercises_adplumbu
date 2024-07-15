//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

//Header component - takes care of rendering the name of the course
const Header = (props) => {
  return <h1>{props.courseName}</h1>
}

const Part = (props) => {
  return (
    <>
      <p>
          {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}



const App = () => {
  const courseName = 'Half Stack application development'
  const p1 = "Fundamentals of React"
  const ex1 = 20
  const p2 = "Using props to pass"
  const ex2 = 7
  const p3 = "State of a component"
  const ex3 = 21

  return (
    <div>
      <Header courseName={courseName}/>
      <Content part1={p1} exercises1={ex1} part2={p2} exercises2={ex2} part3={p3} exercises3={ex3}/>
      <Total exercises1={ex1} exercises2={ex2} exercises3={ex3}/>
    </div>
  )
}

export default App
