<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title> Stadium Detail Page </page-title>
    </main-card>
    <main-card>
      <page-title> Stadium Name </page-title>
      <div class="text-body1 q-mt-sm q-mb-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dolor,
        reprehenderit non aspernatur eaque nihil maiores harum hic vitae
        asperiores amet beatae commodi fuga enim saepe sequi quas, magni
        repellat eos deserunt. Quae unde omnis dignissimos, assumenda provident
        mollitia earum consequatur quis ipsum laborum ipsam, officiis eum libero
        temporibus repellat corrupti similique sunt incidunt? Omnis blanditiis
        asperiores similique debitis.
      </div>

      <page-title> Schedule for 5 days </page-title>
      <div
        class="text-body1 q-mt-sm q-mb-md"
        style="max-width: 700px; border: 1px solid #ccc"
      >
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="green-5"
          indicator-color="transparent"
          align="justify"
          no-caps
        >
          <q-tab name="1" label="Mails" />
          <q-tab name="2" label="Alarms" />
          <q-tab name="3" label="Movies" />
          <q-tab name="4" label="Alarms 4" />
          <q-tab name="5" label="Movies 5" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="1">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="2">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="3">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="4">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="5">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </div>

      <page-title> Stadium Galley </page-title>
      <div class="q-mt-sm q-mb-md flex gap-4">
        <q-img
          class="rounded-xs"
          src="/src/assets/footBgDark.jpg"
          width="200px"
          height="200px"
        />
        <q-img
          class="rounded-xs"
          src="/src/assets/footBgDark.jpg"
          width="200px"
          height="200px"
        />
        <q-img
          class="rounded-xs"
          src="/src/assets/footBgDark.jpg"
          width="200px"
          height="200px"
        />
      </div>
    </main-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import PageTitle from "src/components/ui/PageTitle.vue";
import MainCard from "/src/components/ui/MainCard.vue";

const tab = ref("1");
</script>
