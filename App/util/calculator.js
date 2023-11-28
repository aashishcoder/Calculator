/*export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null
  };
  
  export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
      return { currentValue: `${value}` };
    }
  
    return {
      currentValue: `${state.currentValue}${value}`
    };
  };
  
  export const handleEqual = state => {
    const { currentValue, previousValue, operator } = state;
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {
      operator: null,
      previousValue: null
    };
  
    if (operator === "/") {
      return {
        currentValue: previous / current,
        ...resetState
      };
    }
  
    if (operator === "*") {
      return {
        currentValue: previous * current,
        ...resetState
      };
    }
  
    if (operator === "+") {
      return {
        currentValue: previous + current,
        ...resetState
      };
    }
  
    if (operator === "-") {
      return {
        currentValue: previous - current,
        ...resetState
      };
    }
  
    return state;
  };
  
  const calculator = (type, value, state) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "operator":
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0"
        };
      case "equal":
        return handleEqual(state);
      case "clear":
        return initialState;
      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`
        };
      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`
        };
      default:
        return state;
    }
  };
  
  export default calculator; */
  export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null
  };
  
  export const handleNumber = (value, state) => {
    if (state.currentValue === "0" && state.operator !== "%") {
      return { currentValue: `${value}` };
    }
  
    if (state.operator === "%") {
      // Handle percentage input without entering a number
      return {
        currentValue: "0.01"
      };
    }
  
    return {
      currentValue: `${state.currentValue}${value}`
    };
  };
  
  export const handleEqual = (state) => {
    const { currentValue, previousValue, operator } = state;
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {
      operator: null,
      previousValue: null
    };
  
    if (operator === "/") {
      return {
        currentValue: current !== 0 ? previous / current : "Error",
        ...resetState
      };
    }
  
    if (operator === "*") {
      return {
        currentValue: previous * current,
        ...resetState
      };
    }
  
    if (operator === "+") {
      return {
        currentValue: previous + current,
        ...resetState
      };
    }
  
    if (operator === "-") {
      return {
        currentValue: previous - current,
        ...resetState
      };
    }
  
    return state;
  };
  
  const calculator = (type, value, state) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "operator":
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0"
        };
      case "equal":
        return handleEqual(state);
      case "clear":
        return initialState;
      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`
        };
      case "percentage":
        // If there's an ongoing calculation, use the percentage of the previous value
        const percentValue = state.operator ? state.previousValue : state.currentValue;
        return {
          currentValue: `${parseFloat(percentValue) * 100}`
        };
      default:
        return state;
    }
  };
  
  export default calculator;
  
  
  