import React from 'react';
import { Card,CardImg,CardBody,CardImgOverlay,CardTitle } from 'reactstrap';

const MenuItem = (props) => {
    return(
        <div>
            <Card style={{margin: "10px"}}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image}
                    style={{opacity: "0.6"}}/>
                    <CardImgOverlay>
                        <CardTitle style={{cursor: "pointer"}} onClick={props.DishSelect}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;