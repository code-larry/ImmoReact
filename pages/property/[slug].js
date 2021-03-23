import React from 'react'
import api from '../../auth/axios'
import {Layout} from '../../components/layout'
import {
	MDBCard,
	MDBCardBody,
	MDBContainer,
	MDBCol,
	MDBRow,
	MDBIcon
} from 'mdbreact'
import {CardCarousel} from '../../components/cardCarousel'
import {Slug} from '../../components/slug'
import {CardVip} from '../../components/cardVip'
import {CardRelated} from '../../components/cardRelated'

const Property = ({property, propertiesVip, propertyRelated}) => {
	const styles = {
		fontSize: 15
	}

	return (
		<>
		{
			property && (
				<Layout>
					<MDBContainer>
						<MDBCard>
							<MDBCardBody>
								<MDBRow>
									<MDBCol md="9" lg="9">
										<CardCarousel property={property}/>
										<Slug property={property} />
									</MDBCol>
									<MDBCol md="3" lg="3">
										<h4 className="mt-5">Contactez-nous</h4>
										<div style={styles}>
											<MDBIcon icon="calculator" className="mr-1" />
											10, rue de la Paix
										</div>
										<div style={styles}>
											<MDBIcon icon="phone-alt" className="mr-1" />
											+33 387769875
										</div>
										<div style={styles}>
											<MDBIcon icon="mobile-alt" className="mr-1" />
											+33 387769875
										</div>
										<div style={styles}>
											<MDBIcon icon="envelope" className="mr-1" />
											contact@gmail.com
										</div>

										<h3 className="mt-4 mb-3">Biens Sponsorisés</h3>
										<CardVip properties={propertiesVip} />
									</MDBCol>
								</MDBRow>
								<hr className="my-4"/>
								<MDBRow>
									{
										propertyRelated && propertyRelated.length !== 0 && (
											<MDBCol>
												<h2 className="mb-5">Biens Similaires</h2>
												<CardRelated properties={propertyRelated} />
											</MDBCol>
										)
									}
								</MDBRow>
							</MDBCardBody>
						</MDBCard>
					</MDBContainer>
				</Layout>
			)
		}
		</>
	)
}

// Je récupère la liste des slugs nécessaires pour utiliser la route dynamique de notre API
export const getStaticPaths = async() => {
	const {data} = await api.get("/api/properties?limit=100")
	const properties = data.data
	const paths = properties.map(property => ({
		params: {
			slug: property.slug
		}
	}))

	return {paths, fallback: true}
}

// Dans mes params, je retrouve mes slugs à la clé slug
export const getStaticProps = async({params}) => {
	// Destructuring pour récupérer le slug
	const {slug} = params;
	// On stocke le résultat à la clé property de notre objet data
	// On utilise les backticks pour utiliser les templates literals avecs les params dynamiques
	const {data: property} = await api.get(`/api/property/${slug}`)

	// Requête pour récupérer les biens VIP
	const {data: propertiesVip} = await api.get("/api/properties/vip")

	const {data: propertyRelated} = await api.get(`/api/properties/related/${property._id}`)

	return {
		props: {
			property,
			propertiesVip,
			propertyRelated
		}
	}
}

export default Property;