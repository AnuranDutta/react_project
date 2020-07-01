import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    return (
        <div className="col-md-5 m-1 p-2">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({ comments }) {
    const commentsList = comments.map((temp) => {
        return (
            <div key={temp.id} className="li">
                {temp.comment}
                <br />
                    -- {temp.author},
                    &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(temp.date))}
                <br />
            </div>
        );
    })

    if (comments != null) {
        return (
            <div className="col-md-5 m-1 p-2">
                <strong>
                    <h4>Comments</h4>
                </strong>
                <div className="list-unstyled">
                    {commentsList}
                </div>
            </div>
        )
    } else {
        return (
            <div className="col-md-5 m-1 p-2">
                <strong>
                    <h4>Comments</h4>
                </strong>
                <div />
            </div>
        )
    }
}

const DishDetail = (props) => {

    // console.log('Dishdetail Component render invoked');

    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;