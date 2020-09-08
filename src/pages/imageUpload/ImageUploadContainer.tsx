import React, { useEffect } from 'react'
import ImageUploadViewer from '~pages/imageUpload/ImageUploadViewer'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Api } from '../../server/api'

const fetcher = async (url: string) =>
  await fetch(url, { method: 'POST' }).then((res) => res.json())

const ImageUploadContainer = () => {
  const router = useRouter()

  // const { data, error } = useSWR('/api/user', fetcher)
  // console.log(data, error)

  useEffect(() => {
    Api({
      url: '/api/auth',
      data: { id: 'finalsoul@seoulstore.com', password: 'qudwns078$', accessToken: null },
    }).then((res) => console.log(res))
  }, [])

  return <ImageUploadViewer />
}

export default ImageUploadContainer
