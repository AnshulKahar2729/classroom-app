import React, { useRef, useState } from "react";
import "./Chat.css";

const ws = new WebSocket("ws://localhost:8080");
const Chat = () => {
  const messageRef = useRef("");
  const messagesDivRef = useRef(null);

  const showMessage = (text, isMineParam) => {
    const messagesDiv = messagesDivRef.current;

    messagesDiv.innerHTML += `  <div class="message-row ${
      isMineParam ? "mine" : "their"
    }">
    <div class="bubble">${text}</div>
</div>`;
  };

  ws.addEventListener("message", (event) => {
    event.data.text().then((text) => {
      showMessage(text, false);
    });
  });

  //  this works good
  const handleSubmit = (event) => {
    event.preventDefault();
    const message = messageRef.current.value;
    ws.send(message);
    messageRef.current.value = "";
    showMessage(message, true);
  };

  return (
    <>
      <div className="chat-container">
        <h1 className="chat-title">Chat-Section</h1>
        <div className="messages" ref={messagesDivRef}></div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            ref={messageRef}
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default Chat;
