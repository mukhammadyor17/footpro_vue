<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title> Create users and stadiums </page-title>
    </main-card>
    <div class="flex gap-6 no-wrap q-mb-md">
      <main-card class="flex-1">
        <h6 class="q-mt-auto q-mb-md text-body1">Create user</h6>
        <q-input
          borderless
          color="green-5"
          class="full-width q-mb-md"
          bg-color="white"
          type="email"
          outlined
          dense
          label="Email"
          v-model="user.email"
        />
        <q-input
          borderless
          color="green-5"
          class="full-width q-mb-md"
          bg-color="white"
          outlined
          dense
          label="User name"
          v-model="user.displayName"
        />
        <q-input
          borderless
          color="green-5"
          class="full-width"
          bg-color="white"
          outlined
          dense
          label="Password"
          v-model="user.password"
        />
        <div class="q-mt-md flex justify-end">
          <q-btn no-caps color="green-5" @click="createUser"> Create </q-btn>
        </div>
      </main-card>
      <main-card class="flex-1">
        <h6 class="q-mt-auto q-mb-md text-body1">Create stadium</h6>
        <q-input
          borderless
          color="green-5"
          class="full-width q-mb-md"
          bg-color="white"
          outlined
          dense
          label="Name"
          v-model="stadium.name"
        />
        <q-input
          borderless
          color="green-5"
          class="full-width q-mb-md"
          bg-color="white"
          outlined
          dense
          label="Description"
          v-model="stadium.description"
        />
        <div class="q-mt-md flex justify-end">
          <q-btn no-caps color="green-5" @click="createStadium"> Create </q-btn>
        </div>
      </main-card>
      <main-card class="flex-1">
        <h6 class="q-mt-auto q-mb-md text-body1">Add stadium for user</h6>
        <q-select
          dense
          outlined
          class="q-mb-md"
          color="green-5"
          v-model="userStadium.userId"
          :options="userStore.users"
          label="User"
          option-label="username"
          option-value="id"
          map-options
        />
        <q-select
          dense
          outlined
          color="green-5"
          v-model="userStadium.stadiumId"
          :options="userStore.stadium"
          label="Stadium"
          option-label="name"
          option-value="id"
          map-options
        />
        <div class="q-mt-md flex justify-end">
          <q-btn no-caps color="green-5"> Create </q-btn>
        </div>
      </main-card>
    </div>
  </q-page>
</template>

<script setup>
import MainCard from "src/components/ui/MainCard.vue";
import PageTitle from "src/components/ui/PageTitle.vue";
import { reactive } from "vue";
import { useUserStore } from "src/stores/user";
import { useStadiumStore } from "src/stores/stadium";

const userStore = useUserStore();
const stadiumStore = useStadiumStore();

stadiumStore.get();
userStore.getUsers();

const user = reactive({
  email: "",
  password: "",
  displayName: "",
});
const createUser = async () => {
  const payload = {
    ...user,
  };
  await userStore.createUser(payload);
};

const stadium = reactive({
  name: "",
  description: "",
});
const createStadium = async () => {
  const payload = {
    ...stadium,
  };
  await stadiumStore.createStadium(payload);
};

const userStadium = reactive({
  stadiumId: "",
  userId: "",
});
</script>
