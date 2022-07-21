import useSWR from 'swr'

const fullRouteRx = /^https:?/
const versionPrefixRx = /^\/v\d\//
const getUrl = url => {
  if (fullRouteRx.test(url)) return url
  return versionPrefixRx.test(url)
    ? '/api' + url
    : '/api/v1' + url
}

const handleResponse = res => res.text().then(txt => {
  let json

  try {
    json = JSON.parse(txt)
  } catch (err) {
    json = { response: txt, ...res }
  }

  if (/40[13]/.test(res.status)) {
    // fetch.post('/v1/users/logout')
    // window.history.location = '/login'
  }

  return {
    ...json,
    __raw: res,
  }
})

const swr = (url = '') => {
  const path = getUrl(url)

  return useSWR(
    path,
    (url, ...args) => global.fetch(path, ...args).then(res => res.json())
  )
}

const get = (url = '', params = {}) => {
  const options = { method: 'GET' }

  const qs = new URLSearchParams(params).toString()
  const dest = getUrl(qs.length ? url + '?' + qs : url)

  return global.fetch(dest, options).then(handleResponse)
}

const wrapFetch = (method = '') => (url = '', payload = {}) => {
  const options = { method }
  const isFormData = payload instanceof FormData

  if (!isFormData) {
    options.headers = {
      'Content-Type': 'application/json'
    }
  }

  if (payload) {
    options.body = isFormData
      ? payload
      : JSON.stringify(payload)
  }
  
  return global.fetch(getUrl(url), options).then(handleResponse)
}

export const fetch = {
  swr,
  get,
  post: wrapFetch('POST'),
  put: wrapFetch('PUT'),
  patch: wrapFetch('PATCH'),
  delete: wrapFetch('DELETE'),
}