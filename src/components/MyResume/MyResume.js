import React, { Component } from 'react';
import './MyResume.scss';
// import './myScript.js';
import EmptyLayout from 'layouts/EmptyLayout';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';

export default class MyResume extends Component {
    render() {
        return (
            <EmptyLayout className='myresume'>
                <div class="resume-tabs">
                    <div class="resume-categories">
                        <div class="col">基本信息</div>
                        <div class="col">成绩信息</div>
                        <div class="col">实习经历</div>
                        <div class="col">学术经历</div>
                        <div class="col">获奖情况</div>
                    </div>
                </div>
                <div className="resume-container">
                    {/* <div id="fundation" class="resume-contents">
                        <form>
                            <div className="fundation-message">
                                <span>姓名: </span>
                                <input type="text" name="Name" />
                            </div>
                            <div className="fundation-message">
                                <span>学号: </span>
                                <input type="text" name="StudentID" />
                            </div>
                            <div className="fundation-message">
                                <span>本科院校: </span>
                                <input type="text" name="UndergraduateUniversity" />
                            </div>
                            <div className="fundation-message">
                                <span>本科专业: </span>
                                <input type="text" name="UndergraduateMajor" />
                            </div>
                            <div className="fundation-message">
                                <span>目标院校: </span>
                                <input type="text" name="TargetUniversity" />
                            </div>
                            <div className="fundation-message">
                                <span>目标专业: </span>
                                <input type="text" name="TargetMajor" />
                            </div>
                            <div className="fundation-message">
                                <span>绩点: </span>
                                <input type="text" name="GPA" />
                            </div>
                            <div className="fundation-message">
                                <span>排名: </span>
                                <input type="text" name="rank" />
                            </div>
                            <div className="fundation-message">
                                <span>四级成绩: </span>
                                <input type="text" name="cet4" />
                            </div>
                            <div className="fundation-message">
                                <span>六级成绩: </span>
                                <input type="text" name="cet6" />
                            </div>
                            <div className="fundation-message">
                                <span>托福成绩: </span>
                                <input type="text" name="tofel" />
                            </div>
                        </form>
                    </div> */}
                    <div id="grades" class="resume-contents">
                        <GradeList/>
                        <button className="resume-add">添加</button>
                    </div>
                    <div id="internship" class="resume-contents">
                        <InternshipList/>
                        <button className="resume-add">添加</button>
                    </div>
                    <div id="academic-experience" class="resume-contents">
                        <AcademicList/>
                        <button className="resume-add">添加</button>
                    </div>
                    <div id="honor" class="resume-contents">
                        <button className="resume-add">添加</button>
                        <HonorList/>
                    </div>
                </div>
                {/* <script src="./myScript.js"></script> */}
            </EmptyLayout>
        );
    }
}

class GradeList extends Component {


    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认删除该档案？");
    };

    render() {
        const tableConfig = [
            { key: 'gradeno', title: '编号', align: 'center' },
            { key: 'coursename', title: '课程名称', align: 'center' },
            { key: 'score', title: '成绩', align: 'center' },
            { key: 'gpa', title: '绩点', align: 'center' },
            { key: 'ismajor', title: '是否专业课', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', width: '200px', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>编辑</button>
                            <button className="delete_resume" onClick={() => this.bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        const tableData = [
            { gradeno: '001', coursename: '数据挖掘', score: '90', gpa: '4.0', ismajor: '是'},
            { gradeno: '002', coursename: '机器学习', score: '87', gpa: '3.7', ismajor: '是'},
            { gradeno: '003', coursename: '运筹学', score: '95', gpa: '4.0', ismajor: '是'},        ];
        return (
            <div>
                <Table config={tableConfig} data={tableData} />
            </div>
        );
    }
}

class InternshipList extends Component {


    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认删除该档案？");
    };

    render() {
        const tableConfig = [
            { key: 'internshipno', title: '编号', align: 'center' },
            { key: 'enterprise', title: '实习公司', align: 'center' },
            { key: 'department', title: '实习部门', align: 'center' },
            { key: 'job', title: '岗位', align: 'center' },
            { key: 'starttime', title: '开始时间', align: 'center' },
            { key: 'endtime', title: '结束时间', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>编辑</button>
                            <button className="delete_resume" onClick={() => this. bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        const tableData = [
            { internshipno: '01', enterprise: '普华永道', department: 'Finance', job: '审计师', starttime: '2020-01-13', endtime: '2020-03-07'},
            { internshipno: '02', enterprise: '优美缔', department: '研发', job: '软件工程师', starttime: '2020-07-29', endtime: '2020-01-29'},
        ];
        return (
            <div>
                <Table config={tableConfig} data={tableData} />
            </div>
        );
    }
}

class AcademicList extends Component {


    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认删除该档案？");
    };

    render() {
        const tableConfig = [
            { key: 'paperno', title: '编号', align: 'center' },
            { key: 'periodicalname', title: '期刊名称', align: 'center' },
            { key: 'papername', title: '发表论文/专利名称', align: 'center' },
            { key: 'publishtime', title: '发表时间', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>编辑</button>
                            <button className="delete_resume" onClick={() => this. bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        const tableData = [
            ];
        return (
            <div>
                <Table config={tableConfig} data={tableData} />
            </div>
        );
    }
}

class HonorList extends Component {


    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认删除该档案？");
    };

    render() {
        const tableConfig = [
            { key: 'honorno', title: '编号', align: 'center' },
            { key: 'awardname', title: '奖项名称', align: 'center' },
            { key: 'awarlevel', title: '奖项级别', align: 'center' },
            { key: 'awardrank', title: '奖项等级', align: 'center' },
            { key: 'issuingtime', title: '颁发时间', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>编辑</button>
                            <button className="delete_resume" onClick={() => this. bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        const tableData = [
            { honorno: '001', awardname: '中国计算机应用大赛', awarlevel: '国赛', awardrank: '一等奖', issuingtime: '2020-08-08'},
        ];
        return (
            <div>
                <Table config={tableConfig} data={tableData} />
            </div>
        );
    }
}