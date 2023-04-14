<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useMarketingPitch, useInstructions } from '@/composables';
import { Bridge } from '@ssasy-auth/extension';
import BasePage from '@/components/base/BasePage.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseImage from '@/components/base/BaseImage.vue';
import DemoBtn from '@/components/buttons/DemoBtn.vue';
import DownloadBtn from '@/components/buttons/DownloadBtn.vue';
import InstructionCard from '@/components/cards/InstructionCard.vue';
import ScreenshotImage from '@/assets/images/screenshots/light-confirm.png';

const { mdAndUp } = useDisplay();
const { userInstructions, developerInstructions } = useInstructions();
const { userPitches, developerPitches } = useMarketingPitch();

const extensionInstalled = ref<boolean>(false);
const isDeveloper = ref<boolean>(true);

const pitches = computed(() => (isDeveloper.value ? developerPitches.value : userPitches.value));
const instructions = computed(() => (isDeveloper.value ? developerInstructions.value : userInstructions.value));
const color = computed(() => (isDeveloper.value ? 'primary' : 'success'));

onMounted(async () => {
  extensionInstalled.value = await Bridge.isExtensionInstalled();
});

</script>

<template>
  <base-page>
    <v-row
      id="billboard"
      :justify="mdAndUp ? 'space-between' : 'center'"
      :align="mdAndUp ? 'center' : 'start'">
      <v-col
        cols="11"
        md="6"
        order="2"
        order-md="1"
        :class="mdAndUp ? '' : 'text-center'">
        <div id="title">
          Self-sovereign authentication for the web
        </div>
        <div
          id="subtitle"
          class="text-grey-darken-3 mt-1">
          A secure and usable alternative to passwords
          and federation-based user authentication schemes that leverages
          public key cryptography to enable a scalable user and developer experience.
        </div>
        
        <div
          id="call-to-action"
          class="mt-2 mx-auto">
          <v-row justify-md="space-between">
            <v-col
              v-if="!extensionInstalled"
              cols="12"
              md="6">
              <download-btn block/>
            </v-col>
            <v-col
              cols="12"
              :md="extensionInstalled ? 12 : 6">
              <demo-btn block/>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col
        md="auto"
        order="1"
        order-md="2"
        class="text-center">
        <base-image
          :src="ScreenshotImage"
          :alt="'Screenshot of SSASY'"
          :height="mdAndUp ? '500px' : '350px'" />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        cols="auto"
        class="text-center">
        <div id="title">
          View as a <br v-if="!mdAndUp" /> <i
            :class="`text-${color}`"
            style="font-weight: bolder; text-decoration: underline dashed;">{{ isDeveloper ? 'developer' : 'user' }}</i>
        </div>
      </v-col>

      <v-divider class="border-opacity-0" />
      <v-col cols="auto">
        <v-switch
          v-model="isDeveloper"
          inset
          color="primary" />
      </v-col>
    </v-row>

    <v-row id="section">
      <v-col
        cols="auto"
        class="text-center">
        <div id="title">
          Why use <code class="brand">ssasy</code>?
        </div>
      </v-col>

      <v-divider class="border-opacity-0 mt-2" />

      <v-col
        v-for="pitch in pitches"
        :key="pitch.problem"
        cols="11">
        <base-card :outlined="false">
          <h3>{{ pitch.problem }}</h3>
          <p v-html="pitch.solution"></p>
        </base-card>
      </v-col>
    </v-row>

    <v-row id="section">
      <v-col
        cols="auto"
        class="text-center">
        <div id="title">
          How to use <code class="brand">ssasy</code>!
        </div>
      </v-col>

      <v-divider class="border-opacity-0 mt-2" />

      <v-col
        v-for="(instruction, index) in instructions"
        :key="instruction.title"
        cols="11">
        <instruction-card
          :instruction="instruction"
          :index="index + 1" />

        <v-divider
          v-if="index + 1 < instructions.length"
          class="border-opacity-5 mt-2" />
      </v-col>
    </v-row>
  </base-page>
</template>

<style scoped>
#title {
  font-size: 1.75rem;
  font-weight: bold;
}

#billboard {
  padding: 25px 0 40px 0;
}

#billboard #title {
  font-size: 2rem;
}

#billboard #subtitle {
  font-size: 1.25rem;
}

#section {
  margin: 40px 0;
}

@media (min-width: 960px) {
  #billboard {
    padding: 100px 0;
  }
  
  #billboard #title {
    font-size: 3rem;
  }
  
  #billboard #subtitle {
    font-size: 1.5rem;
  }

  #section {
    margin: 75px 0;
  }

  #section #title {
    font-size: 2.5rem;
    margin: 15px 0;
  }
}
</style>