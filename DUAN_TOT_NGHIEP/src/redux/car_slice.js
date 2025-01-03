import {
  createSlice
} from "@reduxjs/toolkit"

const initialState = {
  isLoadingCar: false,
  isLoadingAddCar: false,
  isErrFilter: "",
  carDatas: [],
  carDatasNolimit: [],
  carOne: {},
};

export const carSlice = createSlice({
  name: "carSL",
  initialState,
  reducers: {
    loadAllCar(state, action) {
      state.carDatas = action.payload;
    },
    loadAllCarNolimit(state, action) {
      state.carDatasNolimit = action.payload;
    },
    addOneCar(state, action) {
      state.carDatas.push(action.payload)
    },
    delOneCar(state, action) {
      state.carDatas = state.carDatas.filter((item) => {
        return item._id != action.payload
      })
    },
    loadOneCar(state, action) {
      console.log(action.payload);
      state.carOne = action.payload;
    },
    updateOneCar(state, action) {
      console.log("action", action.payload);

      const index = state.carDatas.findIndex((item) => item._id === action.payload._id);
      if (index !== -1) {
        console.log("có thay đổi");

        state.carDatas[index] = action.payload;
      }

      const index2 = state.carDatasNolimit.findIndex((item) => item._id === action.payload._id);
      if (index2 !== -1) {
        console.log("có thay đổi");

        state.carDatasNolimit[index] = action.payload;
      }
    },


    // laoding
    loadingCar(state, action) {
      state.isLoadingCar = action.payload;
    },
    loadingAddCar(state, action) {
      state.isLoadingAddCar = action.payload;
    },
    errFilter(state, action) {
      state.isErrFilter = action.payload;
    }
  }
})


export const {
  loadAllCar,
  loadAllCarNolimit,
  addOneCar,
  delOneCar,
  loadOneCar,
  updateOneCar,
  loadingCar,
  loadingAddCar,
  errFilter
} = carSlice.actions;
