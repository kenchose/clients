import React from "react";

class GoogleAuth extends React.Component {
	state = { isSignedIn: null };
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"140264526789-9gdv4f3ldm7c44e09100blcj9pgad6d0.apps.googleusercontent.com",
					scope: "email",
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
				});
		});
	}

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div>I don't know if im signed in</div>;
		} else if (this.state.isSignedIn) {
			return <div>Signed in!!!</div>;
		} else {
			return <div>Not singed in</div>;
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;
