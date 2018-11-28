import React from 'react'
import styled from 'styled-components'

const Hello = styled.div`
  color: 'white';
`

export default function(props) {
  return <Hello>Hello {props.name || 'World'}</Hello>
}
