import React, { Component } from 'react';

class FeaturedCourses extends Component {
    render() {
        return (
            <div className="course-list section">
                <div className="col s12 m4">
                    <div className="card course-summary">
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title"><b>HTML 5</b></span>
                            <span className="card-body">Author: Enrique</span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card course-summary">
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title"><b>HTML 5</b></span>
                            <span className="card-body">Author: Enrique</span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card course-summary">
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title"><b>HTML 5</b></span>
                            <span className="card-body">Author: Enrique</span>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default FeaturedCourses;