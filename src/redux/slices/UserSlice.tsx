import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../modules/services/auth';
import { ClientInterface } from '../interface/ClientInterface';

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const profile = await AuthService.getProfile();
      console.log(profile, 'supuestamente el perfil');
      return profile;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Error al obtener perfil');
    }
  }
);
interface UserState {
  profile: ClientInterface | null;
  loading: boolean;
  error: string;
}
const initialState: UserState = {
  profile:  null,
  loading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.profile = null;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearProfile } = userSlice.actions;
export default userSlice.reducer;
