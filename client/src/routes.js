import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PostPage } from './pages/PostPage'
import {PostsCategoryPage} from "./pages/PostsCategoryPage";
import {SidebarModalProvider} from "./context/SidebarModalContext";
import {PostsSearchPage} from "./pages/PostsSearchPage";
// import Auth from './pages/Auth'

export const useRoutes = (isAuthenticated) => {
	// if (isAuthenticated) {
	//     <Switch>
	//         <Route path='/home' exact>
	//             <HomePage />
	//         </Route>
	//         <Redirect to='/404' />
	//     </Switch>
	// }

	return (
		<SidebarModalProvider>
			<Routes>
				<Route path='/' exact element={<HomePage/>} />
				<Route path='/:slug' element={<PostPage/>} />
				<Route path='/posts/:category' element={<PostsCategoryPage/>} />
				<Route path='/search' element={<PostsSearchPage/>} />
				{/*<Route to='*' />*/}
			</Routes>
		</SidebarModalProvider>
	)
}
