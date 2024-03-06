export const generateUniqueId: () => string = () => {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000)
  return `${timestamp}${random}`
}
