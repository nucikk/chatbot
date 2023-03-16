import React, { useEffect, useState } from 'react'
import "../Style/chat.css"
import SendeBtn from "../Image/Send-btn.svg"
import { MessageStatus } from '../Components/MessageStatus'
const HostChat = () => {
  const [hostMessage, setHostMessage] = useState("");
  const [messageSentHost, setMessageSent] = useState("");
  const [hostMessageHistory, setHostMessageHistory] = useState([]);
  const [frameMessage, setFrameMessage] = useState("");
  const [messageSentFrame, setMessageSentFrame] = useState("")
  const [frameMessageHistory, setFrameMessageHistory] = useState([]);

  const HostName = "host";
  const FrameName = "Frame";

  useEffect(() => {
    const savedMessage = localStorage.getItem("message");
    if (savedMessage) {
      setHostMessage(savedMessage);
    }
  }, []);

  useEffect(() => {
    const savedMessage = localStorage.getItem("message");
    if (savedMessage) {
      setFrameMessage(savedMessage);
    }
  }, []);

  const handleHostMessageChange = (e) => {
    setMessageSent(e.target.value);
  };

  const handleFameMessageChange = (e) => {
    setMessageSentFrame(e.target.value);
  };

  const handleSendClickHost = (e) => {
    e.preventDefault();
    if (messageSentHost.trim() !== "") {
      setHostMessage(messageSentHost);
      setMessageSent("");
      if (messageSentFrame.trim() !== "") {
        setHostMessageHistory(prevMessages => [...prevMessages, messageSentHost]);
        setFrameMessageHistory(prevMessages => [...prevMessages, messageSentFrame]);
      } else {
        setHostMessageHistory(prevMessages => [...prevMessages, messageSentHost]);
      }
      localStorage.setItem("message", messageSentHost);
    }
  };
  const handleSendClickFrame = (e) => {
    e.preventDefault();
    if (messageSentFrame.trim() !== "") {
      setFrameMessage(messageSentFrame);
      setMessageSentFrame("");
      setFrameMessageHistory(prevMessages => [...prevMessages, messageSentFrame]);
      if (messageSentHost.trim() !== "") {
        setHostMessageHistory(prevMessages => [...prevMessages, messageSentHost]);
      }
      localStorage.setItem("message", messageSentFrame);
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
                {hostMessageHistory.map((message, index) => (
                  <div className="notification_host" key={index}>
                    <p>{message}</p>
                  </div>
                ))}
              </div>
              <div className='frame_msg'>
                {frameMessageHistory.map((message, index) => (
                  <div className="notification_frame" key={index}>
                    <p>{message}</p>
                  </div>
                ))}
                <div className="input_box">

                  <input
                    className="msg_input"
                    type="text"
                    placeholder="Type a message"
                    value={messageSentHost}
                    onChange={handleHostMessageChange}
                  />
                  <button className="send_btn" type="submit" onClick={handleSendClickHost}><img src={SendeBtn} alt="send message icon" /></button>

                </div>
              </div>
            </div>
          </div>


          {/* add start Frame box */}
          <div className="message_content">
            <MessageStatus name={FrameName} />

            <div className="chat">
              <div className='host_msg'>

                {frameMessageHistory.map((message, index) => (
                  <div className="notification_frame" key={index}>
                    <p>{message}</p>
                  </div>
                ))}
              </div>

              <div className='frame_msg'>
                {hostMessageHistory.map((message, index) => (
                  <div className="notification_host" key={index}>
                    <p>{message}</p>
                  </div>
                ))}

                <div className="input_box">
                  <input
                    className="msg_input"
                    type="text"
                    placeholder="Type a message"
                    value={messageSentFrame}
                    onChange={handleFameMessageChange}
                  />
                  <button className="send_btn" type="submit" onClick={handleSendClickFrame}><img src={SendeBtn} alt="send message icon" /></button>
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