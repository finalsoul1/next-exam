import React from 'react'
import { useRouter } from 'next/router'

const ImageUploadViewer = () => {
  const {
    query: { type },
  } = useRouter()

  return (
    <div>
      테스트
      <div>
        {type === 'up' && <div>업</div>}
        {type === 'down' && <div>이미지 다운로드</div>}
      </div>
    </div>
  )
}

export default ImageUploadViewer
