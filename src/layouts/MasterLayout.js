import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './MasterLayout.scss';
import {withRouter} from 'react-router-dom';
import AppHeader from 'components/AppHeader/AppHeader';
import cls from 'classnames';

class MasterLayout extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
    };

    render() {
        const {children, className} = this.props;

        return (
            <div className={cls('master-layout', className)}>
                <AppHeader/>
                <div className="master-main">
                    <aside className="psidebar">
                        <div className="box">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a href="/masterlogin">
                                        <span>研究生注册认证</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/mastermanagement">
                                        <span>研究生经验发布</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/editexperience">
                                        <span>经验发布</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <div className="pcontent">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MasterLayout);