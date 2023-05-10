import hu from "./content/hu"
import en from "./content/en"

export const dictionary = locale => {
  if(locale && locale === 'en') return en
  return hu
}