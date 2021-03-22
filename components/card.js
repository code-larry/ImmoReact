import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { priceFormated } from "./helpers";

export const Card = ({properties}) => {
  return (
	<>
		{
			properties && properties.map(property => (

				<MDBCard key={property._id}>
      				<MDBCardBody>
						<MDBRow>
							<MDBCol lg="5">
								<MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
								<img
									className="globalImg"
									src={property.pictures[0]}
									alt={property.title}
								/>
								<a href="#!">
									<MDBMask overlay="white-slight" />
								</a>
								</MDBView>
							</MDBCol>

							<MDBCol lg="7">
								<span className="globalColor">
									<h6 className="font-weight-bold mb-3">
										<MDBIcon icon="university" className="pr-2" />
										{property.category.name}
									</h6>
								</span>

								<h3 className="font-weight-bold mb-3 p-0">
									<strong>{property.title}</strong>
								</h3>

								<p>
								{property.description.slice(0, 150)}
								</p>
								<p className="globalColor">
									<strong>{priceFormated(property.price)}</strong>
								</p>
								<p className="globalColor">
									<MDBIcon icon="city mr-1" />
									<strong>{property.city}</strong>
								</p>
							</MDBCol>
						</MDBRow>
						
					</MDBCardBody>
    			</MDBCard>
			))
		}
	</>
  );
}