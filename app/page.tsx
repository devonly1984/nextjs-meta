import { ChatInput, MessageList } from "./Templates";

const HomePage = () => {
  return (
    <main>
      <MessageList />
      {/**Chat Input */}
      <ChatInput />
    </main>
  );
};

export default HomePage;
