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
import ScreenshotImage from '@/assets/images/screenshots/light-confirm.png';

const { mdAndUp } = useDisplay();
const { userInstructions, developerInstructions } = useInstructions();
const { userPitches, developerPitches } = useMarketingPitch();

const extensionInstalled = ref<boolean>(false);
const isDeveloper = ref<boolean>(true);

const pitches = computed(() => (isDeveloper.value ? developerPitches.value : userPitches.value));
const instructions = computed(() => (isDeveloper.value ? developerInstructions.value : userInstructions.value));

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
          Supercharge your website's user authentication
        </div>
        <div
          id="subtitle"
          class="text-grey-darken-3 mt-1">
          A secure, usable and scalable alternative to existing password
          and federation-based user authentication schemes that leverages
          public key cryptography to enable a seamless developer and
          user experience.
        </div>
        
        <div
          id="call-to-action"
          class="mt-2 mx-auto">

          <demo-btn
            v-if="extensionInstalled"
            block />
          <download-btn
            v-else
            block />
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

    <v-row
      id="pitch"
      justify="center">
      <v-col
        cols="auto"
        class="text-center">
        <div id="title">
          {{ isDeveloper ? 'Developer' : 'User' }} <br v-if="!mdAndUp"/> Benefits
        </div>
      </v-col>

      <v-divider class="border-opacity-0" />
      <v-col cols="auto">
        <v-switch
          v-model="isDeveloper"
          inset
          color="primary" />
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

    <v-row
      id="instruction"
      justify="center">
      <v-col
        cols="auto"
        class="text-center">
        <div id="title">
          How to {{ isDeveloper ? 'develop' : 'use' }} <code class="brand">ssasy</code>
        </div>
      </v-col>

      <v-divider class="border-opacity-0 mt-2" />

      <v-col
        v-for="(instruction, index) in instructions"
        :key="instruction.title"
        cols="11">
        <base-card :outlined="false">
          <h3>{{index + 1}}. {{ instruction.title }}</h3>
          <p v-html="instruction.description"></p>
        </base-card>
      </v-col>
    </v-row>
  </base-page>
</template>

<style scoped>
#billboard {
  padding: 25px 0 40px 0;
}

#title {
  font-weight: bold;
}

#billboard #title {
  font-size: 2rem;
}

#pitch #instruction {
  margin-top: 40px;
}

#pitch #title {
font-size: 1.75rem;
}

#instruction #title {
font-size: 1.75rem;
}

#billboard #subtitle {
  font-size: 1.25rem;
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
}
</style>