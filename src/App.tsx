import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='h-screen w-screen border-3 border-red-500'>
    <MantineProvider>
      <Navbar />
    </MantineProvider>
    </div>
  )
}

export default App
