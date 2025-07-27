import React, { useState, useRef, useEffect } from 'react';
import './Chat.css'; // Assuming you'll create a CSS file for styling

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    // Dummy data for initial messages (you'd fetch these from an API in a real app)
    useEffect(() => {
        setMessages([
            { id: 1, text: 'Hi there!', sender: 'other' },
            { id: 2, text: 'Hello! How can I help you?', sender: 'me' },
            { id: 3, text: 'I have a question about your service.', sender: 'other' },
        ]);
    }, []);

    // Scroll to the bottom of the chat messages whenever messages update
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault(); // Prevent page reload on form submission
        if (newMessage.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: Date.now(), text: newMessage.trim(), sender: 'me' },
            ]);
            setNewMessage(''); // Clear the input field
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h3>Chat Application</h3>
            </div>
            <div className="chat-messages">
                {messages.map((message) => (
                    <div key={message.id} className={`message ${message.sender}`}>
                        <div className="message-bubble">
                            {message.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} /> {/* For auto-scrolling */}
            </div>
            <form className="chat-input-form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="chat-input"
                />
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chat;