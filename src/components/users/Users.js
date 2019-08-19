import React, { Component } from "react";
import UserItem from "./UserItem";

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
                login: "varkl",
                avatar_url: "https://avatars0.githubusercontent.com/u/46399593?v=4",
                html_url: "https://github.com/varkl"
            },
            {
                id: "3",
                login: "loekvanvarkNL",
                avatar_url: "https://avatars2.githubusercontent.com/u/45713478?v=4",
                html_url: "https://github.com/loekvanvarkNL"
            },

        ]
    };

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }

}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
};

export default Users;
