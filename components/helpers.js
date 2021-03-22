// Cette fonction nous permet de formater nos prix
export const priceFormated = (value) => {
	return new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR"
	}).format(value)
}