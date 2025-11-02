const convertDate = (input) => {
  if (!input) return null;

  const parts = input.includes("-") ? input.split("-") : input.split("/");
  if (parts.length !== 3) return null;

  let year, month, day;

  if (input.includes("-")) {
    [year, month, day] = parts;
  } else {
    [day, month, year] = parts;
  }

  return new Date(`${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")}T00:00:00.000Z`);
}

module.exports = convertDate;
