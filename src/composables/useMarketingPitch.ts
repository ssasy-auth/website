import { ref, computed } from 'vue';

/**
 * @file useMarketingPitch.ts
 * @description A resuable composition function that returns marketing pitches for ssasy, a secure and usable user authentication library and browser extension.
 */

const PRODUCT_NAME = 'ssasy';
const PRODUCT_NAME_HTML = `<code class="brand">${PRODUCT_NAME}</code>`;

/**
 * The audience for the pitch.
 */
export type MarketingAudience = 'user' | 'developer';

/**
 * The pitch for the product.
 */
export interface MarketingPitch {
  /**
   * The audience for this pitch.
   */
  audience: MarketingAudience;
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

const productPitches: MarketingPitch[] = [
  {
    audience: 'developer',
    problem: 'no more complex user authentication flows',
    solution: `Security should be easy. ${PRODUCT_NAME_HTML} provides two libraries to help you implement user authentication in your web application. The first library allows you to authenticate users on the client and server side. The second library allows you to initiate authentication flows from the browser extension.`,
    technical: `Security should be easy. ${PRODUCT_NAME_HTML} provides two libraries to help you implement user authentication in your web application. The first library uses the WebCrypto standard and AES256 keys for symmetric encryption, and ECDH for asymmetric encryption. This simplifies the authentication process for your users, and allows you to authenticate users on the client and server side. The second library allows you to initiate authentication flows from the browser extension.`
  },
  {
    audience: 'developer',
    problem: 'no more handling user credentials',
    solution: `User credentials paint a target on your application. ${PRODUCT_NAME_HTML} allows you to authenticate users without handling user credentials thanks to public key cryptography, a cryptographic protocol that allows two parties to exchange messages without the need to share their sensitive credentials.`,
    technical: `Traditional user authentication methods require applications to store and handle sensitive user credentials, which poses a significant security threat. However, with ${PRODUCT_NAME_HTML}, you can simplify user authentication and improve application security by eliminating the need to store and handle sensitive user credentials. ${PRODUCT_NAME_HTML} uses public key cryptography to securely authenticate users without storing their credentials, ensuring maximum protection for your application. This not only streamlines the authentication process for your users, but also eliminates the risk of credential theft or leaks, making your application more secure than ever before.`
  },
  {
    audience: 'developer',
    problem: 'no more relying on third party authentication services',
    solution: `Third party authentication services are great, but they are not always reliable or transparent about how they handle your user's data. ${PRODUCT_NAME_HTML} enables a self-sovereign, decentralized and open-ource authentication experience for your application and users by leveraging cryptographic concepts like public key cryptography and digital signatures.`,
    technical: `${PRODUCT_NAME_HTML} provides decentralized authentication for web apps using public key cryptography and digital signatures. Users generate a unique key pair, with the private key stored locally and the public key registered with web services (like your application). When a user attempts to authenticate with a web app, ${PRODUCT_NAME_HTML} uses their private key to generate a digital signature that the app verifies with the public key. This provides a secure and transparent authentication experience that eliminates the need for third-party services.`
  },
  {
    audience: 'user',
    problem: 'no more remembering passwords',
    solution: `Good passwords are hard to remember especially when you have to remember them for multiple applications. ${PRODUCT_NAME_HTML} enables a one-stop login experience for all your applications (that support ${PRODUCT_NAME_HTML}).`,
    technical: `${PRODUCT_NAME_HTML} leverages public key cryptography to securely authenticate users across multiple applications, eliminating the need for users to remember multiple passwords. When a user logs in with ${PRODUCT_NAME_HTML}, they generate a unique key pair, with the private key stored locally and the public key registered with the applications that support ${PRODUCT_NAME_HTML}. When the user attempts to authenticate with a supported application, ${PRODUCT_NAME_HTML} uses their private key to generate a digital signature that the application verifies with the user's registered public key. This provides a secure and seamless authentication experience for the user, regardless of which supported application they are logging in to.`
  },
  {
    audience: 'user',
    problem: 'no more relying on third party authentication services',
    solution: `Third party authentication services like Google, Facebook, and Twitter allow you to login to applications without having to remember your password. However, these services are not always reliable or transparent about how they handle your data. ${PRODUCT_NAME_HTML} does not store or share your data with third parties. All we want is to make your life easier by providing a one-stop login experience for all your applications and we can prove it because ${PRODUCT_NAME_HTML} is open-source.`,
    technical: `Traditional third-party authentication services require users to share their data with third parties, which can compromise their privacy and security. ${PRODUCT_NAME_HTML} eliminates this risk by leveraging public key cryptography to authenticate users without sharing their data with third parties. When a user logs in with ${PRODUCT_NAME_HTML}, they generate a unique key pair, with the private key stored locally and the public key registered with the applications that support ${PRODUCT_NAME_HTML}. When the user attempts to authenticate with a supported application, ${PRODUCT_NAME_HTML} uses their private key to generate a digital signature that the application verifies with the user's registered public key. This provides a secure and transparent authentication experience for the user, without requiring them to share their data with third parties.`
  },
  {
    audience: 'user',
    problem: 'no hassle with security tokens',
    solution: `Physical security tokens allow you to login to applications without having to remember your password. However, this means you have to carry a physical security token with you at all times (and they are not cheap). ${PRODUCT_NAME_HTML} works with your existing browser extension to provide a one-stop login experience for all your applications.`,
    technical: `Physical security tokens can be costly and inconvenient for users. ${PRODUCT_NAME_HTML} eliminates this need by working with the user's existing browser extension to provide a seamless and secure one-stop login experience for all their applications. When a user logs in with ${PRODUCT_NAME_HTML}, they generate a unique key pair, with the private key stored locally and the public key registered with the applications that support ${PRODUCT_NAME_HTML}. When the user attempts to authenticate with a supported application, ${PRODUCT_NAME_HTML} uses their private key to generate a digital signature that the application verifies with the user's registered public key. This process is seamlessly integrated with the user's existing browser extension, eliminating the need for physical security tokens and making the authentication process more convenient and secure.`
  }
]

const useMarketingPitch = () => {
  const _pitches = ref<MarketingPitch[]>(productPitches);

  const userPitches = computed<MarketingPitch[]>(() => {
    return _pitches.value.filter(pitch => pitch.audience === 'user');
  });

  const developerPitches = computed<MarketingPitch[]>(() => {
    return _pitches.value.filter(pitch => pitch.audience === 'developer');
  });

  return {
    userPitches,
    developerPitches
  }
}

export {
  useMarketingPitch
}
