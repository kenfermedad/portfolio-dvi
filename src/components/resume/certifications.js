import React, { Component } from 'react';

export default class Certifications extends Component {
    render(){    
        return(
            <div className="row">
            <div className="col-md-12 col-lg-6">
            <h4 className="resume-h4">{this.props.certificationNameLeft}</h4>
                <small>{this.props.certificationDescriptionLeft} | {this.props.startDateCertificationLeft} - {this.props.endDateCertificationLeft}</small>
            </div>
            <div className=" col-md-12 col-lg-6">
                <h4 className="resume-h4">{this.props.certificationNameRight}</h4>
                <small>{this.props.certificationDescriptionRight} | {this.props.startDateCertificationRight} - {this.props.endDateCertificationRight}</small>
            </div>
        </div>
        )
    }
}
