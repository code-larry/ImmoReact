import React from 'react'
import {
	MDBCard,
	MDBCardBody,
	MDBCardHeader,
	MDBCardFooter,
	MDBCol,
	MDBRow,
	MDBCardImage
} from 'mdbreact'
import {priceFormated} from './helpers'

export const CardRelated = ({properties}) => (
	<MDBRow>
		{
			properties && properties.map(property => (
				<MDBCol className="mb-3" md="4" lg="4" key={property._id}>
					<MDBCard>
						<MDBCardHeader>
							{property.title}
						</MDBCardHeader>
						<MDBCardImage
							src={property.pictures[0]}
							className="globalImg"
							hover
							waves
						/>
						<MDBCardFooter>
							<div className="globalColor">
								{priceFormated(property.price)}
							</div>
							<p>
								<small>{property.city}, Monde</small>
							</p>
						</MDBCardFooter>
					</MDBCard>
				</MDBCol>
			))
		}
	</MDBRow>
)