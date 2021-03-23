import React from 'react'
import api from '../../auth/axios'
import {Layout} from '../../components/layout'
import {
	MDBCard,
	MDBCardBody,
	MDBContainer,
	MDBCol,
	MDBRow
} from 'mdbreact'
import {CardCarousel} from '../../components/cardCarousel'
import {Slug} from '../../components/slug'

const Property = ({property}) => {
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
	const {data: property} = await api.get(`/api/property/${slug}`)

	return {
		props: {
			property
		}
	}
}

export default Property;