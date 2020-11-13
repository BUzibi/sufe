import React, { Component } from 'react';
import './About.scss';
import DefaultLayout from 'layouts/DefaultLayout';

export default class About extends Component {

    render() {
        return (
            <DefaultLayout className='about'>
                 <div>
                About12323
                    <a href="/article/23423432423">direct to article details</a>
                </div>
            </DefaultLayout>
        );
    }
}