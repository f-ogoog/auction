"use client";

import { Slot } from "@/types/Slot";
import { Bet } from "@/types/bet";
import { User } from "@/types/user";
import React, { createContext, useContext, useEffect, useState } from "react";
import { set } from "react-hook-form";
import { io, Socket } from "socket.io-client";

interface WebSocketContextType {
  bets: Bet[];
  lot: Slot | null;
  users: User[];
  socket: Socket;
  isOwner: boolean;
}

const WebSocketContext = createContext<WebSocketContextType>({
  bets: [],
  lot: null,
  users: [],
  socket: {} as Socket,
  isOwner: false,
});

const useWebSocket = () => useContext(WebSocketContext);

interface WebSocketProviderProps {
  children: React.ReactNode;
  userId: string;
  auctionId: string;
  isOwner: boolean;
}

const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
  userId,
  auctionId,
  isOwner,
}) => {
  const [socket, setSocket] = useState<Socket>({} as Socket);
  const [bets, setBets] = useState<Bet[]>([]);
  const [lot, setLot] = useState<Slot | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const socketInstance = io("ws://localhost:3000/lot", {
      query: {
        auctionId,
        userId,
      },
    });
    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      socketInstance.on("currentLot", (data: { lot: Slot }) => {
        setLot(data.lot);
        console.log(data);
      });
      socketInstance.on("allBets", (data: Bet[]) => {
        setBets(data);
        console.log(data);
      });
      socketInstance.on("allUsers", (data: User[]) => {
        setUsers(data);
        console.log(data);
      });
      socketInstance.on("newUser", () => console.log("123"));
    });

    socketInstance.on("newBet", (data: Bet) => {
      setBets((prev) => [...prev, data]);
      console.log(data);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ bets, lot, users, socket, isOwner }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketProvider, useWebSocket };
