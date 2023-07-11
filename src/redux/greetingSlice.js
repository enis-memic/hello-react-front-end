import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'messages/fetchGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/api/messages');
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return 'fails';
    }
    return data;
  }
);

const initialState = {
  messages: '',
  isLoading: true,
};

export const GreetingSlice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        messages: action.payload.greeting,
      }))
      .addCase(fetchGreeting.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});
export default GreetingSlice.reducer;
