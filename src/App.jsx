import React, { Component } from "react";
import RSVPForm from "./components/RSVPForm";
import RSVPList from "./components/RSVPList";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

class App extends Component {
  state = {
    isLoggedIn: false,
    isSigningUp: false,
    rsvps: [],
    editItem: null,
  };

  handleRSVP = (rsvp) => {
    this.setState((prevState) => {
      const existingIndex = prevState.rsvps.findIndex((item) => item.id === rsvp.id);
      if (existingIndex > -1) {
        const updated = [...prevState.rsvps];
        updated[existingIndex] = rsvp;
        return { rsvps: updated, editItem: null };
      }
      return { rsvps: [...prevState.rsvps, { ...rsvp, id: Date.now() }], editItem: null };
    });
  };

  handleCancel = (id) => {
    this.setState((prevState) => ({
      rsvps: prevState.rsvps.filter((item) => item.id !== id),
    }));
  };

  handleEdit = (rsvp) => {
    this.setState({ editItem: rsvp });
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  handleSignup = () => {
    this.setState({ isSigningUp: false, isLoggedIn: true });
  };

  toggleSignup = () => {
    this.setState((prevState) => ({ isSigningUp: !prevState.isSigningUp }));
  };

  render() {
    const { isLoggedIn, isSigningUp, rsvps, editItem } = this.state;

    if (!isLoggedIn) {
      return isSigningUp ? (
        <SignupPage onSignup={this.handleSignup} onSwitchToLogin={this.toggleSignup} />
      ) : (
        <LoginPage onLogin={this.handleLogin} onSwitchToSignup={this.toggleSignup} />
      );
    }

    return (
      <div>
        <h1>Event RSVP</h1>
        
        <RSVPForm onRSVP={this.handleRSVP} editItem={editItem} />
        <RSVPList rsvps={rsvps} onCancel={this.handleCancel} onEdit={this.handleEdit} />
        <div><button onClick={this.handleLogout}>Logout</button></div>
      </div>
    );
  }
}

export default App;
