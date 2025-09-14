const convertDate = (input) => {
  if (!input) return null

  const parts = input.split("/")
  if (parts.length !== 3) return null

  const [day, month, year] = parts
  if (!day || !month || !year) return null

  return new Date(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00.000Z`)
}
module.exports = convertDate
