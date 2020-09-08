import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const GnbDiv = styled.div`
  height: 100%;
  background-color: antiquewhite;
`

const GnbViewer = () => {
  return (
    <GnbDiv>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/imageUpload/[type]" as="/imageUpload/up">
            <a>이미지 업로드</a>
          </Link>
        </li>
        <li>
          <Link href="/imageUpload/[type]" as="/imageUpload/down">
            <a>이미지 다운</a>
          </Link>
        </li>
      </ul>
    </GnbDiv>
  )
}

export default GnbViewer
