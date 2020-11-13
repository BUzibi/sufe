import React, { Component } from 'react';
import './AppHeader.scss';
import {
	Link
} from "react-router-dom";

export default class About extends Component {

    render() {
        return (
            <header className='app-header'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}