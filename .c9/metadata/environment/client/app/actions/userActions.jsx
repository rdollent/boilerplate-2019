{"filter":false,"title":"userActions.jsx","tooltip":"/client/app/actions/userActions.jsx","undoManager":{"mark":9,"position":9,"stack":[[{"start":{"row":0,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["import { SET_CURRENT_USER } from './types';","","// userData = { username: string, expires: string }","export const loginUser = userData => (dispatch) => {","  const stringifiedData = JSON.stringify(userData);","","  localStorage.setItem('userData', stringifiedData);","","  dispatch({","    type: SET_CURRENT_USER,","    payload: userData","  });","};","","export const logoutUser = () => (dispatch) => {","  localStorage.removeItem('userData');","","  dispatch({","    type: SET_CURRENT_USER,","    payload: { username: '', expires: '' }","  });","};"],"id":1}],[{"start":{"row":2,"column":51},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["/"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":[" "],"id":3},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["s"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["e"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["t"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["t"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["i"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["n"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["g"]}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":[" "],"id":4},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["u"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["s"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["e"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":[" "],"id":5},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["i"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["n"]}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"remove","lines":["n"],"id":6},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"remove","lines":["i"]}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["d"],"id":7},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["a"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["t"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["a"]}],[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":[" "],"id":8},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["i"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["n"]}],[{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":[" "],"id":9},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["s"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["t"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["a"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["t"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["e"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["."]}],[{"start":{"row":3,"column":30},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":10}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":0},"end":{"row":4,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1565820202773,"hash":"dcb0ae6ba263723cf431a7047321e544b89b2d12"}