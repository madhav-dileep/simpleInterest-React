import { useState } from 'react'
import './App.css'
import { Button, Stack, TextField } from '@mui/material'

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [invalidPriciple,setInvalidPrinciple] = useState(false)
  const [invalidRate,setInvalidRate] = useState(false)
  const [invalidYear,setInvalidYear] = useState(false)

  const validateInput = (userInput) => {
    const { name, value } = userInput;
        // Principle
    if(name == "principle"){
      setPrinciple(value)
      if(value.match(/^(\d*\.?\d+)$/) != null){
        setInvalidPrinciple(false)
      }
      else{
        setInvalidPrinciple(true)
      }

    }
        // Rate 
    else if(name == "rate"){ 
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidRate(false)
      }
      else{
        setInvalidRate(true)
      }
    }
        // Year
    else if(name == "year"){
      setYear(value)
      if(!!value.match(/^\d*$/)){
        setInvalidYear(false)
      }
      else{
        setInvalidYear(true)
      }
    }

    else{
      alert("Error!!!")
    }
  }

  const calcInterest = (e) => {
    e.preventDefault()
    if(principle && rate && year){
      setInterest((principle*rate*year)/100)
    }else{
      alert("Please fill the form completely!")
    }
  }

  const handleReset = () => {
    // e.preventDefault()
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }

  return (
    <>
      <div style={{ width: "100%", minHeight: "100dvh" }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest Easily !</p>
          <div className='bg-warning p-5 rounded-5 text-center'>
            <h1>₹ {interest}</h1>
            <p className='fw-bold'> Total Simple Interest </p>
          </div>
          <form className='form mt-5 mb-3'>
            <div className='mb-4'>
              <TextField value={principle || ""} name='principle' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-principle" label="Principle ₹" variant="outlined" color='dark' />
            </div>
            {/* Invalid Prompt */}
            {invalidPriciple && <div className='fw-bold text-danger'>
              *Invalid Principle Amount
            </div>}

            <div className='my-4'>
              <TextField value={rate || ""} name='rate' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-rate" label="Rate %" variant="outlined" color='dark' />
            </div>
            {/* Invalid Prompt */}
            {invalidRate && <div className='fw-bold text-danger'>
              *Invalid Rate Amount
            </div>}

            <div className='my-4'>
              <TextField value={year || ""} name='year' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-year" label="Time Period(Yr)" variant="outlined" color='dark' />
            </div>
            {/* Invalid Prompt */}
            {invalidYear && <div className='fw-bold text-danger mb-4'>
              *Invalid Year
            </div>}

            <Stack direction="row" spacing={2}>
              <Button type='submit' variant='contained' style={{ width: "50%", height: "70px" }} className='bg-dark' disabled = {invalidPriciple || invalidRate || invalidYear} onClick={calcInterest}>Calculate</Button>

              <Button variant='outlined' style={{ width: "50%", height: "70px" }} color='dark' onClick={handleReset}>Reset</Button>
            </Stack>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
