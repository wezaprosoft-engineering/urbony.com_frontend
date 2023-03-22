import React from "react";
import { Card } from "react-bootstrap";
import './style.css';
import { FaTrash } from "react-icons/fa";


export default function Slider({ cover, handleClick, index, editable }) {
    let image = cover.replace(/ /g, "%20")
    return (
        < React.Fragment >
            <Card className="m-0 p-0 overflow-hidden card-height" style={{
                backgroundImage: "url(" + image + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: '500px',
                borderRadius: '25px'
            }} >
               {
                editable=== true ?
               <span className="delete-icon" onClick={handleClick(index)}>
                    <FaTrash />
                </span>
               :null
               } 
            </Card>
        </React.Fragment>

    );
}