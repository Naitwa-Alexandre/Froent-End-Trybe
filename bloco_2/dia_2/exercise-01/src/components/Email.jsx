import React, { Component } from 'react';

export default class Email extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        <input
        placeholder="E-Mail"
        name="email" 
        type="email"
        value={value}
        onChange={handleChange}
        />
      </label>
    );
  }
}