import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import router from '../router';
import { supabase } from "../supabase";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async signInAction({ commit }, form) {
      try {
        const { error, user } = await supabase.auth.signIn({
          email: form.email,
          password: form.password,
        });
        if (error) throw error;
        alert("You've Signed In successfully");
        await router.push('/')
        commit('setUser', user.email)
      } catch (error) {
        alert(error.error_description || error.message);
      }
    },

    async signUpAction({dispatch}, form) {
      try {
        const { error} = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
        });
        if (error) throw error;
        alert("You've been registered successfully");
        await dispatch("signInAction", form)
      } catch (error) {
        alert(error.error_description || error.message);
      }
    },

    async signOutAction({ commit }) {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        commit('setUser', null)
        alert("You've been logged Out successfully");
        await router.push("/sign-in");
      } catch (error) {
        alert(error.error_description || error.message);
      }
    },
  },
  modules: {
  },

  plugins: [createPersistedState()],

})
