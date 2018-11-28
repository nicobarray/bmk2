import React from 'react'
import styled from 'styled-components'

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const BookmarkCard = styled(Card)`
  width: 200px;
  padding: 8px 16px;
  margin: 8px;

  :hover {
    transform: rotate(1deg) scale(1.1);
    cursor: pointer;
  }
`

export default function(props) {
  const { name, url } = props
  function navigate() {
    window.open(url || 'https://dashthis.com/404?', '_blank')
  }

  return (
    <BookmarkCard onClick={navigate}>
      <Typography variant="h6" gutterBottom>
        {name || 'No name'}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {url || 'No link'}
      </Typography>
    </BookmarkCard>
  )
}
