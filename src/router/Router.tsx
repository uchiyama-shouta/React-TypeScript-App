import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { HomeRoutes } from "./HomeRoutes";
import Login from "../components/pages/Login";
import Page404 from "../components/pages/Page404";
import HeaderLayout from "../components/templetes/HeaderLayout";
import LoginUserProvider from "../providers/LoginUserProvider";

const Router: VFC = memo(() => {
	return (
		<Switch>
			<LoginUserProvider>
				<Route exact path="/">
					<Login />
				</Route>
				<Route
					path="/home"
					render={({ match: { url } }) => (
						<Switch>
							{HomeRoutes.map((route) => (
								<Route
									key={route.path}
									exact={route.exact}
									path={`${url}${route.path}`}
								>
									<HeaderLayout>{route.children}</HeaderLayout>
								</Route>
							))}
						</Switch>
					)}
				/>
			</LoginUserProvider>
			<Route>
				<Page404 />
			</Route>
		</Switch>
	);
});

export default Router;
