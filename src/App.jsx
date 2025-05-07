import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())
  const [is24Hour, setIs24Hour] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (date) => {
    if (is24Hour) {
      return date.toLocaleTimeString('en-US', { hour12: false })
    } else {
      return date.toLocaleTimeString('en-US', { hour12: true })
    }
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short', // Short form for weekdays
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="app">
      <h1>Digital Clock</h1>
      <div className="clock">
        <p>{formatDate(time)}</p>
        <p>{formatTime(time)}</p>
      </div>
      <button onClick={() => setIs24Hour(!is24Hour)}>
        Toggle to {is24Hour ? '12-hour' : '24-hour'} format
      </button>
    </div>
  )
}

export default App
