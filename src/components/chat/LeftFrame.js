import './LeftFrame.css'
import React from "react";
import UserIcon from './UserIcon';
import Contacts from './Contacts';
import Menu from '../Menu';
import Input from '../Input';

class LeftFrame extends React.Component {
    render() {
        return (
            <div>
                <div className="left-header">
                    <UserIcon sex={'NB'} username={"test123"} />
                    <Menu color={'primary'} />
                </div>
                <Input />
                <Contacts className="contacts" />
            </div>
        )
    }
}

export default LeftFrame;

