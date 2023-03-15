import NextIcon from "../Image/next-Icon.svg"

export const MessageStatus = ({name}) => {
 return (
   <div className="message_status">
     <mark className='message_name'>{name}</mark>
     <div className="next_page">
       <p className="next_frame">Frame Next</p>
       <img className="next_icon" src={NextIcon} alt="Next Icon" />
     </div>
   </div>
 );
};