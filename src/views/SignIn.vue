 <template>
  <div>
    <h1>Sign In</h1>
    <form @submit.prevent="signIn">
      <input
        class="inputField"
        type="email"
        placeholder="Your email"
        v-model="form.email"
      />
      <input
        class="inputField"
        type="password"
        placeholder="Your Password"
        v-model="form.password"
      />
      <button type="submit">login</button>
    </form>
    <p>
      Don't have an account? <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const form = reactive({
      email: "",
      password: "",
    });
    const store = useStore();

    const signIn = () => {
      store.dispatch("signInAction", form);
    };
    return {
      form,
      signIn,
    };
  },
};
</script>
<style>
</style>