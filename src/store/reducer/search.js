import { SEARCH_FOCUS, SEARCH_BLUR } from '../constant';

const search = (state = false, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      state = true;
      return state;
    case SEARCH_BLUR:
      state = false;
      return state;
    default:
      return state;
  }
};

export default search;
