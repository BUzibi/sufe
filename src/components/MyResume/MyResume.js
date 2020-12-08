import React, { Component } from 'react';
import './MyResume.scss';
// import './myScript.js';
import EmptyLayout from 'layouts/EmptyLayout';
import Table from 'components/Table/Table';
import Tabs from 'components/Tabs/Tabs';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tabChange, addGrade, delGrade } from 'store/actions/potraitmanagement';


@connect(state => ({
    tabValue: state.potraitmanagement.tabValue,
    tabItems: state.potraitmanagement.tabItems,
}), dispatch => ({
    tabChange: (tabValue) => dispatch(tabChange({ tabValue }))
}))
class MyResume extends Component {
    static propTypes = {
        tabValue: PropTypes.string,
        tabItems: PropTypes.array,

        tabChange: PropTypes.func,
    };

    render() {
        const { tabItems, tabValue, tabChange } = this.props;
        return (
            <EmptyLayout className='myresume'>
                <Tabs value={tabValue} items={tabItems} onChange={(e, item) => tabChange(item)}>
                    <div id="fundation" class="resume-contents">
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
                                <input type="text" name="UndergraduateSchool" />
                            </div>
                            <div className="fundation-message">
                                <span>本科专业: </span>
                                <input type="text" name="UndergraduateMajor" />
                            </div>
                            <div className="fundation-message">
                                <span>目标院校: </span>
                                <input type="text" name="TargetSchool" />
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
                    </div>
                    <GradeList />
                    <div id="internship" class="resume-contents">
                        <InternshipList />
                    </div>
                    <div id="academic-experience" class="resume-contents">
                        <AcademicList />
                    </div>
                    <div id="honor" class="resume-contents">
                        <HonorList />
                    </div>
                </Tabs>
                {/* <script src="./myScript.js"></script> */}
            </EmptyLayout>
        );
    }
}

@connect(state => ({
    gradeList: state.potraitmanagement.gradeList,
}), dispatch => ({
    addGrade: (form) => dispatch(addGrade(form)),
    delGrade: (id) => dispatch(delGrade(id))
}))
class GradeList extends Component {
    static propTypes = {
        gradeList: PropTypes.array,

        addGrade: PropTypes.func,
    };

    bClick = (item) => {
        const {delGrade} = this.props;
        alert("确认删除该档案？");
        delGrade(item.id);
    };

    addGrade = (item) => {
        const {addGrade} = this.props;
        alert("确认添加？");
        addGrade(item);
    };

    render() {
        const {gradeList} = this.props;
        const tableConfig = [
            { key: 'id', title: '编号', align: 'center' },
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
        const item = { id: '004', coursename: '运筹学', score: '95', gpa: '4.0', ismajor: '是' };
        console.log(gradeList, 233)
        return (
            <div>
                <Table config={tableConfig} data={gradeList} rowKey='id'/>
                <button className="resume-add" onClick={() => this.addGrade(item)}>添加</button>
            </div>
        );
    }
}

@connect(state => ({
    internshipList: state.potraitmanagement.internshipList,
}), dispatch => ({}))
class InternshipList extends Component {
    static propTypes = {
        internshipList: PropTypes.array,
    };

    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认删除该档案？");
    };

    render() {
        const {internshipList} = this.props;
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
                            <button className="delete_resume" onClick={() => this.bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        return (
            <div>
                <Table config={tableConfig} data={internshipList}/>
                <button className="resume-add">添加</button>
            </div>
        );
    }
}

@connect(state => ({
    academicList: state.potraitmanagement.academicList,
}), dispatch => ({}))
class AcademicList extends Component {
    static propTypes = {
        academicList: PropTypes.array,
    };

    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认删除该档案？");
    };

    render() {
        const {academicList} = this.props;
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
                            <button className="delete_resume" onClick={() => this.bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        return (
            <div>
                <Table config={tableConfig} data={academicList} />
                <button className="resume-add">添加</button>
            </div>
        );
    }
}

@connect(state => ({
    honorList: state.potraitmanagement.honorList,
}), dispatch => ({}))
class HonorList extends Component {
    static propTypes = {
        honorList: PropTypes.array,
    };

    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认删除该档案？");
    };

    render() {
        const {honorList} = this.props;
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
                            <button className="delete_resume" onClick={() => this.bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        return (
            <div>
                <Table config={tableConfig} data={honorList} />
                <button className="resume-add">添加</button>
            </div>
        );
    }
}

export default MyResume;