import { ActionType } from '../action-types';
import { Actions } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: RepositoriesState = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: true, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;