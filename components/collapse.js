import React, { Component, useState } from "react";
import { MDBCollapse, MDBIcon } from "mdbreact";

const Collapse = ({titre, children}) => {

const [collapseId, setCollapseId] = useState("")

const toggleCollapse = collapseId => () => {
  setCollapseId(prevState => (
	  collapseId = prevState !== collapseId ? collapseId : ""
  ))
}

const styles = {
	collapse: {
		backgroundColor: "#e0e0e0",
		padding: 10,
		fontSize: 20
	},
	icon: {
		padding: 10
	}
}

  return (
	<div className="mb-4">
		<div style={styles.collapse} onClick={toggleCollapse("basicCollapse")}>
			{titre}
			{
				collapseId && <MDBIcon icon="angle-down" style={styles.icon} className="float-right" />
			}
			{
				!collapseId && <MDBIcon icon="angle-up" style={styles.icon} className="float-right" />
			}
		</div>
		<MDBCollapse id="basicCollapse" isOpen={collapseId}>
			{
				children
			}
		</MDBCollapse>
	</div>
    );
}

export default Collapse;