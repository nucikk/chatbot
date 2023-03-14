import React, { useEffect, useState } from 'react'
import "../Style/chat.css"
// import NextIcon from "../Image/next-Icon.svg"
import SendeBtn from "../Image/Send-btn.svg"
import { MessageStatus } from '../Components/MessageStatus'
const HostChat = () => {
  const [hostMessage, setHostMessage] = useState("");
  const [messageSent, setMessageSent] = useState("");
  const [newMessages, setNewMessages] = useState([]);

  const HostName = "host";
  const FrameName = "Frame";

  useEffect(() => {
    const savedMessage = localStorage.getItem("message");
    if (savedMessage) {
      setHostMessage(savedMessage);
    }
  }, []);

  const handleHostMessageChange = (e) => {
    setMessageSent(e.target.value);
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    if (messageSent.trim() !== "") { // შამოწმებს რომ ცარიელი მესიჯი არ გაიგზავნოს
      setHostMessage(messageSent);
      setMessageSent("");
      setNewMessages(prevMessages => [...prevMessages, messageSent])
      localStorage.setItem("message", messageSent);
    }
  };

  return (
    <>
      <div className="chat_container">
        <div className="message_box">

          <div className="message_content">
            <MessageStatus name={HostName} />

            <div className="chat">
              <div className='host_msg'>
                {newMessages.map((message, index) => (
                  <div className="notification_host" key={index}>
                    <p>{message}</p>
                  </div>
                ))}
              </div>
              <div className='frame_msg'>
                <div className="notification_frame">
                  Lorem, ipsum.
                </div>
                <div className="input_box">

                  <input
                    className="msg_input"
                    type="text"
                    placeholder="Type a message"
                    value={messageSent}
                    onChange={handleHostMessageChange}
                  />
                  <button className="send_btn" type="submit" onClick={handleSendClick}><img src={SendeBtn} alt="send message icon" /></button>

                </div>
              </div>
            </div>
          </div>


          {/* add start Frame box */}
          <div className="message_content">
            <MessageStatus name={FrameName} />

            <div className="chat">
              <div className='host_msg'>
                <div className="notification_frame">
                  Lorem, ipsum.
                </div>


              </div>
              <div className='frame_msg'>
                {newMessages.map((message, index) => (
                  <div className="notification_host" key={index}>
                    <p>{message}</p>
                  </div>
                ))}
                <div className="input_box">
                  <input
                    className="msg_input"
                    type="text"
                    placeholder="Type a message"
                    value={messageSent}
                    onChange={handleHostMessageChange}
                  />
                  <button className="send_btn" type="submit" onClick={handleSendClick}><img src={SendeBtn} alt="send message icon" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default HostChat