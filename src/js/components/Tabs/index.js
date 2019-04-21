import React, { Component, Fragment } from 'react';
import Tab from '../Tab';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
    this.onClickTabItem = this.onClickTabItem.bind(this);
  }

  onClickTabItem (tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <Fragment>
        <div className='tabs is-large'>
          <ul>
            {children.map((child) => {
              const { label } = child.props;
              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              );
            })}
          </ul>
        </div>
        <div className='tab-content'>
          {children.map((child) => {
            if (child.props.label !== activeTab) {
              return <section key={`active-pane-${child.props.label}`}>{child.props.children}</section>;
            } else {
              return <section key={`pane-${child.props.label}`} className='is-active'>{child.props.children}</section>;
            }
          })}
        </div>
      </Fragment>
    );
  }
}