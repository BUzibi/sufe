import * as types from 'store/types';


export const tabChange = ({ tabValue }) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_TAB_CHANGE,
            payload: { tabValue },
        });
    };
};

export const addGrade = (form) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_ADD_GRADE,
            payload: { grade: form },
        });
    };
};

export const delGrade = (id) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_DEL_GRADE,
            payload: { id },
        });
    };
};

export const addInternship = ({ tabValue }) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_TAB_CHANGE,
            payload: { tabValue },
        });
    };
};

export const addAcadamic = ({ tabValue }) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_TAB_CHANGE,
            payload: { tabValue },
        });
    };
};

export const addHonor = ({ tabValue }) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_TAB_CHANGE,
            payload: { tabValue },
        });
    };
};