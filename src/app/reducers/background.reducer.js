import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
  name: "background",
  initialState: {
    bgColor: "dark",
    bgImg: "dark",
    brightness: 90,
    wifi: true,
    shutdown: false,
    login: false,
    desktop: true,
    lound: 80,
    playMusic: false
  },
  reducers: {
    slideBrightness(state, action) {
        console.log(state.lound,'state')
        state.brightness = action.payload;
    },
    slideSound(state, action) {
        state.lound = action.payload;
        console.log(state.lound)
    },
    toggleBackground(state, action) {
      if (state.bgImg === "dark") {
        state.bgImg = "light";
        state.bgColor = "light";
      } else {
        state.bgColor = "dark";
        state.bgImg = "dark";
      }
    },
    toggleWifi(state, action) {
      state.wifi = !state.wifi;
    },
    toggleShutdown(state) {
      state.login = false;
      state.desktop = false;
      state.shutdown = true;
    },
    toggleLogin(state) {
      state.login = false;
      state.desktop = true;
      state.shutdown = false;
    },
    toggleBoot(state) {
      state.login = true;
      state.desktop = false;
      state.shutdown = false;
    },
    togglePlayMusic(state){
        state.playMusic= !state.playMusic
    }
  },
});
export const {
  slideBrightness,
  slideSound,
  toggleBackground,
  toggleWifi,
  toggleBoot,
  toggleLogin,
  toggleShutdown,
  togglePlayMusic
} = backgroundSlice.actions;
export default backgroundSlice.reducer;
