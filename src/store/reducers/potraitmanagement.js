import * as types from '../types';
import {concat, delById} from 'store/util';

const initialState = {
    tabValue: '基本信息',
    tabItems: [
        '基本信息',
        '成绩信息',
        '实习经历',
        '学术经历',
        '获奖情况',
    ],
    baseInfo: {
        name: '',
    },
    gradeList: [
        { id: '001', coursename: '数据挖掘', score: '90', gpa: '4.0', ismajor: '是' },
        { id: '002', coursename: '机器学习', score: '87', gpa: '3.7', ismajor: '是' },
        { id: '003', coursename: '运筹学', score: '95', gpa: '4.0', ismajor: '是' },
    ],
    internshipList: [
        { internshipno: '01', enterprise: '普华永道', department: 'Finance', job: '审计师', starttime: '2020-01-13', endtime: '2020-03-07' },
            { internshipno: '02', enterprise: '优美缔', department: '研发', job: '软件工程师', starttime: '2020-07-29', endtime: '2020-01-29' },
    ],
    academicList: [],
    honorList: [
        { honorno: '001', awardname: '中国计算机应用大赛', awarlevel: '国赛', awardrank: '一等奖', issuingtime: '2020-08-08' },
    ],
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.POTRAITMANAGEMENT_TAB_CHANGE:
            return {
                ...state,
                tabValue: payload.tabValue,
            };
        case types.POTRAITMANAGEMENT_ADD_GRADE:
            return {
                ...state,
                gradeList: concat(state.gradeList, payload.grade),
            }
        case types.POTRAITMANAGEMENT_DEL_GRADE:
            return {
                ...state,
                gradeList: delById(state.gradeList, payload.id)
            };
        default:
            return state;
    }
};
