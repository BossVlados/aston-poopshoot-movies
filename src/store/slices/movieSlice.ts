import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { MovieSliceTypes, ResponseListType } from "../../types/types"

const initialState: MovieSliceTypes = {
  selectedMovieID: null,
  movieList: undefined,
  isDataLoading: true,
  selectedMovieTag: "ALL"
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<number | null>) => {
      state.selectedMovieID = action.payload;
    },
    setMovieList: (state, action: PayloadAction<ResponseListType | undefined>) => {
      state.movieList = action.payload;
    },
    setIsDataLoading: (state, action: PayloadAction<boolean>) => {
      state.isDataLoading = action.payload;
    },
    setSelectedMovieTag: (state, action: PayloadAction<string>) => {
      state.selectedMovieTag = action.payload;
    },
  }
})

export default movieSlice;
