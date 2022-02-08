import React from 'react';
import '../../App.css';
import 'materialize-css/dist/css/materialize.min.css';
//import map from '../../Images/prototype_map.png'
import ShowOnHover from './ShowOnHover';
import { Container, Row, Col } from 'react-grid-system';
 
function ParkingMap(props) {
  let carList = props.carList

  let cars2d = [...Array(6)].map(e => [...Array(6)].map(a => null));

  carList.map(car => {
    let location = car.newSpot
    let xSpot = location.charCodeAt(0) - 97
    let ySpot = location.charCodeAt(2) - 49
    cars2d[xSpot][ySpot] = car
  })
  
  return (
    <div>
    <Container> 
      {cars2d.map((row) => (
        <Row>
        {row.map((car) => (
          <Col>
          <ShowOnHover car={car}/>
          </Col>
        ))}
        </Row>
      ))}
    </Container>
    </div>
  );
}
 
export default ParkingMap;