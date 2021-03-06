import React from 'react';
const axios = require('axios');

class Dashboard extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { user: { } };
        this.Logout = this.Logout.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);
    }
//}



// ...
//class Dashboard extends React.Component {
    // ...

    componentDidMount() {
        this.getCurrentUser();
    }

    getCurrentUser() {
        const token = this.props.token;
        const userURI = this.props.url + '/wp-json/wp/v2/users/me';
        const _this = this;
        axios({
            method: 'POST',
            url: userURI,
            headers: { 'Authorization': 'Bearer ' + token }
        }).then(function (response) {
            if ( response.status === 200 ) {
                const data = response.data;
                _this.setState( {user:data});
                
            }
        })
        .catch(function (error) {
            _this.Logout();
        });

    }
   
//}

// ...

//class Dashboard extends React.Component {
    // ...
    
    Logout() {
        localStorage.removeItem('login');
        this.props.setLogin('');
    }

    render() {
        const { nickname, first_name, last_name } = this.state.user;
        return (
            <div className="dashboard">
                <button type="button" className="btn btn-danger" onClick={this.Logout}>Logout</button>
           
                <div className="jumbotron">
                    Welcome { nickname }
                    <p>I think your name is { first_name } { last_name}</p>
                </div>
            </div>
        );
    }
}


export default Dashboard;