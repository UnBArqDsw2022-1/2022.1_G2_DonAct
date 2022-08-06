import React from "react";
import { Route,Link } from "react-router-dom";
import Home from "../pages/Home"


const AppRoutes = () => (
	<Link>
		<Route component={Home} path="/" exact />
		</Link>
	
);
export default AppRoutes;
