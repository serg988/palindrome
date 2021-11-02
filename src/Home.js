import React, { useState } from 'react'
import classes from './Home.module.css'

const Home = () => {
  const [inputWord, setInputWord] = useState('')
  const [success, setSuccess] = useState(false)
  const [wrong, setWrong] = useState(false)
  const submitHandler = () => {
    setSuccess(false)
    setWrong(false)
    if (inputWord.length < 3) {
      return
    }
    const reversedString = inputWord
      .toLowerCase()
      .replace(/\s+/g, '')
      .split('')
      .reverse()
      .join('')
    if (inputWord.toLowerCase().replace(/\s+/g, '') === reversedString) {
      setSuccess(true)
      return
    }
    setWrong(true)
    setTimeout(() => {
      setWrong(false)
    }, 3000)
  }

  const reset = () => {
    setInputWord('')
    setSuccess(false)
    setWrong(false)
  }

  const successClass = `${classes.message} ${success ? classes.success : ''}`

  return (
    <div className={classes.main}>
      <p className={classes.title}>Check if a palindrome</p>
      <input
        className={classes.input}
        type='text'
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
      />
      <button
        onClick={!success ? submitHandler : reset}
        type='submit'
        className={classes.btn}
      >
        {success ? 'Try another?' : 'Submit'}
      </button>
      <p className={successClass}>Success!</p>
      {wrong && (
        <p className={classes.wrong}>"{inputWord}" is not a palindrome </p>
      )}
    </div>
  )
}

export default Home
