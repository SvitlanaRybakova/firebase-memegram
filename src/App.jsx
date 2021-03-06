import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Container } from 'react-bootstrap'

import RequireAuth from './components/RequireAuth'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import Navigation from './pages/partials/Navigation'
import PageNotFound from './pages/PageNotFound'
import SignupPage from './pages/SignupPage'
import UpdateProfilePage from './pages/UpdateProfilePage'
import UploadMemePage from './pages/UploadMeme'

function App() {
	return (
		<>
			<Navigation />

			<Container id="App" className="py-3">
				<Routes>
					{/* Guest routes */}
					<Route path="/login" element={<LoginPage />} />
					<Route path="/logout" element={<LogoutPage />} />
					<Route path="/signup" element={<SignupPage />} />

					{/* Protected routes */}
					<Route
						path="/"
						element={
							<RequireAuth redirectTo="/login">
								<HomePage />
							</RequireAuth>
						}
					/>

					<Route
						path="/upload-meme"
						element={
							<RequireAuth redirectTo="/login">
								<UploadMemePage />
							</RequireAuth>
						}
					/>

					<Route
						path="/update-profile"
						element={
							<RequireAuth redirectTo="/login">
								<UpdateProfilePage />
							</RequireAuth>
						}
					/>

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Container>

			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</>
	);
}

export default App
