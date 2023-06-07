<template>
  <q-page class="q-pa-md">
    <main-card>
      <page-title> Create schedule </page-title>
    </main-card>
    <main-card class="q-my-md">
      <div class="grid grid-col-2 gap-4">
        <q-input
          outlined
          v-model="event.from"
          label="Start"
          color="green-5"
          flat
          dense
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="event.from"
                  mask="YYYY-MM-DD HH:mm"
                  minimal
                  color="green-5"
                  flat
                />
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time
                  v-model="event.from"
                  mask="YYYY-MM-DD HH:mm"
                  color="green-5"
                  format24h
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Ok" color="green-5" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input
          outlined
          v-model="event.to"
          label="End"
          color="green-5"
          flat
          dense
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="event.to"
                  mask="YYYY-MM-DD HH:mm"
                  minimal
                  color="green-5"
                  flat
                />
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time
                  v-model="event.to"
                  mask="YYYY-MM-DD HH:mm"
                  color="green-5"
                  format24h
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Ok" color="green-5" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input
          borderless
          color="green-5"
          bg-color="white"
          outlined
          dense
          label="Description"
          v-model="event.description"
        />
      </div>
      <div class="q-mt-md flex justify-end">
        <q-btn no-caps color="green-5"> Create </q-btn>
      </div>
    </main-card>
  </q-page>
</template>

<script setup>
import MainCard from "src/components/ui/MainCard.vue";
import { reactive, ref } from "vue";
import { useUserStore } from "src/stores/user";
import { useStadiumStore } from "src/stores/stadium";
import PageTitle from "src/components/ui/PageTitle.vue";

const userStore = useUserStore();
const stadiumStore = useStadiumStore();

let date = ref("2019-02-01 12:44");

let event = reactive({
  stadiumId: null,
  description: "description",
  from: "2019-02-01 12:44",
  to: "2019-02-01 12:44",
});
</script>
