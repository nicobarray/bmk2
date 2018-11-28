import React, { useState } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from './components/Layout'
import Hello from './components/Hello'

const userQuery = gql`
  query MeQuery($password: String!) {
    me(password: $password) {
      name
    }
  }
`

function App() {
  const [foo, useFoo] = useState(0)

  return (
    <Query query={userQuery} variables={{ password: 'toto' }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) {
          console.log(error)
          return <p>Error :(</p>
        }

        return (
          <Layout>
            <Hello name={data.me.name} />
            <div onClick={() => useFoo(foo + 1)}>{foo}</div>
          </Layout>
        )
      }}
    </Query>
  )
}

export default App
