import './LeftFrame.css'
import React from "react";
import UserIcon from './UserIcon';
import Contacts from './Contacts';

class LeftFrame extends React.Component {
    menuIconClicked(e) {
        let mi = document.getElementById('menu-icon');
        mi.classList.toggle("active")
    }

    render() {
        return (
            <div>
                <div className="left-header">
                    <UserIcon sex={'NB'} username={"test123"} />
                    <div id="menu-icon" className="menu-icon" onClick={this.menuIconClicked}>
                        <div className="kebab">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <div className="search-bar-wrapper">
                    <div className="search-bar">
                        Barra de pesquisa
                    </div>
                    <hr />
                </div>
                <Contacts className="contacts" />
            </div>
        )
    }
}

export default LeftFrame;

