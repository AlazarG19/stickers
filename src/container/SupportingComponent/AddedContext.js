import React from "react";

// set the defaults
const AddedContext = React.createContext({
  updated: false,
  setUpdated: () => {}
});

export default AddedContext;
