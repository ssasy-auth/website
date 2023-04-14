/**
 * @file useMarketing.ts
 * @description A resuable composition function that returns marketing content.
 */

import { ref, computed } from 'vue';
import ExtensionSetupGif from '@/assets/images/gifs/demo-setup.gif';
import ExtensionRegisterGif from '@/assets/images/gifs/demo-register.gif';
import ExtensionLoginGif from '@/assets/images/gifs/demo-login.gif';

const LIBRARY_NAME = 'ssasy';
const LIBRARY_NAME_HTML = `<code class="brand">${LIBRARY_NAME}</code>`;
const LIBRARY_CORE = '<a href="https://github.com/ssasy-auth/core" target="_blank" rel="noopener noreferrer">@ssasy-auth/core</a> repository';
const LIBRARY_BRIDGE = '<a href="https://github.com/ssasy-auth/extension/blob/main/src/bridge/README.md" target="_blank" rel="noopener noreferrer">@ssasy-auth/extension</a> repository';

/**
 * The audience for the pitch.
 */
export type Audience = 'user' | 'developer';

interface Content {
  /**
   * The audience for this pitch.
   */
  audience: Audience;
}

/**
 * Marketing pitch for ssasy
 */
export interface Pitch extends Content {
  /**
   * The problem the pitch is trying to solve. 
   * 
   * Hints: 
   * - This section acts as the 'vulnerability' in a security risk assessment.
   * - Pretend like you are answering the question "What problem do I [audience] have?"
   */
  problem: string;
  /**
   * The solution to the problem.
   * 
   * Hints:
   * - This section presents the 'threat' and how to 'mitigate' it in a security risk assessment.
   * - try explaining the solution as if you are explaining it to a child.
   */
  solution: string;
  /**
   * The technical details of the solution.
   */
  technical?: string;
}

type Language = 'javascript' | 'bash';

export interface Code {
  /**
   * The code snippet.
   */
  snippet: string;
  /**
   * The language of the code snippet.
   */
  language: Language;
}

/**
 * Instruction for ssasy
 */
export interface Instruction extends Content {
  /**
   * The title of the instruction.
   */
  title: string;
  /**
   * The description of the instruction.
   */
  description: string;
  /**
   * The image for the instruction.
   */
  image?: string;
  /**
   * The code snippet for an instruction.
   */
  code?: Code;
}

const productPitches: Pitch[] = [
  {
    audience: 'developer',
    problem: 'No more complex user authentication flows',
    solution: `Security should be easy. ${LIBRARY_NAME_HTML} provides two libraries to help you implement user authentication in your web application. The first library, ${LIBRARY_CORE}, allows you to authenticate users on the client and server side. The second library, ${LIBRARY_BRIDGE}, allows you to initiate authentication flows from the browser extension.`,
    technical: `Security should be easy. ${LIBRARY_NAME_HTML} provides two libraries to help you implement user authentication in your web application. The first library, ${LIBRARY_CORE}, uses the WebCrypto standard and AES256 keys for symmetric encryption, and ECDH for asymmetric encryption. This simplifies the authentication process for your users, and allows you to authenticate users on the client and server side. The second library, ${LIBRARY_BRIDGE}, allows you to initiate authentication flows from the browser extension.`
  },
  {
    audience: 'developer',
    problem: 'No more handling user credentials',
    solution: `User credentials paint a target on your application. ${LIBRARY_NAME_HTML} allows you to authenticate users without handling user credentials thanks to public key cryptography, a cryptographic protocol that allows two parties to exchange messages without the need to share their sensitive credentials.`,
    technical: `Traditional user authentication methods require applications to store and handle sensitive user credentials, which poses a significant security threat. However, with ${LIBRARY_NAME_HTML}, you can simplify user authentication and improve application security by eliminating the need to store and handle sensitive user credentials. ${LIBRARY_NAME_HTML} uses public key cryptography to securely authenticate users without storing their credentials, ensuring maximum protection for your application. This not only streamlines the authentication process for your users, but also eliminates the risk of credential theft or leaks, making your application more secure than ever before.`
  },
  {
    audience: 'developer',
    problem: 'No more relying on third party authentication services',
    solution: `Third party authentication services are great, but they are not always reliable or transparent about how they handle your user's data. ${LIBRARY_NAME_HTML} enables a self-sovereign, decentralized and open-ource authentication experience for your application and users by leveraging cryptographic concepts like public key cryptography and digital signatures.`,
    technical: `${LIBRARY_NAME_HTML} provides decentralized authentication for web apps using public key cryptography and digital signatures. Users generate a unique key pair, with the private key stored locally and the public key registered with web services (like your application). When a user attempts to authenticate with a web app, ${LIBRARY_NAME_HTML} uses their private key to generate a digital signature that the app verifies with the public key. This provides a secure and transparent authentication experience that eliminates the need for third-party services.`
  },
  {
    audience: 'user',
    problem: 'No more remembering passwords',
    solution: `Good passwords are hard to remember especially when you have to remember them for multiple applications. ${LIBRARY_NAME_HTML} enables a one-stop login experience for all your applications (that support ${LIBRARY_NAME_HTML}).`,
    technical: `${LIBRARY_NAME_HTML} leverages public key cryptography to securely authenticate users across multiple applications, eliminating the need for users to remember multiple passwords. When a user logs in with ${LIBRARY_NAME_HTML}, they generate a unique key pair, with the private key stored locally and the public key registered with the applications that support ${LIBRARY_NAME_HTML}. When the user attempts to authenticate with a supported application, ${LIBRARY_NAME_HTML} uses their private key to generate a digital signature that the application verifies with the user's registered public key. This provides a secure and seamless authentication experience for the user, regardless of which supported application they are logging in to.`
  },
  {
    audience: 'user',
    problem: 'No more relying on third party authentication services',
    solution: `Third party authentication services like Google, Facebook, and Twitter allow you to login to applications without having to remember your password. However, these services are not always reliable or transparent about how they handle your data. ${LIBRARY_NAME_HTML} does not store or share your data with third parties. All we want is to make your life easier by providing a one-stop login experience for all your applications and we can prove it because ${LIBRARY_NAME_HTML} is open-source.`,
    technical: `Traditional third-party authentication services require users to share their data with third parties, which can compromise their privacy and security. ${LIBRARY_NAME_HTML} eliminates this risk by leveraging public key cryptography to authenticate users without sharing their data with third parties. When a user logs in with ${LIBRARY_NAME_HTML}, they generate a unique key pair, with the private key stored locally and the public key registered with the applications that support ${LIBRARY_NAME_HTML}. When the user attempts to authenticate with a supported application, ${LIBRARY_NAME_HTML} uses their private key to generate a digital signature that the application verifies with the user's registered public key. This provides a secure and transparent authentication experience for the user, without requiring them to share their data with third parties.`
  },
  {
    audience: 'user',
    problem: 'No hassle with security tokens',
    solution: `Physical security tokens allow you to login to applications without having to remember your password. However, this means you have to carry a physical security token with you at all times (and they are not cheap). ${LIBRARY_NAME_HTML} works with your existing browser extension to provide a one-stop login experience for all your applications.`,
    technical: `Physical security tokens can be costly and inconvenient for users. ${LIBRARY_NAME_HTML} eliminates this need by working with the user's existing browser extension to provide a seamless and secure one-stop login experience for all their applications. When a user logs in with ${LIBRARY_NAME_HTML}, they generate a unique key pair, with the private key stored locally and the public key registered with the applications that support ${LIBRARY_NAME_HTML}. When the user attempts to authenticate with a supported application, ${LIBRARY_NAME_HTML} uses their private key to generate a digital signature that the application verifies with the user's registered public key. This process is seamlessly integrated with the user's existing browser extension, eliminating the need for physical security tokens and making the authentication process more convenient and secure.`
  }
]

const productInstructions: Instruction[] = [
  {
    audience: 'user',
    title: 'Setup browser extension',
    description: `${LIBRARY_NAME_HTML} uses a cryptographic key to authenticate you to web applications. Follow the instructions in the browser extension to create or import your cryptographic key.`,
    image: ExtensionSetupGif
  },
  {
    audience: 'user',
    title: 'Register to web applications',
    description: `The ${LIBRARY_NAME_HTML} extension allows you to register to web applications in 2 easy steps.`,
    image: ExtensionRegisterGif
  },
  {
    audience: 'user',
    title: 'Authenticate to web applications',
    description: `When you visit a web application that supports ${LIBRARY_NAME_HTML}, you will be prompted to authenticate. Follow the instructions in the browser extension to authenticate to the web application.`,
    image: ExtensionLoginGif
  },
  {
    audience: 'developer',
    title: 'Install the core library',
    description: 'The core library allows you to authenticate users in a usable and secure manner.',
    code: {
      language: 'bash',
      snippet: `
      npm install @ssasy-auth/core
      `
    }
  },
  {
    audience: 'developer',
    title: 'Setup your server-side authentication',
    description: `${LIBRARY_NAME_HTML} uses a cryptographic key to authenticate users to web applications. Checkout the ${LIBRARY_CORE} to learn how to create, import and manage your cryptographic key.`,
    code: {
      language: 'javascript',
      snippet: `
      import { KeyModule, Wallet } from '@ssasy-auth/core';
      
      // generate a new private key
      const privateKey = await KeyModule.generatePrivateKey();

      // create a wallet
      const wallet = new Wallet(privateKey);
      
      // generate a challenge for the user (the challenge is used to verify that the user has access to the private key)
      const userPublicKey = '...';
      const challenge = await wallet.generateChallenge(userPublicKey);

      // ... send the challenge to the user and wait for the user to respond
      const challengeResponse = '...';
      const result = await wallet.verifyChallenge(decodedChallengeCiphertext); // returns user's public key if the challenge response is valid, otherwise it throws an error
    `
    }
  },
  {
    audience: 'developer',
    title: 'Install the client library',
    description: 'The client library allows you to authenticate users in a usable and secure manner.',
    code: {
      language: 'bash',
      snippet: `
      npm install @ssasy-auth/extension
      `
    }
  },
  {
    audience: 'developer',
    title: 'Setup your client-side authentication flow',
    description: `${LIBRARY_NAME_HTML} uses a browser extension to authenticate users to web applications. The browser extension exposes a client-side API that allows web applications to request public keys and initiate authentication flows. Checkout the ${LIBRARY_BRIDGE} to learn how to use the client-side API.`,
    code: {
      language: 'javascript',
      snippet: `
      import { Bridge } from '@ssasy-auth/extension';

      // check if the extension is installed
      const extensionInstalled = await Bridge.isExtensionInstalled(); // returns true or false
      
      // request the user's public key
      const requestMode = 'login'; // or 'registration'
      const publicKey = await Bridge.requestPublicKey(requestMode); // returns the user's public key
      
      // request a challenge response from the user
      const challengeResponse = await Bridge.requestSolution(requestMode, challenge); // returns the challenge response
      `
    }
  },
  {
    audience: 'developer',
    title: 'You\'re all set!',
    description: `Enable your users to authenticate in a usable, secure and self-sovereign manner with ${LIBRARY_NAME_HTML}.`
  }
]

const useMarketingPitch = () => {
  const _pitches = ref<Pitch[]>(productPitches);

  const userPitches = computed<Pitch[]>(() => {
    return _pitches.value.filter(pitch => pitch.audience === 'user');
  });

  const developerPitches = computed<Pitch[]>(() => {
    return _pitches.value.filter(pitch => pitch.audience === 'developer');
  });

  return {
    userPitches,
    developerPitches
  }
}

const useInstructions = () => {
  const instructions = ref<Instruction[]>(productInstructions);

  const userInstructions = computed(() => instructions.value.filter(instruction => instruction.audience === 'user'));

  const developerInstructions = computed(() => instructions.value.filter(instruction => instruction.audience === 'developer'));

  return {
    instructions,
    userInstructions,
    developerInstructions
  }
}

export {
  useMarketingPitch,
  useInstructions
}
