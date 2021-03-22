import React from 'react'
import {
	MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
	MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
	} from "mdbreact";
import Link from 'next/link'

export const Header = () => {
	return(
		<MDBNavbar color="default-color-dark" expand="md" dark>
			<MDBNavbarToggler />
			<MDBCollapse id="navbarCollapse" navbar>
				<MDBNavbarNav left>
					<MDBNavItem>
					<Link href="/" passHref>
						<a className="nav-link"><MDBIcon icon="home" className="mr-1"/>Home</a>
					</Link>
					</MDBNavItem>
					<MDBNavItem>
					<Link href="/properties" passHref>
						<a className="nav-link">Liste des biens</a>
					</Link>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBCollapse>
		</MDBNavbar>
	)
}