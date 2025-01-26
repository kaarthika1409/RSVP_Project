import React, { Component } from "react";
import RSVPItem from "./RSVPItem";

class RSVPList extends Component {
  render() {
    const { rsvps, onCancel, onEdit } = this.props;

    return (
      <div>
        <h2>RSVP List</h2>
        {rsvps.length === 0 ? (
          <p>No RSVPs yet!</p>
        ) : (
          rsvps.map((item) => (
            <RSVPItem
              key={item.id}
              rsvp={item}
              onCancel={onCancel}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    );
  }
}

export default RSVPList;
