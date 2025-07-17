import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Mian Technical</title>
                    <meta name="description" content="Our mission is to empower businesses with cutting-edge IT and engineering solutions that drive innovation, enhance efficiency, and foster growth." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
