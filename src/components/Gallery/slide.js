import React from "react";
import { Card } from "react-bootstrap";
import './style.css';


export default function Slider({ cover,handleClick }) {
    let image = cover.replace(/ /g,"%20")
    return (
        < React.Fragment >
            <Card className="m-0 p-0 overflow-hidden card-height" style={{
                backgroundImage: "url(" + image + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: '500px',
                borderRadius: '25px'
            }} onClick={handleClick}>
            </Card>
        </React.Fragment>

    );
}