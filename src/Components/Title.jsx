import React from 'react'
import {Row,Col,Jumbotron} from 'reactstrap';


export default  () => {
    return (
        <div>
            <Row>
                <Col xs="12">
                 <Jumbotron className="text-center">
                   <h1 className="display-5">Todo App</h1>
                   <p className="lead">ReactJs + Firestore</p>
                 </Jumbotron>
                </Col>
            </Row>
        </div>
    )
}
