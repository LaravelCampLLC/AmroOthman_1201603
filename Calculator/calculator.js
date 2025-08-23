document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");

  let current = "0";
  let previous = null;
  let operator = null;
  let overwrite = false;
  let errorState = false;   

  const updateDisplay = (v) => (display.textContent = v);

  const clearAll = () => {
    current = "0";
    previous = null;
    operator = null;
    overwrite = false;
    errorState = false;
    updateDisplay(current);
  };

  const inputDigit = (d) => {
    if (errorState) return; 
    if (overwrite) {
      current = d;
      overwrite = false;
    } else {
      current = current === "0" ? d : current + d;
    }
    updateDisplay(current);
  };

  const inputDot = () => {
    if (errorState) return;
    if (overwrite) {
      current = "0.";
      overwrite = false;
    } else if (!current.includes(".")) {
      current += ".";
    }
    updateDisplay(current);
  };

  const compute = (a, b, op) => {
    const x = Number(a), y = Number(b);
    switch (op) {
      case "+": return x + y;
      case "−":
      case "-": return x - y;
      case "×":
      case "*": return x * y;
      case "÷":
      case "/": return y === 0 ? "Error" : x / y;
      default:  return y;
    }
  };

   

  const setOperator = (op) => {
    if (errorState) return;
    if (operator && !overwrite) {
      const result = compute(previous, current, operator);
      if (result === "Error") {
        updateDisplay("Error");
        errorState = true;
        return;
      }
      previous = String(result);
      updateDisplay(previous);
      current = "0";
    } else {
      previous = current;
    }
    operator = op;
    overwrite = true;
  };

  const equals = () => {
    if (errorState || !operator || previous === null) return;
    const result = compute(previous, current, operator);
    if (result === "Error") {
      updateDisplay("Error");
      errorState = true;
      return;
    }
    const out = String(result);
    updateDisplay(out);
    current = out;
    previous = null;
    operator = null;
    overwrite = true;
  };

  const onButton = (btn) => {
    const action = btn.getAttribute("data-action");
    if (action === "digit") return inputDigit(btn.textContent.trim());
    if (action === "dot") return inputDot();
    if (action === "clear") return clearAll();
    if (action === "op") return setOperator(btn.getAttribute("data-op") || btn.textContent.trim());
    if (action === "equals") return equals();
  };

  const keys = document.querySelector(".keys");
  if (keys) {
    keys.addEventListener("click", (e) => {
      const btn = e.target.closest("button.btn");
      if (btn) onButton(btn);
    });
  }

  updateDisplay(current);
});