import { infoActionTypes } from '../constants/infoActionTypes';

const defaultState = {
    modalOpen: false,
    modalTitle: 'Title',
    modalDescription: 'Description'
}

export default function infoReducer( state: any = defaultState, action: { type: string; payload: any }) {
    switch (action.type) {
        case infoActionTypes.SET_MODAL_VISIBLE:
            return { ...state, modalOpen: true };
        case infoActionTypes.SET_MODAL_HIDDEN:
            return { ...state, modalOpen: false };
        default:
            return state;
    }
}