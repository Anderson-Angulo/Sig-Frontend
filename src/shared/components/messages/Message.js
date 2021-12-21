import PropTypes from 'prop-types';
import './Message.scss';
const Message = ({ messages, status = 'error' }) => {
  return (
    <div className={`message ${status}`}>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

Message.propTypes = {
  messages: PropTypes.array,
  status: PropTypes.string,
};

export default Message;
