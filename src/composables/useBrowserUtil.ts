import { computed } from 'vue';
import FirefoxLogo from '@/assets/images/browsers/logo-firefox.svg';
import ChromeLogo from '@/assets/images/browsers/logo-chrome.svg';
import SafariLogo from '@/assets/images/browsers/logo-safari.svg';
import ExplorerLogo from '@/assets/images/browsers/logo-explorer.svg';
import BraveLogo from '@/assets/images/browsers/logo-brave.svg';

interface Browser {
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

const ExplorerBrowser: Browser = {
  name: 'Explorer',
  logo: ExplorerLogo,
  download: undefined
}

const BraveBrowser: Browser = {
  name: 'Brave',
  logo: BraveLogo,
  download: undefined
}

export function useBrowserUtil() {
  const isChrome = computed<boolean>(() => {
    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  })

  const isFirefox = computed<boolean>(() => {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  })

  const isSafari = computed<boolean>(() => {
    return navigator.userAgent.toLowerCase().indexOf('safari') > -1;
  })

  const isExplorer = computed<boolean>(() => {
    return navigator.userAgent.toLowerCase().indexOf('msie') > -1;
  })

  const isBrave = computed<boolean>(() => {
    return navigator.userAgent.toLowerCase().indexOf('brave') > -1;
  })

  function getCurrentBrowser(): Browser | undefined {
    if (isChrome.value) {
      return ChromeBrowser;
    } 
    
    else if (isFirefox.value) {
      return FirefoxBrowser;
    } 
    
    else if (isSafari.value) {
      return SafariBrowser;
    }

    else if (isExplorer.value) {
      return ExplorerBrowser;
    }

    else if (isBrave.value) {
      return BraveBrowser;
    }
    
    else {
      return undefined;
    }
  }

  function getSupportedBrowsers(): Browser[] {
    return [
      FirefoxBrowser,
      ChromeBrowser,
      SafariBrowser,
      ExplorerBrowser,
      BraveBrowser
    ].filter(browser => browser.download !== undefined);
  }

  return {
    isChrome,
    isFirefox,
    isSafari,
    isExplorer,
    isBrave,
    getCurrentBrowser,
    getSupportedBrowsers
  }
}