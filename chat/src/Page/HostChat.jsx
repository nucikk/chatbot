import React, { useState } from 'react'
import "../Style/chat.css"
// import NextIcon from "../Image/next-Icon.svg"
import SendeBtn from "../Image/Send-btn.svg"
import { MessageStatus } from '../Components/MessageStatus'
const HostChat = () => {
  const [hostMessage, setHostMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const HostName = "host"
  const FrameName = "Frame"

  const handleHostMessageChange = (e) => {
    setHostMessage(e.target.value);
  };

  const handleSendClick = (e) => {
    setMessageSent(true);
    setHostMessage('');
  };
  return (
    <>
      <div className="chat_container">
        <div className="message_box">

          <div className="message_content">
            <MessageStatus name={HostName} />

            <div className="chat">
              <div className='host_msg'>
                <div className="notification_host">
                  {messageSent && <p>{hostMessage}</p>}
                </div>
              </div>
              <div className='frame_msg'>
                <div className="notification_frame">
                  Lorem, ipsum.
                </div>
                <div className="input_box">
                  <input className="msg_input" type="text" placeholder="Type a message" value={hostMessage} onChange={handleHostMessageChange} />
                  <img className="send_btn" src={SendeBtn} alt="send message icon" onClick={handleSendClick} />
                </div>
              </div>

            </div>
          </div>


          {/* add start Frame box */}
          <div className="message_content">
            <MessageStatus name={FrameName} />

            <div className="chat">
              <div className='host_msg'>
                <div className="notification_host">Lorem, ipsum dolor.</div>
              </div>
              <div className='frame_msg'>
                <div className="notification_frame">
                  Lorem, ipsum.
                </div>

                <div className="input_box">
                  <input className="msg_input" type="text" placeholder="Type a message" />
                  <img className="send_btn" src={SendeBtn} alt="send message icon" />
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