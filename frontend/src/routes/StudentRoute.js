import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from "prop-types";


const StudentRoute =({ component: Component ,userRole, token, ...rest}) => (
		<Route
			{...rest}
			render = {props =>{
      	if(!token){
					return <Redirect to="/login" />
        }else if(token !== null){
					if (userRole !== 'student'){
            if (userRole === 'principal'){
              return <Redirect to="/itdashboard" />
            }else if(userRole ==='teacher'){
              return <Redirect to="/teacherdashboard" />
            }else{
              return <Redirect to="/login" />
            }
          }

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

export default connect(mapStateToProps, )(StudentRoute);
