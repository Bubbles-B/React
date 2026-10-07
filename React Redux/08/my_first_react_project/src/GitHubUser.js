import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class GitHubUser extends Component {
    render() {
        return (
            <div>
                <h1>User Login: {this.props.match.params.login}</h1>
                <h2>User Id: {this.props.match.params.id}</h2>
                <Button variant="primary" onClick={this.handleClick}>
                    Go to GitHub Users
                </Button>
            </div>
        );
    }
    handleClick(e) {
        this.props.history.push("/github");   // no Nav.Link involved -- pure code navigation
    }
}

export default GitHubUser;
