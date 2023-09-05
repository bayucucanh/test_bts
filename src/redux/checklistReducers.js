const initialState = {
  dataChecklist: [],
};

const checklistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKLIST_SUCCESS':
      return {
        ...state,
        dataChecklist: action.payload,
      };
    default:
      return state;
  }
};

export default checklistReducer;
