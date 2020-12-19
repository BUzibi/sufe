import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Master.scss';
import DefaultLayout from 'layouts/DefaultLayout';
import MasterLayout from 'layouts/MasterLayout'


export default class Master extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MasterLayout className='master'>
                <Details />
            </MasterLayout>
        );
    }
}

class Details extends Component {
    render() {
        return (
            <div>
                <div className="masterinfo">
                    <div className="total-header">研究生信息认证</div>
                    <div className="masterlogin">
                        <div className="header">信息填写 </div>
                            <div className="messagebox">
                            <form>
                                <div className="message">
                                    <div className="label"><span>用户账号</span></div>
                                    <div className="master-box">
                                         <input type="text" name="userID" />
                                    </div>
                                    </div>
                                <div className="message">
                                    <div className="label"><span>本科院校</span></div>
                                    <div className="master-box">
                                        <select>
                                            <option value="pku">北京大学</option>
                                            <option value="qsinghua">清华大学</option>
                                            <option value="renmin">中国人民大学</option>
                                            <option value="fudan">复旦大学</option>
                                            <option value="shangjiao">上海交通大学</option>
                                            <option value="zheda">浙江大学</option>
                                            <option value="nanda">南京大学</option>
                                            <optipn value="sufe">上海财经大学</optipn>
                                            <option value="cufe">中央财经大学</option>
                                            <option value="waimao">对外经济贸易大学</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="message">
                                    <div className="label"><span>本科专业</span></div>
                                    <div className="master-box">
                                        <select>
                                            <option value="finance">金融学</option>
                                            <option value="economics">经济学</option>
                                            <option value="Accounting">会计</option>
                                            <option value="tax">公共管理</option>
                                            <option value="business">工商管理</option>
                                            <option value="Statistics">统计</option>
                                            <option value="Information">计算机</option>
                                            <option value="language">语言类</option>
                                            <option value="laws">法律</option>
                                            <option value="literature">人文与新闻</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="message">
                                    <div className="label"><span>研究生院校</span></div>
                                    <div className="master-box">
                                        <select>
                                            <option value="pku">北京大学</option>
                                            <option value="qsinghua">清华大学</option>
                                            <option value="renmin">中国人民大学</option>
                                            <option value="fudan">复旦大学</option>
                                            <option value="shangjiao">上海交通大学</option>
                                            <option value="zheda">浙江大学</option>
                                            <option value="nanda">南京大学</option>
                                            <optipn value="sufe">上海财经大学</optipn>
                                            <option value="cufe">中央财经大学</option>
                                            <option value="waimao">对外经济贸易大学</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="message">
                                    <div className="label"><span>研究生专业</span></div>
                                    <div className="master-box">
                                        <select>
                                            <option value="finance">金融学</option>
                                            <option value="economics">经济学</option>
                                            <option value="Accounting">会计</option>
                                            <option value="tax">公共管理</option>
                                            <option value="business">工商管理</option>
                                            <option value="Statistics">统计</option>
                                            <option value="Information">计算机</option>
                                            <option value="language">语言类</option>
                                            <option value="laws">法律</option>
                                            <option value="literature">人文与新闻</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="message">
                                    <div className="label"><span>毕业时间</span></div>
                                    <input type="date" value="2020-6-1" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>   </div>
                <div className="mastermaterial">
                    <div className="header">资料上传</div>
                    <div className="remind">请上传可以证明研究生身份的证件</div>
                    <button className="button">上传</button>
                </div>
                <div></div>
                <div className="statement">
                    <div className="header">审核状态</div>
                    <div className="auditstatus">待审核</div>
                </div>
                <div></div>
                <div className="buttonstate">
                    <button className="button">保存</button>
                    <button className="button">保存并提交</button>
                    <button className="button">修改（需重新审核）</button>
                    <button className="button">放弃填写</button>
                </div>
            </div>
        )
    }
}