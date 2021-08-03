import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
  name: "background",
  initialState: {
    bgColor: "dark",
    bgImg: "dark",
    brightness: 100,
    wifi: true,
    shutdown: false,
    login: true,
    desktop: false,
    restart: false,
    lound: 80,
    playMusic: false
  },
  reducers: {
    slideBrightness(state, action) {
        state.brightness = action.payload;
    },
    slideSound(state, action) {
        state.lound = action.payload;
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
    toggleRestart(state){
      state.restart= !state.restart
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
  togglePlayMusic,
  toggleRestart,
} = backgroundSlice.actions;
export default backgroundSlice.reducer;
