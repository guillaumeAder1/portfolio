import 'whatwg-fetch';
export const FETCHING = 'github/FETCHING';
export const FETCH_ALL_PROJECTS = 'github/FETCH_ALL_PROJECTS';

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
  return fetch('https://api.github.com/users/guillaumeAder1/repos')
    .then(response => {
      return response.text();
    })
    .then(res => {
      return JSON.parse(res);
    });
}
// export const increment = () => {
//     return dispatch => {
//         dispatch({
//             type: INCREMENT_REQUESTED
//         });

//         dispatch({
//             type: INCREMENT
//         });
//     };
// };

// export const incrementAsync = () => {
//     return dispatch => {
//         dispatch({
//             type: INCREMENT_REQUESTED
//         });

//         return setTimeout(() => {
//             dispatch({
//                 type: INCREMENT
//             });
//         }, 3000);
//     };
// };

// export const decrement = () => {
//     return dispatch => {
//         dispatch({
//             type: DECREMENT_REQUESTED
//         });

//         dispatch({
//             type: DECREMENT
//         });
//     };
// };

// export const decrementAsync = () => {
//     return dispatch => {
//         dispatch({
//             type: DECREMENT_REQUESTED
//         });

//         return setTimeout(() => {
//             dispatch({
//                 type: DECREMENT
//             });
//         }, 3000);
//     };
// };
