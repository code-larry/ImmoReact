// Cette fonction nous permet de formater nos prix
export const priceFormated = (value) => {
	return new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "EUR"
	}).format(value)
}