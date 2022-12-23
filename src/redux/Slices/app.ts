import {LanguageProps} from '@interfaces';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Track} from 'react-native-track-player';
import {RootState} from '../rootReducer';
export interface appState {
  first_open: boolean;
  track: Track;
  favorite_podcast: Array<Track>;
  favorite_radio: Array<Track>;
  nation: string;
  language: LanguageProps;
  showFullAds: number;
}

const initialState: appState = {
  first_open: true,
  track: {
    id: 6,
    nation: '',
    url: '',
    title: '',
    artwork: '',
    artist: '',
    duration: 0,
    description: '',
    date: '',
  },
  favorite_podcast: [],
  favorite_radio: [],
  nation: '',
  language: {
    label: 'English',
    value: 'en',
  },
  showFullAds: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    resetApp: () => {
      return initialState;
    },
    setFirstOpenApp: state => {
      state.first_open = false;
    },
    setTrack: (state, action: PayloadAction<Track>) => {
      state.track = action.payload;
    },
    setFavoritePodcast: (state, action: PayloadAction<Track>) => {
      const favorite = [...state.favorite_podcast];
      favorite.push(action.payload);
      state.favorite_podcast = favorite;
    },
    setUnfavoritePodcast: (state, action: PayloadAction<Track>) => {
      const favorite = [...state.favorite_podcast];
      const index = favorite.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        favorite.splice(index, 1);
        state.favorite_podcast = favorite;
      }
    },
    setFavoriteRadio: (state, action: PayloadAction<Track>) => {
      const favorite = [...state.favorite_radio];
      favorite.push(action.payload);
      state.favorite_radio = favorite;
    },
    setUnfavoriteRadio: (state, action: PayloadAction<Track>) => {
      const favorite = [...state.favorite_radio];
      const index = favorite.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        favorite.splice(index, 1);
        state.favorite_radio = favorite;
      }
    },
    setNation: (state, action: PayloadAction<string>) => {
      state.nation = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LanguageProps>) => {
      state.language = action.payload;
    },
  },
});

export const {
  resetApp,
  setFirstOpenApp,
  setTrack,
  setFavoritePodcast,
  setUnfavoritePodcast,
  setFavoriteRadio,
  setUnfavoriteRadio,
  setNation,
  setLanguage,
} = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
