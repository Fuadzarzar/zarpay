import { useState } from 'react'
import { Calculator } from './components/Calculator'
import { Header } from './components/Header'
import { TransactionInformation } from './components/TransactionInformation'
import './global.css'

export default function App() {

  return (

<div className="flex flex-col gap-8">
  <Header />
  <TransactionInformation />
  <Calculator />
</div>

  )
}

