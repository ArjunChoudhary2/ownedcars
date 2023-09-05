import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name :'cars',
    initialState : {
        searchTerm : '',
        data : []
    },
    reducers : {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            state.data.push({
                name : action.payload.name,
                cost : action.payload.cost,
                id: nanoid(),
            });
        },
        removeCar(state, action){
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            })
            state.data = updated;

            // MY IMPLEMENTATION
            // const index = state.cars.indexOf(action.payload);
            // state.cars.pop(index);
        }
    }
});

export const {addCar,changeSearchTerm, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;