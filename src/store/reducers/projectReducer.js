const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "bla bla bla" },
    { id: "2", title: "find some eggs", content: "ehfuhzuhurt" },
    { id: "3", title: "help me find hearts", content: "ehfuhzuhurt" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
