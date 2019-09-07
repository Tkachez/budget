import React, {Component} from 'react';
import './Header.module.css'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggled: true
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = () => {
        this.setState(state => ({
            isToggled: !state.isToggled
        }));
    };

    render() {
        return (
            <header className="header">
                This is Header!
                <button
                    onClick={this.handleClick}>
                    {this.state.isToggled ? 'Click' : 'Clicked'}
                </button>
            </header>
        );
    };
}

export default Header;