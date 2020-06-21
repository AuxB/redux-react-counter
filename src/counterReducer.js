const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "ADD_ONE":
        return state + 1;
      case "ADD_TEN":
        return state + 10;
      case "REMOVE_ONE":
        return state - 1;
      case "REMOVE_TEN":
        return state - 10;
      case "RESET":
        return (state = 0);
      default:
        return state;
    }
  };

  export default counterReducer