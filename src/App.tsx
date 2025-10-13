import "./index.css";
import { useState, useRef, useEffect } from "react";
import { InputGroup, InputGroupAddon, InputGroupTextarea, InputGroupButton } from "@/components/ui/input-group";
import { ArrowUpIcon } from "@/components/ui/icons/lucide-arrow-up";
import { PlusIcon } from "@/components/ui/icons/lucide-plus";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<WebSocket | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Create WebSocket connection only once
    const socket = new WebSocket("ws://localhost:3000/chat");
    socketRef.current = socket;

    // socket opened
    socket.addEventListener("open", (event) => {
      console.log("WebSocket connected", event);
      setIsConnected(true);
    });

    // message is received
    socket.addEventListener("message", (event) => {
      console.log("Message received:", event.data);
      try {
        const data = JSON.parse(event.data);

        if (data.type === "connected") {
          console.log("Connection confirmed at:", new Date(data.timestamp));
        } else if (data.type === "error") {
          console.error("Server error:", data.message);
          setIsTyping(false);
        } else if (data.type === "message") {
          // Handle incoming assistant message
          const assistantMessage: Message = {
            id: Date.now().toString(),
            role: "assistant",
            content: data.content,
          };
          setMessages((prev) => [...prev, assistantMessage]);
          setIsTyping(false);
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    });

    // socket closed
    socket.addEventListener("close", (event) => {
      console.log("WebSocket disconnected", event.code, event.reason);
      setIsConnected(false);
      setIsTyping(false);
    });

    // error handler
    socket.addEventListener("error", (event) => {
      console.error("WebSocket error:", event);
      setIsConnected(false);
      setIsTyping(false);
    });

    // Cleanup function to close socket when component unmounts
    return () => {
      // Close socket regardless of its state to prevent duplicates in StrictMode
      if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING) {
        socket.close();
      }
    };
  }, []); // Empty dependency array ensures this runs only once


  const handleSendMessage = () => {
    if (!inputValue.trim() || !isConnected) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setInputValue("");

    // Send message through WebSocket
    socketRef.current?.send(JSON.stringify({
      type: "message",
      content: inputValue,
      timestamp: Date.now(),
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border/40 py-4 px-6 flex items-center justify-between">
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex animate-in fade-in-50 slide-in-from-bottom-2 duration-500",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "flex flex-col gap-2",
                  message.role === "user" ? "items-end max-w-[80%]" : "w-full"
                )}
              >
                <div
                  className={cn(
                    "px-4 py-1.5 text-[14px] leading-relaxed",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-2xl"
                      : "bg-transparent text-foreground"
                  )}
                >
                  <p className="whitespace-pre-wrap break-words">{message.content}</p>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
              <div className="flex items-center gap-1.5 bg-muted rounded-lg px-4 py-2.5">
                <div className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Footer */}
      <div className="border-t border-border/40 p-4">
        <div className="max-w-4xl mx-auto">
          <InputGroup className="rounded-xl">
            <InputGroupTextarea
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isTyping}
              rows={1}
              className="min-h-[2.5rem] max-h-32 text-[15px] w-[calc(100%-0.2rem)] mx-auto"
            />
            <InputGroupAddon align="block-end">
              <InputGroupButton
                onClick={() => console.log("Attachment clicked")}
                variant="outline"
                size="icon-sm"
                className="rounded-md"
              >
                <PlusIcon className="size-5" />
                <span className="sr-only">Attach file</span>
              </InputGroupButton>
              <InputGroupButton
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                variant="default"
                size="icon-sm"
                className="rounded-md flex items-center justify-center ml-auto"
              >
                <ArrowUpIcon className="size-5" />
                <span className="sr-only">Send</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
