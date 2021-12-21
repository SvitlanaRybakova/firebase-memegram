import React from "react";
import { Container, Card } from "react-bootstrap";
import { useAuthContext } from "../contexts/AuthContext";
import useImage from "../hooks/useImage";
import { SRLWrapper } from "simple-react-lightbox";

const HomePage = () => {
	const { currentUser } = useAuthContext();
	const imagesQuery = useImage("all");

	const options = {
		settings: {
			overlayColor: "rgb(25, 136, 124)",
			autoplaySpeed: 1500,
			transitionSpeed: 900,
		},
		buttons: {
			backgroundColor: "#1b5245",
			iconColor: "rgba(126, 172, 139, 0.8)",
		},
		caption: {
			captionColor: "#a6cfa5",
			captionFontFamily: "Raleway, sans-serif",
			captionFontWeight: "300",
			captionTextTransform: "uppercase",
		},
	};
	return (
		<Container className="py-3">
			<h1>Welcome!</h1>
			{currentUser ? (
				<p>You are logged in as {currentUser.email} 🥳!</p>
			) : (
				<p>Anomymous haxxer</p>
			)}
			<SRLWrapper options={options}>
				<div className="d-flex">
				{imagesQuery.data &&
					imagesQuery.data.map((image) => (
							<Card className="cardWidth"  key={image._id}>
								<Card.Img src={image.url} title={"smt"} />
							</Card>
					))}
					</div>
			</SRLWrapper>
				
		</Container>
	);
};

export default HomePage;
