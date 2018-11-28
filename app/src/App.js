import React, { useState } from 'react'

import styled from 'styled-components'

const Layout = styled.div`
  height: 100vh;
`

function App() {
  const [foo, useFoo] = useState(0)

  return (
    <Layout>
      <div onClick={() => useFoo(foo + 1)}>{foo}</div>
    </Layout>
  )
}

export default App
