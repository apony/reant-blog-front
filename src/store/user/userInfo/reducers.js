const user = {
  userInfo: {
    name: 'apony'
  }
};

export default (state = user, action) => {
  switch(action.type) {
    case 'userInfo': return Object.assign({}, state, {
      userInfo: {...action.userInfo}
    });
    default: return state;
  }
};