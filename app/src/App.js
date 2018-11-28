import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default App
