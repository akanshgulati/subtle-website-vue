export const Http = (url, option = {}) => {
  return new Promise((resolve, reject) => {
    const xmlhttp = new XMLHttpRequest()
    const method = option.method || 'GET'
    xmlhttp.open(method, url)

    if (option.headers) {
      for (let i = 0; i < option.headers.length; i++) {
        xmlhttp.setRequestHeader(option.headers[i].name, option.headers[i].value)
      }
    }
    if (option.method === 'POST') {
      xmlhttp.setRequestHeader('Content-type', 'application/json')
    }

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.responseText && xmlhttp.status >= 200 && xmlhttp.status < 300) {
          resolve(JSON.parse(xmlhttp.responseText))
          return
        }
        reject({
          status: xmlhttp.status,
          reason: JSON.parse(xmlhttp.responseText)
        })
      }
    }
    xmlhttp.onerror = () => {
      reject(xmlhttp.status)
    }
    xmlhttp.send(JSON.stringify(option.data))
  })
}
