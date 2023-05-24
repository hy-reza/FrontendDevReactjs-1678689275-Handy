import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as resto from "../service/restoService";
import { RestoState } from "../../type/redux";

export const retriveRestos = createAsyncThunk(
  "resto/retrive",
  async (_, { rejectWithValue }) => {
    try {
      const res = await resto.retrive();
      return res.data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err);
      } else {
        console.log("Unexpected error", err);
      }
    }
  }
);
export const retriveResto = createAsyncThunk(
  "resto/retriveById",
  async (id: string, { rejectWithValue }) => {
    console.log({id})
    try {
      const res = await resto.retriveById(id);
      return res.data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err);
      } else {
        console.log("Unexpected error", err);
      }
    }
  }
);

const initialState: RestoState = {
  message: "",
  loading: false,
  count: 0,
  restaurant: [],
  detail: {
    id: "",
    city: "",
    description: "",
    isOpen: true,
    name: "",
    pictureId: "22",
    priceRange: "Low",
    rating: 3,
    type: "Cafes",
  },
};

const restoSlice = createSlice({
  name: "resto",
  initialState,
  reducers: {
    filterResto: (state, action) => {
      const isOpen = action.payload.isOpem == "open" ? true : false;
      return {
        ...state,
        restaurant: state.restaurant.filter((r) => {
          if (isOpen) {
            return r.isOpen == true;
          }
          return r;
        }),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retriveRestos.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(retriveRestos.fulfilled, (state, action) => {
        const types = ["Fast Food", "Casual", "Fine Dining", "Cafes"];
        const isOpen = [true, false];
        const range = ["Low", "Medium", "High"];
        const updatedRestaurants = action.payload.restaurants.map((resto) => {
          const randomType = types[Math.floor(Math.random() * types.length)];
          const randomOpen = isOpen[Math.floor(Math.random() * isOpen.length)];
          const priceRange = range[Math.floor(Math.random() * range.length)];
          return { ...resto, type: randomType, isOpen: randomOpen, priceRange };
        });
        return {
          ...state,
          loading: false,
          restaurant: updatedRestaurants,
          count: action.payload.count,
          message: action.payload.message,
        };
      })
      .addCase(retriveRestos.rejected, (state) => {
        return {
          ...state,
          loading: false,
        };
      })
      .addCase(retriveResto.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(retriveResto.fulfilled, (state, action) => {
        const types = ["Fast Food", "Casual", "Fine Dining", "Cafes"];
        const isOpen = [true, false];
        const range = ["Low", "Medium", "High"];
        const randomType = types[Math.floor(Math.random() * types.length)];
        const randomOpen = isOpen[Math.floor(Math.random() * isOpen.length)];
        const priceRange = range[Math.floor(Math.random() * range.length)];

        return {
          ...state,
          loading: false,
          detail: {
            ...action.payload.restaurant,
            type: randomType,
            isOpen: randomOpen,
            priceRange,
          },
          message: action.payload.message,
        };
      })
      .addCase(retriveResto.rejected, (state) => {
        return {
          ...state,
          loading: false,
        };
      })
  },
});

export default restoSlice.reducer;
export const filterResto = restoSlice.actions;
