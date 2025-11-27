import { createContext, useContext, useEffect, useState } from 'react';

const SocketContext = createContext();

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within SocketProvider');
  }
  return context;
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Mock socket connection
    const mockSocket = {
      emit: (event, data) => {
        console.log('Socket emit:', event, data);
      },
      on: (event, callback) => {
        console.log('Socket listening:', event);
      },
      off: (event, callback) => {
        console.log('Socket off:', event);
      },
      disconnect: () => {
        setConnected(false);
      }
    };

    setSocket(mockSocket);
    setConnected(true);

    return () => {
      mockSocket.disconnect();
    };
  }, []);

  const value = {
    socket,
    connected,
    emit: (event, data) => socket?.emit(event, data),
    on: (event, callback) => socket?.on(event, callback),
    off: (event, callback) => socket?.off(event, callback)
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};