// 80x80 | 400x220 | 1840x1380
export const getSizedImg = (img, size, ext = 'jpg') => {
  return size ? `${img}-${size}.${ext}` : `${img}.${ext}`
}
