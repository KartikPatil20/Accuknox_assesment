import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          name: "widget-1",
          text: "CSPM widget 1",
        },
        {
          name: "widget-2",
          text: "CSPM widget 2",
        },
        {
          name: "widget-3",
          text: "CSPM widget 3",
        },
        {
          name: "widget-4",
          text: "CSPM widget 4",
        },
      ],
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        {
          name: "widget-1",
          text: "CWPP widget 1",
        },
        {
          name: "widget-2",
          text: "CWPP widget 2",
        },
        {
          name: "widget-3",
          text: "CWPP widget 3",
        },
        {
          name: "widget-4",
          text: "CWPP widget 4",
        },
      ],
    },
    {
      name: "Registry Scan",
      widgets: [
        {
          name: "widget-1",
          text: "Registry widget 1",
        },
        {
          name: "widget-2",
          text: "Registry widget 2",
        },
        {
          name: "widget-3",
          text: "Registry widget 3",
        },
        {
          name: "widget-4",
          text: "Registry widget 4",
        },
      ],
    },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryInd, name, text } = action.payload;
      const widgetcard = {
        name: name,
        text: text,
      };
      state.categories[categoryInd].widgets.push(widgetcard);
    },
    removeWidget: (state, action) => {
      const { categoryInd, widgetInd } = action.payload;
      state.categories[categoryInd].widgets.splice(widgetInd, 1);
    },
  },
});

export const { addWidget, removeWidget } = dataSlice.actions;
export default dataSlice.reducer;
