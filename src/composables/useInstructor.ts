import { ref, computed } from 'vue';

const PRODUCT_NAME = 'ssasy';
const PRODUCT_NAME_HTML = `<code class="brand">${PRODUCT_NAME}</code>`;
const LIBRARY_LINK = `<a href="https://github.com/ssasy-auth/core" target="_blank" rel="noopener noreferrer">${PRODUCT_NAME} github repository</a>`;
const CLIENT_LINK = `<a href="https://github.com/ssasy-auth/extension/blob/main/src/bridge/README.md" target="_blank" rel="noopener noreferrer">${PRODUCT_NAME} extension github repository</a>`;

/**
 * The audience for the pitch.
 */
export type Audience = 'user' | 'developer';

/**
 * The pitch for the product.
 */
export interface Instruction {
  /**
   * The audience for this instruction.
   */
  audience: Audience;
  
  title: string;
  description: string;
  image?: string;
}

const _instructions: Instruction[] = [
  {
    audience: 'user',
    title: 'Install the browser extension',
    description: `The browser extension allows you to authenticate to web applications that support ${PRODUCT_NAME_HTML}.`
  },
  {
    audience: 'user',
    title: 'Setup extension',
    description: `${PRODUCT_NAME_HTML} uses a cryptographic key to authenticate you to web applications. Follow the instructions in the browser extension to create or import your cryptographic key.`
  },
  {
    audience: 'user',
    title: 'Authenticate to web applications',
    description: `When you visit a web application that supports ${PRODUCT_NAME_HTML}, you will be prompted to authenticate. Follow the instructions in the browser extension to authenticate to the web application.`
  },
  {
    audience: 'developer',
    title: 'Install the client library',
    description: 'The client library allows you to authenticate users on the client side in a usable and secure manner.'
  },
  {
    audience: 'developer',
    title: 'Setup your cryptographic key and authentication flow',
    description: `${PRODUCT_NAME_HTML} uses a cryptographic key to authenticate users to web applications. Checkout the ${LIBRARY_LINK} to learn how to create, import and manage your cryptographic key.`
  },
  {
    audience: 'developer',
    title: 'Setup your client-side authentication flow',
    description: `${PRODUCT_NAME_HTML} uses a browser extension to authenticate users to web applications. The browser extension exposes a client-side API that allows web applications to request public keys and initiate authentication flows. Checkout the ${CLIENT_LINK} to learn how to use the client-side API.`
  },
  {
    audience: 'developer',
    title: 'You\'re all set!',
    description: `Enable your users to authenticate in a usable, secure and self-sovereign manner with ${PRODUCT_NAME_HTML}.`
  }
]

const useInstructions = () => {
  const instructions = ref<Instruction[]>(_instructions);

  const userInstructions = computed(() => instructions.value.filter(instruction => instruction.audience === 'user'));

  const developerInstructions = computed(() => instructions.value.filter(instruction => instruction.audience === 'developer'));

  return {
    instructions,
    userInstructions,
    developerInstructions
  }
}

export {
  useInstructions
}
