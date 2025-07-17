import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component{
    render(){
        const { title , parent} = this.props;
        return(
            <React.Fragment>
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17" data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100 rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{title}</h2>
                                    <ul className="page-list breadcrumb-item-22">
                                        <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                                        {parent? <li className="breadcrumb-item">{parent}</li>:''}
                                        <li className="breadcrumb-item active">{title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Breadcrumb;

