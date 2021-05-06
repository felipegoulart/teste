<template>
  <main class="items-center flex flex-col">
    <header
      class="bg-white shadow-lg flex justify-center p-4 w-36 m-4 rounded-full text-xl"
    >
      <h1 class="font-bold text-gray-400">Simulador</h1>
    </header>

    <div
      class="bg-white shadow-2xl flex flex-col items-center rounded-4xl px-10 pb-8 pt-4 w-80"
    >

      <Logo
        class="flex-shrink w-44"
      />

      <form class="w-full" @submit.prevent="submit">
        <div class="my-2 space-y-4">
          <div :class="classInput">
            <input
              type="email"
              class="bg-transparent rounded-full outline-none"
              style="text-indent: 0.5rem"
              placeholder="Seu e-mail"
              v-model="form.body.email"
              @input="enableEnterButton"
              required
            />
            <img src="@/assets/img/user-ico.svg" alt="Usuário" />
          </div>

          <div :class="classInput">
            <input
              :type="typePasswordInput"
              class="bg-transparent rounded-full outline-none"
              style="text-indent: 0.5rem"
              v-model="form.body.password"
              @input="enableEnterButton"
              placeholder="Sua senha"
            />
            <img
              @click="changePasswordVisualization"
              :src="viewPassword"
              alt="Senha"
              class="cursor-pointer"
            />
          </div>
        </div>

        <button
          class="bg-gradient-to-r from-green-water-100 to-green-water-200 w-full px-4 py-1 my-2 rounded-full outline-none text-white font-semibold text-xl transform hover:-translate-y-0.5 hover:shadow-xl focus:-translate-y-0.5 focus:shadow-xl duration-100 disabled:opacity-50 focus:outline-none"
          :disabled="buttonDisabled"
          tabindex="0"
        >
          Entrar
        </button>

        <!-- <div
          class="text-gray-500 mt-2 hover:text-indigo-700 w-full my-2 flex justify-center items-center space-x-2"
          title="Você entrará automaticamente da próxima vez."
        >
          <input
            type="checkbox"
            id="remember"
            class="bg-transparent rounded-full outline-none cursor-pointer"
            style="text-indent: 0.5rem"
            v-model="form.remember"
          />
          <label
            for="remember"
            class="cursor-pointer"
          >
            Lembrar de mim
          </label>
        </div> -->
      </form>
      <router-link
        to="RecuperarSenha"
        class="text-gray-500 mt-2 text-sm hover:text-indigo-700"
        >Esqueceu a senha?</router-link
      >
    </div>
  </main>
</template>

<script>
/* components*/
import Logo from '@/components/shared/Logo'

import { mapActions } from "vuex";

/* Regex para validar e-mails */
const testEmail = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  components: {
    Logo
  },
  
  data() {
    return {
      form: {
        body: {
          email: "felipe@newsun.energy",
          password: "felipe@newsun",
        },
        remember: false
      },
      typePasswordInput: "password",
      buttonDisabled: true,

      viewPassword: require("@/assets/img/view-ico.svg"),
      classInput: "bg-gray-200 flex justify-between p-2 px-3 rounded-full",
    };
  },
  
  methods: {
    changePasswordVisualization() {
      if (this.typePasswordInput === "password") {
        this.typePasswordInput = "text";
        this.viewPassword = require("@/assets/img/not-view-ico.svg");
      } else {
        this.typePasswordInput = "password";
        this.viewPassword = require("@/assets/img/view-ico.svg");
      }
    },

    enableEnterButton() {
      if (
        testEmail.test(this.form.body.email) &&
        this.form.body.password.length >= 8
      )
        this.buttonDisabled = false;
      else this.buttonDisabled = true;
    },

    ...mapActions("auth", ["ActionDoLogin"]),
    submit() {
      this.ActionDoLogin(this.form.body)
       
    },
  },

  mounted() {
    if (this.form.body.email && this.form.body.password) {
      this.buttonDisabled = false
    }
  }
};
</script>

<style scooped>
</style>