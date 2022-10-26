import { SET_DATA, SET_ACTIVE } from "./actions";
const initialState = {
  data: [
    {
      id: 0,
      title: "Air Compressor",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 1,
      title: "Air Lines",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 2,
      title: "Battery",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 3,
      title: "Break Accossories",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 4,
      title: "Breaks",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },

    {
      id: 5,
      title: "Carburetor",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 6,
      title: "Clutch",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 7,
      title: "Defroster",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 8,
      title: "Drive Line",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 9,
      title: "Engine",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 10,
      title: "Fifth Wheel",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 11,
      title: "Front Axle",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 12,
      title: "Fuel Thanks",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 13,
      title: "Heater",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 14,
      title: "Horn",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 15,
      title: "Lights",
      sub_title: "Head - stop, Tail - Dash, Turn Indicators",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 16,
      title: "Mirrors",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 17,
      title: "Muffler",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
    {
      id: 18,
      title: "Oil Pressure",
      sub_title: "",
      ready: undefined,
      photo: undefined,
    },
  ],
  active: 0,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_ACTIVE:
      return { ...state, active: action.payload };
    default:
      return state;
  }
}

export { dataReducer };
