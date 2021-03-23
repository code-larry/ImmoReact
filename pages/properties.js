import React from 'react'
import {Layout} from '../components/layout'
import api from '../auth/axios'
import {Card} from '../components/card'
import {MDBContainer} from 'mdbreact'
import {useRouter} from 'next/router'
import ReactPaginate from 'react-paginate'
import {SearchFilter} from '../components/searchFilter'

const Properties = ({properties, currentPage, pageCount}) => {

	const router = useRouter();

	// Notre objet page stocke le numéro de page sélectionné commençant à l'index 0
	const paginationHandler = (page) => {
		// Chemin de la route consultée
		const currentPath = router.pathname;
		// Nous stockons la page consultée
		const currentQuery = {...router.query};
		
		// Pour connaître le nouveau numéro de pagé sélectionné, nous ajoutons 1 à la page sélectionnée
		// La page 1 ayant l'index 0, en lui ajoutant 1 nous arrivons donc sur la page 1
		currentQuery.page = page.selected + 1;

		// Nous indiquons à notre router la route demandée ainsi que le numéro de la page
		// Enfin, à chaque affichage de page, on demande une redirection en haut de la fenêtre
		router.push({
			pathname: currentPath,
			query: currentQuery
		}).then(() => window.scrollTo(0,0))
	}

	return (
		<Layout>
			<MDBContainer>
			<SearchFilter />
				<Card properties={properties} />
				<div className="paginateCenter">
					<ReactPaginate 
						onPageChange={paginationHandler}
						initialPage={currentPage -1}
						pageCount={pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						previousLabel="Précèdent"
						nextLabel="Suivant"
						activeClassName="activated"
						breakLabel="..."
						pageClassName="paginate"
						containerClassName="custom-paginate"
					/>
				</div>
			</MDBContainer>
		</Layout>
	)
}

export const getServerSideProps = async({query}) => {
	const page = query.page || 1
	const {data} = await api.get(`/api/properties?page=${page}`)
	const properties = data.data
	const currentPage = data.currentPage
	const pageCount = data.totalPages

	return {
		props: {
			properties,
			currentPage,
			pageCount
		}
	}
}

export default Properties;