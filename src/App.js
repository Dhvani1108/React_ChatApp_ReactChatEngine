import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './component/ChatFeed';
import './App.css';

const App = () => {
  return (
   <ChatEngine
   height = "100vh"
   projectID = "135e3950-bae4-42a8-98f0-4cdcd4f56adb"
   userName = "Admin"
   userSecret = "Admin@123" 
   renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}/>
  );
};

export default App;