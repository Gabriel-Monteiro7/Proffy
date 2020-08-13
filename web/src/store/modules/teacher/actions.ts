export function insertRequest(data: any) {
  return {
    type: "@teacher/INSERT_REQUEST",
    payload: { data },
  };
}

export function insertSuccess(data: any) {
  return {
    type: "@teacher/INSERT_SUCCESS",
    payload: { data},
  };
}

export function selectedSuccess(data: any) {
  return {
    type: "@teacher/SELECTED_SUCCESS",
    payload: { data },
  };
}
export function updateRequest(data: any) {
  return {
    type: "@teacher/UPDATE_REQUEST",
    payload: { data},
  };
}

export function updateSuccess(data: any) {
  return {
    type: "@teacher/UPDATE_SUCCESS",
    payload: { data},
  };
}

export function getRequest(type: any) {
  return {
    type: "@teacher/GET_REQUEST",
    payload: { type },
  };
}

export function getSuccess(data: any, type: any) {
  return {
    type: "@teacher/GET_SUCCESS",
    payload: { type, data },
  };
}
