import React, { Component } from "react";

class Users extends Component {

    state = {
        users: [
            {
                id: "1",
                login: "octocat",
                avatar_url: "https://avatars1.githubusercontent.com/u/583231?s=400&v=4",
                html_url: "https://github.com/octocat"
            },
            {
                id: "2",
                login: "mojombo",
                avatar_url: "https://avatars1.githubusercontent.com/u/583231?s=400&v=4",
                html_url: "https://github.com/mojombo"
            },
            {
                id: "3",
                login: "defunkt",
                avatar_url: "https://avatars1.githubusercontent.com/u/583231?s=400&v=4",
                html_url: "https://github.com/defunkt"
            },

        ]
    };

    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <div>{user.login}</div>
                ))}
            </div>
        );
    }
}

export default Users;
