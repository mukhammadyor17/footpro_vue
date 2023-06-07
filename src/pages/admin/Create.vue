<template>
  <q-page class="q-pa-md">
    <div class="flex gap-6 q-mb-md">
      <main-card class="min-w-300 flex-1">
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
      <main-card class="min-w-300 flex-1">
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
      <main-card class="min-w-300 flex-1">
        <h6 class="q-mt-auto q-mb-md text-body1">Add stadium for user</h6>
        <q-select
          dense
          outlined
          class="q-mb-md"
          color="green-5"
          v-model="userStadium.userId"
          :options="userStore.users"
          label="User"
          :option-label="(item) => item.email"
          :option-value="(item) => item.id"
          map-options
          emit-value
        />
        <q-select
          dense
          outlined
          color="green-5"
          v-model="userStadium.stadiumId"
          :options="stadiumStore.stadium"
          label="Stadium"
          :option-label="(item) => item.name"
          :option-value="(item) => item.id"
          map-options
          emit-value
        />
        <div class="q-mt-md flex justify-end">
          <q-btn no-caps color="green-5" @click="createUserStadium">
            Create
          </q-btn>
        </div>
      </main-card>
    </div>
  </q-page>
</template>

<script setup>
import MainCard from "src/components/ui/MainCard.vue";
import { reactive } from "vue";
import { useUserStore } from "src/stores/user";
import { useStadiumStore } from "src/stores/stadium";

const userStore = useUserStore();
const stadiumStore = useStadiumStore();

userStore.getUsers();
stadiumStore.getStadium();

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
  user.email = "";
  user.password = "";
  user.displayName = "";
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
  stadium.name = "";
  stadium.description = "";
};

const userStadium = reactive({
  stadiumId: "",
  userId: "",
});
const createUserStadium = async () => {
  const payload = {
    ...userStadium,
  };
  await userStore.createUserStadium(payload);
  userStadium.userId = "";
  userStadium.stadiumId = "";
};
</script>
