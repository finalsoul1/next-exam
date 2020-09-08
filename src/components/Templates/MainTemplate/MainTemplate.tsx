import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

type MainTemplate = {
  sideBar: ReactNode
  contents: ReactNode
}

const MainDiv = styled.div`
  display: flex;
`
const SideBar = styled.div`
  flex: 1;
`
const Contents = styled.div`
  flex: 4;
`

const MainTemplate = ({ sideBar, contents }: MainTemplate) => {
  return (
    <MainDiv>
      <SideBar>{sideBar}</SideBar>
      <Contents>{contents}</Contents>
    </MainDiv>
  )
}

export default MainTemplate
