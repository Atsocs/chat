import "./styles.css";
import TypingField from "../TypingField";
import UserIcon from "../UserIcon";
import React from "react";
import MessageBubble from "../MessageBubble";
import Menu from "../Menu";

const RightFrame = (props) => {
  if (!props.contactClicked) {
    return (
      <div className="right-frame-wrapper empty">
        <div className="right-header"></div>
        <div className="messages-field">
          Choose a contact to start chatting!
        </div>
      </div>
    );
  } else {
    const messages = props.conversation.messages.map((message, index) => {
      const isMyMessage = props.myUser._id === message.user;
      const user = props.conversation.users.find(
        (user) => user._id === message.user
      );
      return (
        <MessageBubble
          key={index}
          mine={isMyMessage}
          text={message.text}
          user={user}
        />
      );
    });

    return (
      <div className="right-frame-wrapper">
        <RightHeader title={props.conversation.name} />
        <div className="messages-field">{messages}</div>
        <div className="typing-field">
          <TypingField
            conversationId={props.conversation._id}
            myUser={props.myUser}
            handleMessagesChanged={props.pushMyMessage}
          />
        </div>
      </div>
    );
  }
};

const RightHeader = ({ title }) => (
  <div className="right-header">
    <UserIcon seed={title} />
    <span style={{ marginLeft: "0.5em" }} className="contact-title">
      {title}
    </span>
    <Menu items={items} />
  </div>
);

const items = [
  {
    name: "Logout",
    action: () => {
      localStorage.clear();
      window.location = "/";
    },
  },
];

export default RightFrame;
