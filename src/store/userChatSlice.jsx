
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// --- Auth headers helper ---
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// --- Thunks ---
export const fetchChatHistory = createAsyncThunk(
  "chat/fetchHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/user/history`,
        getAuthHeaders()
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch chat history");
    }
  }
);

export const sendMessageToAdmin = createAsyncThunk(
  "chat/sendMessage",
  async ({ message }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/user/send`,
        {
          content: message,
          recipient_id: "admin_1",
        },
        getAuthHeaders()
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to send message");
    }
  }
);

// --- WebSocket setup ---
let socket = null;

export const initializeWebSocket = (userId) => (dispatch) => {
  const token = localStorage.getItem("token");
  console.log("token is:", token);
  if (!token) return;

  socket = new WebSocket(
    `ws://localhost:8000/ws/user?token=${encodeURIComponent(token)}`
  );

  socket.onopen = () => {
    console.log("🟢 WebSocket connected");
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "chat_message") {
      dispatch(
        addLocalMessage({
          content: data.content,
          sender_id: data.sender_id,
          recipient_id: userId,
          timestamp: data.timestamp,
        })
      );
    }
  };

  socket.onerror = (err) => {
    console.error("WebSocket error:", err);
  };
  socket.onclose = (event) => {
    console.warn(
      `🔴 WebSocket closed. Code: ${event.code}, Reason: ${event.reason}`
    );

    // Optional: try reconnecting after 5 seconds
    setTimeout(() => {
      if (userId) dispatch(initializeWebSocket(userId));
    }, 5000);
  };
};

export const sendWebSocketMessage = (message) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ type: "chat_message", content: message }));
  } else {
    console.warn("WebSocket is not open. Message not sent.");
  }
};

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {
    addLocalMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChatHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = [...action.payload].sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );
      })
      .addCase(fetchChatHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(sendMessageToAdmin.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      });
  },
});

export const { addLocalMessage } = chatSlice.actions;
export default chatSlice.reducer;
