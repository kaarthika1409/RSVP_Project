import React, { Component } from "react";

class RSVPForm extends Component {
  state = {
    name: "",
    email: "",
    attending: "Yes",
    eventname: "", // New field for event name
    date: "", // New field for date
    id: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.editItem !== this.props.editItem && this.props.editItem) {
      const { name, email, attending, eventname, date, id } = this.props.editItem;
      this.setState({ name, email, attending, eventname, date, id });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, attending, eventname, date, id } = this.state;
    if (!name || !email || !eventname || !date) return alert("Please fill in all fields.");
    this.props.onRSVP({ id, name, email, attending, eventname, date });
    this.setState({ name: "", email: "", attending: "Yes", eventname: "", date: "", id: null });
  };

  render() {
    const { name, email, attending, eventname, date } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        
        <input
          type="text"
          name="eventname"
          placeholder="Event Name"
          value={eventname}
          onChange={this.handleChange}
        />
        
        <input
          type="date"
          name="date"
          value={date}
          onChange={this.handleChange}
        />
        
        <label>
          Attending:
          <select name="attending" value={attending} onChange={this.handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        
        <button type="submit">{this.state.id ? "Update" : "Register"}</button>
      </form>
    );
  }
}

export default RSVPForm;
