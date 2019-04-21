import React, { Component } from 'react';

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.changeActiveTab = this.changeActiveTab.bind(this);
  }

  changeActiveTab () {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { changeActiveTab, props: {activeTab, label}} = this;
    let className = 'tab-list-item';
    if (activeTab === label) {
      className += ' is-active';
    }

    return (
      <li className={className} onClick={changeActiveTab}>
        <a>{label}</a>
      </li>
    );
  }
}