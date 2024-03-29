import React from "react";
import { Button, Card, Col,  Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { upagradeTown } from "../store/actions/townActions";

const Building = ({
	wood,
	stone,
	ironOre,
	costWood,
	costStone,
	costIronOre,
	buildingLevel,
	buildingProduction,
	buildingIsBuild,
	buildDate,
	now,
	buildingName,
	buildingImage
}) => {
	const dispatch = useDispatch();
	const userId = localStorage.getItem("userId");
	const isAvailable =
		(wood >= costWood) & (stone >= costStone) & (ironOre >= costIronOre)
			? true
			: false;
	const userToken = localStorage.getItem("userInfo");
	let navigate = useNavigate();
	return (
		<>
		<Row xs={1} md={2} lg={1} className="g-4 mt-1 justify-content-center">
		
		  <Col>
			<Card>
			  <Card.Img variant="top" src={buildingImage} style={{width:"200px"}}/>
			  <Card.Body>
				<Card.Title>{buildingName}   <br />LEVEL:{buildingLevel} <br /> PRODUCTION: {buildingProduction}{" "}</Card.Title>
				<Card.Text>
				{buildingIsBuild ? (
				<>
					<h1>Buduje sie</h1>
					<h2>{parseInt((buildDate - now) / 1000, 10)}</h2>
				</>
			) :
			isAvailable ? (
				<Button
					onClick={() => {
						
						dispatch(upagradeTown(userId, userToken, buildingName));
						navigate('/kingdom')

					}}
				>
					Build
				</Button>
			) : (
				<>
					<h2>
						Wood: {wood} / {costWood}{" "}
					</h2>
					<h2>
						Stone: {stone} / {costStone}
					</h2>
					<h2>
						IronOre: {ironOre} / {costIronOre}
					</h2>
				</>
			)}
				</Card.Text>
			  </Card.Body>
			</Card>
		  </Col>
				
	  </Row>
		
		</>
	);
};

export default Building;
