import React from "react";
import Card from "react-bootstrap/Card";
import MickeyMouse from './Mickey_Mouse.png';

function GitHubCard() {
    return (
        <div className="card3">
            <Card style={{ width: "18rem" }}>

                <Card.Img variant="top" src={MickeyMouse} />
                Source: https://github.com/cameronotoole44
                <Card.Body>
                    <Card.Title>Cameron O'Toole</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default GitHubCard;