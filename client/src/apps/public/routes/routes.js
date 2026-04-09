import {Route, Routes} from "react-router-dom";

import {DefaultLayout} from "../layouts/DefaultLayout/DefaultLayout";
import {HomePage} from "../pages/HomePage";
import {PostPage} from "../pages/PostPage";
import {PostsCategoryPage} from "../pages/PostsCategoryPage";
import {PostsSearchPage} from "../pages/PostsSearchPage";

export const PublicRoutes = () => {
	return (
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/:slug" element={<PostPage />} />
					<Route path="/posts/:category" element={<PostsCategoryPage />} />
					<Route path="/search" element={<PostsSearchPage />} />
				</Route>
			</Routes>
	)
}