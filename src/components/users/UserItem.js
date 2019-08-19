import React, { Component } from 'react'

class UserItem extends Component {

    state = {
        id: "id",
        login: "octocat",
        avatar_url: "https://avatars1.githubusercontent.com/u/583231?s=400&v=4",
        html_url: "https://github.com/octocat"
    };

    render() {

        const { login, avatar_url, html_url } = this.state;

        return (
            <div className="card text-center">
                <img
                    src={avatar_url}
                    alt=""
                    className="round-img"
                    style={{ width: "60px" }}
                />
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1" target="_blank">More</a>
                </div>

            </div>
        );
    }
}

export default UserItem
