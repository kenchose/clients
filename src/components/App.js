import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
	return (
		<div className="ui container">
			<Router>
				<Header />
				<Route exact path="/" component={StreamList}></Route>
				<Route path="/streams/new" component={StreamCreate}></Route>
				<Route path="/streams/edit" component={StreamEdit}></Route>
				<Route path="/streams/delete" component={StreamDelete}></Route>
				<Route path="/streams/show" component={StreamShow}></Route>
			</Router>
		</div>
	);
};

export default App;
