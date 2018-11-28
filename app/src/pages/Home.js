import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Bookmark from '../components/Bookmark'

const Home = styled.div`
  padding: 8px;

  display: flex;
  flex-flow: row wrap;
`

const bookmarksQuery = gql`
  query Bookmarks($data: TokenInput!) {
    bookmarks(data: $data) {
      id
      link {
        id
        url
        name
      }
    }
  }
`

export default function(props) {
  return (
    <Home>
      <Query query={bookmarksQuery} variables={{ data: { token: '' } }}>
        {({ data, loading, error }) => {
          if (loading) {
            return 'Loading...'
          }

          if (error) {
            console.log('page/Home', error)
            return 'Error...'
          }

          console.log(data)

          if (!data) {
            return null
          }

          return (
            <>
              {data.bookmarks.map(bkmk => {
                if (bkmk.link) {
                  return <Bookmark key={`link-${bkmk.id}-${bkmk.link.id}`} {...bkmk.link} />
                } else {
                  return <div key={`unimplemented-type-${bkmk.id}`}>{'Unimplemented'}</div>
                }
              })}
            </>
          )
        }}
      </Query>
    </Home>
  )
}
