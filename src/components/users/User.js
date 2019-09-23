import React, { Fragment, Component } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    };

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    };


    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            login,
            html_url,
            public_repos
        } = this.props.user;

        const { loading } = this.props;

        if (loading) {
            return <Spinner />;
        }

        return (
            <div className="center">
            <Fragment>
                <Link to="/" className="btn btn-light">back to search</Link>
                <div className="card grid-2">
                    <div className="all-center">
                        <img
                            src={avatar_url}
                            alt=""
                            className="round-img"
                            style={{ width: "50px" }}
                        />
                        <h1>{login}</h1>
                        <div>
                            <h2>{location}</h2>
                            <p>public repos: {public_repos}</p>
                        </div>

                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                    </div>

                </div>
            </Fragment>
            </div>
        )
    }
}

export default User
