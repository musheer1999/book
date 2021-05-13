import React from 'react';
import './custom.css';
import { Link } from "react-router-dom";
export const CategoryDisplayCard = (props) => {
    const { cardTitle, actionButtonText, img, anykey } = props;
    return (
        <Link to={`/subcat/${anykey}`}>
            <div className="card">
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-title">
                    {cardTitle}
                </div>
                <div className="callToAction">
                    <button> {actionButtonText} </button>
                </div>
            </div>
        </Link>
    );
};
