"use client";

import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../../typings";
import useSWR from "swr";
import fetcher from "../../utils/fetchMessages";
const ChatInput = () => {
  const [input, setInput] = useState("");
  const { data, error, mutate } = useSWR("/api/getMessages", fetcher);
  console.log("SWR call", data);
  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const messageToSend = input;
    const id = uuid();
    setInput("");
    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Elon Musk",
      profilePic: "https://links.papareact.com/jne",
      email: "test@test.com",
    };
    const uploadMessagetoUpStash = async () => {
      const res = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      console.log("Message Added >>>>", data);
    };
    uploadMessagetoUpStash();
  };
  return (
    <form
      onSubmit={addMessage}
      className="flex px-10 space-x-2 border-t border-gray-100 py-5 fixed bottom-0 z-50 w-full"
    >
      <input
        className="flex-1 rounded border border-gray=300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        placeholder="Enter message here..."
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
