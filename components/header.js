import React, {useState} from 'react'
import {
	MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
	MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
	} from "mdbreact";
import Link from 'next/link'
import useAuth from '../auth/context'
import {useRouter} from 'next/router'

export const Header = () => {

	// Ce state nous permet de déclencher l'ouverture du menu en responsive
	const [isOpen, setIsOpen] = useState(false)

	// Cette fonction permet de modifier le state isOpen
	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	// On récupère le user, la fonction logout de notre context et la valeur booléenne de isAuthenticated
	const {logout, user, isAuthenticated} = useAuth()

	const router = useRouter()

	return(
		<MDBNavbar color="default-color-dark" expand="md" dark>
			{/* Au click, la fonction est exécutée pour modifier isOpen */}
			<MDBNavbarToggler onClick={handleToggle}/>
			{/* L'attribut isOpen est soit true soit false */}
			<MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
				<MDBNavbarNav left>
					<MDBNavItem active={router.pathname === "/"}>
					<Link href="/" passHref>
						<a className="nav-link">
							<MDBIcon icon="home" className="mr-1"/>
							Home
						</a>
					</Link>
					</MDBNavItem>
					<MDBNavItem active={router.pathname === "/properties"}>
					<Link href="/properties" passHref>
						<a className="nav-link">Liste des biens</a>
					</Link>
					</MDBNavItem>
					{
						isAuthenticated && user.role === "admin" && (
							<MDBNavItem active={router.pathname === "/property/list"}>
							<Link href="/property/list" passHref>
								<a className="nav-link">Dashboard</a>
							</Link>
							</MDBNavItem>
						)
					}
				</MDBNavbarNav>
				<MDBNavbarNav right>
					<MDBNavItem active={router.pathname === "/contact"}>
						<Link href="/contact" passHref>
							<a className="nav-link">
								<MDBIcon icon="address-book" className="mr-1" />
								Contact
							</a>
						</Link>
					</MDBNavItem>
					{
						!isAuthenticated && (
							<MDBNavItem active={router.pathname === "/login"}>
								<Link href="/login" passHref>
									<a className="nav-link">
										<MDBIcon icon="user-alt" className="mr-1" />
										Connexion
									</a>
								</Link>
							</MDBNavItem>
						)
					}

					{
						isAuthenticated && (
							<>
							<MDBNavItem>
								<div className="nav-link">
									<MDBIcon icon="user-alt" className="mr-1" />
									Bonjour {user.username}
								</div>
							</MDBNavItem>

							<MDBNavItem>
								<a className="nav-link" onClick={logout}>
									<MDBIcon icon="power-off" className="mr-1" />
									Déconnexion
								</a>
							</MDBNavItem>
							</>
						)
					}
					
				</MDBNavbarNav>
			</MDBCollapse>
		</MDBNavbar>
	)
}