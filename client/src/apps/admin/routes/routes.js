import {Navigate, Route, Routes} from "react-router-dom";

import {useAuthContext} from "../../../context/AuthContext";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {ProtectedRoutes} from "./protectedRoutes";
import {AdminLayout} from "../layouts/AdminLayout/AdminLayout";
import {PostsPage} from "../pages/PostsPage/PostsPage";
import {UsersPage} from "../pages/UsersPage/UsersPage";
import {SocialsPage} from "../pages/SocialsPage/SocialsPage";
import {CreatePostPage} from "../pages/CreatePostPage/CreatePostPage";
import {EditPostPage} from "../pages/EditPostPage/EditPostPage";
import {ProfilePage} from "../pages/ProfilePage/ProfilePage";
import {CategoriesPage} from "../pages/CategoriesPage/CategoriesPage";

export const AdminRoutes = () => {
	const { user } = useAuthContext()

	return (
		<Routes>
			<Route path="login" element={<LoginPage />} />

			<Route element={<ProtectedRoutes user={user} />}>
				<Route element={<AdminLayout />}>
					<Route path="posts" element={<PostsPage />} />
					<Route path="users" element={<UsersPage />} />
					<Route path="socials" element={<SocialsPage />} />
					<Route path="create-post" element={<CreatePostPage />} />
					<Route path="edit-post/:slug" element={<EditPostPage />} />
					<Route path="profile" element={<ProfilePage />} />
					<Route path="categories" element={<CategoriesPage />} />
					<Route path="" element={<Navigate to="posts" replace />} />
				</Route>
			</Route>
		</Routes>
	)
}