import apiMap from './map'
import axios from 'axios'

const headers = {
  Authorization: `Basic ${Buffer.from('seoulstore:devteam!').toString(
    'base64'
  )}`,
}

export const extractTokens = (req, res, next) => {
  console.log('extractTokens: ', req.body)
  return next()
}

export const Api = async (options, req, res) => {
  const config = {
    ...options,
    method: 'post',
  }
  return await axios(config)
    .then((res) => res)
    .catch((err) => {
      console.log(`api error from ${req ? 'server' : 'front'}`, err)
      throw err
    })
}

export const proxy = async (req, res, next) => {
  const {
    params: { type },
    body,
  } = req
  const { url, method } = apiMap[type]
  const config = {
    url,
    method,
    headers,
    ...(method === 'get' ? { params: body } : { data: body }),
    validateStatus: function (status) {
      return status >= 200 && status < 300
    },
  }
  console.log('config: ', config)
  return await axios(config)
    .then(({ status, data: { status: statusText, data } }) => {
      return res.status(status).json({
        status,
        statusText,
        data: data.data || data,
      })
    })
    .catch(({ response: { status, data, statusText } }) => {
      return res.status(status).json({
        status,
        statusText,
        data: data.data || data,
      })
    })
}
