import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from "prop-types";


const AdminRoute =({ component: Component , auth, ...rest}) => (
		<Route
			{...rest}
			render = {props =>{
      	if(!props.token){
					return <Redirect to="/login" />
        }else if(props.token !== null){
					return <Redirect to="/login" />
				}else {
					return < Component {...props} />;
				}
			}}

		/>
	);

const mapStateToProps = state => ({
	token: state.auth.token,
  userRole: state.auth.userRole,
});

export default connect(mapStateToProps, )(AdminRoute);
