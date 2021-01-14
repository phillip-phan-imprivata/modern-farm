export const catalog = (harvestArr) => {
  const contentElement = document.querySelector(".container")
  let catalogHTMLRepresentation = ""
  for (const plant of harvestArr) {
    catalogHTMLRepresentation += `<section class="plant">${plant.type}</section>`
  }
  contentElement.innerHTML += `
      ${catalogHTMLRepresentation}
  `
}