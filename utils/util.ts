export function replaceGetMediaDom(htmlStr: string, mediaMap: Map<string, any>) {
  const container = document.createElement('div')
  container.innerHTML = htmlStr
  container.hidden = true
  Array.from(container.querySelectorAll('img')).forEach((img) => {
    const href = img.getAttribute('data-href')
    // 从对应的map里找到签名
    if (href) {
      img.src = mediaMap.get(href).signedUrl
    }
  })
  Array.from(container.querySelectorAll('source')).forEach((source) => {
    const id = source.getAttribute('id')
    if (id) {
      const map = mediaMap.get(id)
      if (map) {
        source.src = map.signedUrl
      }
    }
  })
  return container.innerHTML
}
