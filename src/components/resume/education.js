import React, { Component } from 'react';

export default class Education extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-2 col-lg-4">
                    <p>{this.props.startDateSchool} - {this.props.endDateSchool}</p>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-8">
                    <h4 className="resume-h4">{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-4">
                    <p>{this.props.startDateUniversity} - {this.props.endDateUniversity}</p>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-8">
                    <h4 className="resume-h4">{this.props.universityName}</h4>
                    <p>{this.props.universityDescription}</p>
                </div>
            </div>
        );
    }
}