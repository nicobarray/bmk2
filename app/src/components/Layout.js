import React, { useState, useEffect } from 'react'
import useWindowSize from '@rehooks/window-size'

import styled, { keyframes, css } from 'styled-components'

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const FadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

const Layout = styled.div`
  height: 100vh;
  position: relative;
`

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;

  animation: ${props =>
    props.hasLoad
      ? css`
          ${FadeIn} 1s ease-in;
          opacity: 1;
        `
      : css`
          ${FadeOut} 1s ease-out;
          opacity: 0;
        `};
`

const Content = styled.div`
  padding: 8px;
`

export default function(props) {
  const { innerWidth, innerHeight } = useWindowSize()
  const [hasLoad, setHasLoad] = useState(false)

  function handleResize() {
    setHasLoad(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <Layout>
      <Background
        hasLoad={hasLoad}
        src={`https://source.unsplash.com/random/${innerWidth}x${innerHeight}`}
        alt={'floating-background'}
        onLoad={() => {
          setHasLoad(true)
        }}
      />
      <Content>{props.children}</Content>
    </Layout>
  )
}
