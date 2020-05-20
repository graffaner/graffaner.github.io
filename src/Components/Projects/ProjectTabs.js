import React, {Component} from 'react';

import projectData from './projectData';

class Tabs extends Component {
    constructor() {
        super();

        this.state = {
            activeTab: 0,
            data: projectData
        }

        this.changeTabOnClick = this.changeTabOnClick.bind(this);
    }

    // Change tabs on click
    changeTabOnClick(index) {
        this.setState({
            activeTab: index
        });
    }

    render() {
        return (
            <div className="tabs-body">
                {/* Tab Header */}
                <TabHeader data={this.state.data}
                              click={this.changeTabOnClick}
                              activeId={this.state.activeTab} />
                {/* Tab Data */}
                <TabContent data={this.state.data}
                               activeId={this.state.activeTab} />
            </div>
        )
    }
}

class TabHeader extends React.Component {
    doClick(index, event) {
        this.props.click(index);
    }

    render() {
        let activeClass = this.props.activeId;

        let tabs = this.props.data.map((item, index) => {
            return <li className={(activeClass === index ? 'active' : '')}>
                        <a onClick={this.doClick.bind(this, index)} >
                            {/* The Span tilts the boxes */}
                            <span>
                                {/* div puts a new line (icon above title) */}
                                <div>
                                    <i className={item.icon}></i>
                                </div>
                                {item.name}
                            </span>
                        </a>
                    </li>
        });

        return (
            <ul className="tabs-header">{tabs}</ul>
        )
    }

}

class TabContent extends React.Component {
    render() {
        let activeClass = this.props.activeId;

        let content = this.props.data.map((item, index) => {
            return (
                <div className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} >
                    {/* <p>{item.text}</p> */}
                    {item.text}
                </div>
            )
        });

        return (
            <div className="tabs-content">{content}</div>
        );
    }
}

export default Tabs;