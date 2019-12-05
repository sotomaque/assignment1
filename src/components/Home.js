import React, { Component } from 'react';
import FeaturedCourses from '../components/FeaturedCourses';

class Home extends Component {
    render() {
        return (
            <div className="home container">
                <div className="row">
                  
                        <FeaturedCourses />
            
                </div>
            </div>
        )
        
    }
}

export default Home;