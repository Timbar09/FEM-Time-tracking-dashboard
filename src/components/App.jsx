import { useState } from 'react'
import Header from './Header'
import CardList from './CardList'
import cardData from '../../data.json'
import '../assets/styles/App.scss'

function App() {
  const [dataType, setDataType] = useState('daily')

  return (
    <main className='app'>
      <Header setDataType={setDataType} />
      <CardList cardData={cardData} dataType={dataType} />
    </main>
  )
}

export default App
