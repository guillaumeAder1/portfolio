import 'whatwg-fetch';
export const FETCHING = 'github/FETCHING';
export const FETCH_ALL_PROJECTS = 'github/FETCH_ALL_PROJECTS';
const github = {
  allprojects: 'https://api.github.com/users/guillaumeAder1/repos',
  readme: '/repos/:owner/:repo/readme'
};

const initialState = {
  fetching: false,
  projects: [],
  selected: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true
      };
    case FETCH_ALL_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
};
export const fetchdata = type => {
  return dispatch => {
    dispatch({
      type: FETCHING
    });
    getAllProject().then(res => {
      dispatch({
        type: FETCH_ALL_PROJECTS,
        payload: res
      });
    });
  };
};
export function getAllProject() {
  return fetch(github.allprojects)
    .then(response => {
      return response.text();
    })
    .then(res => {
      return JSON.parse(res);
    });
}
export function getReademe(file) {
  return fetch(github.allprojects)
    .then(response => {
      return response.text();
    })
    .then(res => {
      return JSON.parse(res);
    });
}
