import React, { useState } from 'react'
import axios from 'axios'

function VerifyOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')

  const handleChange = (e, index) => {
    const { value } = e.target
    if (isNaN(parseInt(value))) return

    setOtp([...otp.map((d, idx) => (idx === index ? value : d))])
    setError('')

    // Focus next input
    if (e.target.nextSibling && value !== '') {
      e.target.nextSibling.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const enteredOTP = otp.join('')

    try {
      const response = await axios.post('http://localhost:9000/api/v1/users/verify-otp', {
        otp: enteredOTP,
      })

      if (response.status === 200) {
        alert('OTP Verified Successfully') // Replace with actual navigation logic
      } else {
        setError(response.data.message || 'Incorrect OTP. Please try again.')
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to verify OTP. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-600 to-white text-white font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 border border-red-600 rounded-lg">
        <div className="space-y-1 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Verify Your Email</h1>
          <p className="text-gray-400">We've sent a 6-digit code to your email address</p>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex justify-center items-center space-x-2">
                <span className="text-lg text-gray-300">Enter 6-digit code</span>
              </div>
              <div className="flex justify-between">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                    className="w-12 h-12 text-center text-2xl bg-gray-800 border border-red-600 text-white focus:border-red-400 focus:ring-red-400"
                  />
                ))}
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <button 
                type="submit" 
                className="w-full bg-red-600 text-white font-bold py-3 px-8 text-lg hover:bg-red-700 transition-colors duration-300 mt-4"
              >
                Verify Email
              </button>
            </div>
          </form>
        </div>
        <div className="p-6 text-center text-gray-400">
          Didn't receive the code?{' '}
          <button className="text-red-600 hover:text-red-400">Resend</button>
        </div>
      </div>
    </div>
  )
}

export default VerifyOTP