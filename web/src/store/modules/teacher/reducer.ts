import produce from "immer";
const INITIAL_STATE = {
  teachers: [],
};

export default function teacher(state = INITIAL_STATE, action: any) {
  return produce(state, (draft: any) => {
    let { payload } = action;

    switch (action.type) {
      case "@teacher/INSERT_REQUEST": {
        break;
      }
      case "@teacher/INSERT_SUCCESS": {
        draft.teachers.push(payload.data);
        break;
      }
      case "@teacher/SELECTED_SUCCESS": {
        draft.selected = payload.data;
        break;
      }
      case "@teacher/UPDATE_REQUEST":
        break;
      case "@teacher/UPDATE_SUCCESS":
        draft = draft[payload.type].map((value: any) => {
          return value.id === payload.data.id ? payload.data : value;
        });
        break;
      case "@teacher/GET_SUCCESS": {
        draft = action.payload.data;
        break;
      }
      default:
    }
  });
}
