import React, { Component } from 'react';

class Campuses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campuses: []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:5000/Campuses')
        .then(res => res.json())
        .then(data => this.setState({ campuses: data }))
    }

    render() {
        const campusList = this.state.campuses.map(campus => {
            <h1>hello</h1>
        })

        return (
            <div>
                <h3><strong><u>Campuses</u></strong></h3>
                {this.state.campuses.map(m => 
                    <div className="card">
                        <img src={m.imageUrl}/>
                        <div className="information">
                            <h1> Name: {m.name} </h1>
                            <h2> Address: {m.address} </h2>
                            <p> Description: {m.description}</p>
                        </div>
                    </div>
                )}
                {campusList}
            </div>
        );
    }
}

export default Campuses;