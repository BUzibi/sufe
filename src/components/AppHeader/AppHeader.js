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
                    <ul className="header-menu">
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/experience">经验广场</Link>
                        </li>
                        <li>
                            <Link to="/postgraduate">保研大数据</Link>
                        </li>
                        <li>
                            <Link to="/search">查询系统</Link>
                        </li>
                        <li>
                            <Link to="/master">研究生入驻</Link>
                        </li>
                        <li>
                            <Link to="/potrait">模拟画像</Link>
                        </li>
                        <li>
                            <Link to="/user">个人中心</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}