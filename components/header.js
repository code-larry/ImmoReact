import React from 'react'
import {
	MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
	MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
	} from "mdbreact";

export const Header = () => {
	return(
		<MDBNavbar color="default-color-dark" expand="md" dark>
			<MDBNavbarToggler />
			<MDBCollapse id="navbarCollapse" navbar>
				<MDBNavbarNav left>
					<MDBNavItem>
						<div className="nav-link"><MDBIcon icon="home" className="mr-1"/>Home</div>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBCollapse>
		</MDBNavbar>
	)
}