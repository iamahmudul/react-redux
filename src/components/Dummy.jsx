import React from "react";
import { Clock } from "./Clock";
import { API, URL } from "../constants/APIs";
import { Link } from "react-router-dom";

export class Dummy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            gists: [],
            showGithubUsers: false,
            showGithubGists: false,
        };
    }

    handleClick() {
        console.log("Click handler", this)
    }

    handleClick2(e) {
        //self.name = "Mahedi";
        console.log("Click handler 2", this, e);
    }

    getRandomIds(length, max) {
        return [...new Array(length)].map(() => Math.round(Math.random() * max));
    }

    async getGithubUsers() {
        const listUsers = await fetch(API.github.users);
        //const randomIds = this.getRandomIds(5, 100);
        const users = (await listUsers.json());
        users.length = 5;
        
        this.setState({
            users: users,
            showGithubUsers: !!users
        })
    }

    async getGithubGists() {
        const listGists = await fetch(API.github.gist);
        const gists = await listGists.json();
        gists.length = 5;
        this.setState({
            gists: gists,
            showGithubGists: !!gists
        })
    }
    
    componentDidMount() {
        this.getGithubUsers();
        this.getGithubGists();
    }
    
    render() {
        return (
            <>
                <h1>Dummy Component</h1>
                <div>{ this.props.withText }</div>
                Now is <Clock />

                <br />
                <button onClick={()=>this.handleClick()}>Click Here</button>
                <button onClick={this.handleClick2.bind(this)}>Click Here 2</button>
                <section>
                    <h4>Github Users</h4>
                    <ol>
                        {this.state.showGithubUsers && 
                            this.state.users.map(item => {
                                return <li key={item.id}>{item.login}</li>
                            })
                        }
                    </ol>
                </section>

                <Link to={URL.google}>Google</Link>


            </>
        )
    };
}