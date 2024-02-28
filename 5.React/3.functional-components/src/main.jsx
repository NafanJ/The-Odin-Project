// Filename - index.js

import React from "react";
import ReactDOM from "react-dom";
import Example from "./App";
import Counter from "./Counter";

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<Example />
		<Counter />
	</React.StrictMode>
);
