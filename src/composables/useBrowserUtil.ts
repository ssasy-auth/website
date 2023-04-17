import { computed } from 'vue';
import FirefoxLogo from '@/assets/images/browsers/logo-firefox.svg';
import ChromeLogo from '@/assets/images/browsers/logo-chrome.svg';
import SafariLogo from '@/assets/images/browsers/logo-safari.svg';
import EdgeLogo from '@/assets/images/browsers/logo-edge.svg';
import BraveLogo from '@/assets/images/browsers/logo-brave.svg';

export interface Browser {
  /**
   * Browser name
   */
  name: string;
  /**
   * Browser logo
   */
  logo: string;
  /**
   * Browser download link. If undefined, browser is not supported
   */
  download: string | undefined;
}

const FirefoxBrowser: Browser = {
  name: 'Firefox',
  logo: FirefoxLogo,
  download: 'https://addons.mozilla.org/en-US/firefox/addon/ssasy/'
}

const ChromeBrowser: Browser = {
  name: 'Chrome',
  logo: ChromeLogo,
  download: undefined
}

const SafariBrowser: Browser = {
  name: 'Safari',
  logo: SafariLogo,
  download: undefined
}

const EdgeBrowser: Browser = {
  name: 'Edge',
  logo: EdgeLogo,
  download: undefined
}

const BraveBrowser: Browser = {
  name: 'Brave',
  logo: BraveLogo,
  download: undefined
}

export function useBrowserUtil() {
  const isFirefox = computed<boolean>(() => {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  })
  
  const isChrome = computed<boolean>(() => {
    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  })

  const isSafari = computed<boolean>(() => {
    return navigator.userAgent.toLowerCase().indexOf('safari') > -1;
  })

  const isEdge = computed<boolean>(() => {
    return navigator.userAgent.toLowerCase().indexOf('msie') > -1;
  })

  const isBrave = computed<boolean>(() => {
    return navigator.userAgent.toLowerCase().indexOf('brave') > -1;
  })

  function getCurrentBrowser(): Browser | undefined {
    if (isFirefox.value) {
      return FirefoxBrowser;
    } 
    
    else if (isChrome.value) {
      return ChromeBrowser;
    }

    else if (isEdge.value) {
      return EdgeBrowser;
    }

    else if (isBrave.value) {
      return BraveBrowser;
    }

    else if (isSafari.value) {
      return SafariBrowser;
    }
    
    else {
      return undefined;
    }
  }

  function getAllBrowsers(): Browser[] {
    return [
      FirefoxBrowser,
      ChromeBrowser,
      EdgeBrowser,
      BraveBrowser,
      SafariBrowser
    ];
  }

  function getSupportedBrowsers(): Browser[] {
    return [
      FirefoxBrowser,
      ChromeBrowser,
      EdgeBrowser,
      BraveBrowser,
      SafariBrowser
    ].filter(browser => browser.download !== undefined);
  }

  return {
    isChrome,
    isFirefox,
    isSafari,
    isEdge,
    isBrave,
    getCurrentBrowser,
    getAllBrowsers,
    getSupportedBrowsers
  }
}