import React, { Component } from 'react';
import Rating from './Rating';
import { Card } from 'react-bootstrap';

class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Body style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={this.props.data.imageUrl}
                            alt="Image"
                        />
                        <div>
                            <h5>{this.props.data.productName}</h5>
                            {this.props.data.releasedDate}
                            <Rating rating={this.props.data.rating} numOfReviews={this.props.data.numOfReviews}/>
                            <p>{this.props.data.description}</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default Product;
