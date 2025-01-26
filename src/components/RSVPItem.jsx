import React from "react";

class RSVPItem extends React.Component {
  render() {
    const { rsvp, onCancel, onEdit } = this.props;
    const { id, name, email, attending, eventname, date } = rsvp;

    return (
      <div style={{ margin: "10px 0" }}>
        <p>
          <strong>Name:</strong> {name} <br />
          <strong>Email:</strong> {email} <br />
          <strong>Event Name:</strong> {eventname} <br />
          <strong>Date:</strong> {date} <br />
          <strong>Attending:</strong> {attending}
        </p>
        <button onClick={() => onEdit(rsvp)}>Edit</button>
        <button onClick={() => onCancel(id)}>Cancel</button>
      </div>
    );
  }
}

export default RSVPItem;
