import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Button from '@material-ui/core/Button'

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

const newLinkMutation = gql`
  mutation NewLink($url: String!) {
    newLink(url: $url, name: $url) {
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
  const [newLink, setNewLink] = useState('')

  async function onPaste(event) {
    const text = await navigator.clipboard.readText()
    console.log(text)
    if (text && text.length > 0) {
      setNewLink(text)
    }
  }

  function validateAdd(mutation) {
    return async () => {
      try {
        await mutation(newLink)
        setNewLink('')
      } catch (err) {
        console.log('Mutation error: ', err)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('paste', onPaste)

    return () => {
      window.removeEventListener('paste', onPaste)
    }
  })

  return (
    <Home>
      {newLink && (
        <Mutation mutation={newLinkMutation} variables={{ url: newLink, name: newLink }}>
          {mutate => (
            <Button variant="contained" color="primary" onClick={validateAdd(mutate)}>
              Confirm
            </Button>
          )}
        </Mutation>
      )}
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
