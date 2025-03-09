import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryEntity } from "../categories/CategoryEntity";
import { CategoriesAPI } from "../categories/CategoriesAPI";

export const fetchCategories = createAsyncThunk(
  "categories/fetchAll",
  async (thunkAPI) => {
    return await CategoriesAPI.getCategories();
  }
);

export const createCategory = createAsyncThunk(
  "categories/create",
  async (category: CategoryEntity, thunkAPI) => {
    return await CategoriesAPI.createCategory(category);
  }
);

interface CategoryState {
  categories: CategoryEntity[];
}

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    }),
      builder.addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      });
  },
});

export default categorySlice.reducer;
