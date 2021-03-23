import React from 'react'
import {
	MDBDataTableV5,
	MDBIcon,
	MDBView
} from 'mdbreact'
import {AdminRoutes} from '../../auth/adminRoutes'
import {Layout} from '../../components/layout'
import api from '../../auth/axios'
import useSWR from 'swr'
import Moment from 'react-moment'
import {priceFormated} from '../../components/helpers'

const fetcher = url => api.get(url).then(res => res.data)

const PropertyList = () => {
	const {data} = useSWR("/api/properties?limit=50", fetcher)
	const properties = data && data.data

	const datatable = {
		columns: [
			{
				label: "Titre",
				field: "title",
				sort: "asc"
			},
			{
				label: "Description",
				field: "description",
				sort: "asc"
			},
			{
				label: "Prix",
				field: "price",
				sort: "asc"
			},
			{
				label: "Ville",
				field: "city",
				sort: "asc"
			}
		],
		rows: properties && properties.map(property => {
			return{
				title: property.title,
				description: property.description.slice(0,200),
				price: priceFormated(property.price),
				city: property.city
			}
		})
	}

	return(
		<Layout>
			<MDBDataTableV5 
				data={datatable}
				entries={5}
				searchTop
				searchBottom={false}
			/>
		</Layout>
	)
}

export default AdminRoutes(PropertyList);
