import React, { Component } from 'react';

export default class Experience extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-sm-12 col-md-2 col-lg-4">
                    <p>{this.props.startDateJob} - {this.props.endDateJob}</p>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-8">
                    <h4 className="resume-h4">{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </div>
            </div>
           
        )
    }
}

