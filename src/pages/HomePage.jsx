import React from 'react'
import Container from 'react-bootstrap/Container'
import { useAuthContext } from '../contexts/AuthContext'
import ImageGrid from '../components/ImageGrid'
import useImage from '../hooks/useImage'

const HomePage = () => {
	const { currentUser } = useAuthContext()
		const imagesQuery = useImage();
 
	return (
		<Container className="py-3">
			<h1>Welcome!</h1>
			{
				currentUser
					? <p>You are logged in as {currentUser.email} 🥳!</p>
					: <p>Anomymous haxxer</p>
			}

			<ImageGrid 	query={imagesQuery}/>
		</Container>
	)
}

export default HomePage
