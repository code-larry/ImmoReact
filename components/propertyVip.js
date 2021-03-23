import React from 'react'
import {
	MDBCard,
	MDBCardBody,
	MDBCardText,
	MDBCardTitle,
	MDBCol,
	MDBRow,
	MDBView
} from 'mdbreact'
import {priceFormated} from './helpers'
import Link from 'next/link'

export const PropertyVip = ({properties}) => (
	<>
	<h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">Biens sponsorisés</h2>
	<MDBRow>
		{
			properties && properties.map(property => (
				<MDBCol md="4" lg="4" key={property._id}>
				<Link href="/property/[slug]" as={`/property/${property.slug}`} passHref>
					<a>
						<MDBView zoom>
							<img src={property.pictures[0]} alt={property.title} className="globalImg"/>	
						</MDBView>
					</a>
				</Link>
				<MDBCardBody>
					<MDBCardTitle>{property.title}</MDBCardTitle>
					<MDBCardText>
						<strong>{priceFormated(property.price)}</strong>
					</MDBCardText>
				</MDBCardBody>
				</MDBCol>
			))
		}
	</MDBRow>
	</>
)