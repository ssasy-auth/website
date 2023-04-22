import FirefoxLogo from '@/assets/images/browsers/logo-firefox.svg';
import ChromeLogo from '@/assets/images/browsers/logo-chrome.svg';
import EdgeLogo from '@/assets/images/browsers/logo-edge.svg';
import SafariLogo from '@/assets/images/browsers/logo-safari.svg';
import BraveLogo from '@/assets/images/browsers/logo-brave.svg';

type BrowserName = 'Firefox' | 'Chrome' | 'Edge' | 'Brave' | 'Safari';

export interface Browser {
  /**
   * Browser name
   */
  name: BrowserName;
  /**
   * Browser logo
   */
  logo: string;
  /**
   * Browser download link. If undefined, browser is not supported
   */
  download?: string;
}

const browsers: Browser[] = [
  {
    name: 'Firefox',
    logo: FirefoxLogo,
    download: 'https://addons.mozilla.org/en-US/firefox/addon/ssasy/'
  },
  {
    name: 'Edge',
    logo: EdgeLogo,
    download: 'https://microsoftedge.microsoft.com/addons/detail/ssasy/akbbgfjfbmflebpjficmbmndoejecjln'
  },
  {
    name: 'Brave',
    logo: BraveLogo,
    download: 'https://chrome.google.com/webstore/detail/ssasy/iefjfkfbgpoadjkckelcpjkobaamomba'
  },
  {
    name: 'Chrome',
    logo: ChromeLogo,
    download: 'https://chrome.google.com/webstore/detail/ssasy/iefjfkfbgpoadjkckelcpjkobaamomba'
  },
  {
    name: 'Safari',
    logo: SafariLogo,
    download: undefined
  }
]

export function useBrowserUtil() {
  /**
   * 
   * @returns Returns the name of the current browser
   */
  function getCurrentBrowserAgent(): BrowserName | undefined {
    const agent = navigator.userAgent.toLowerCase();

    if(agent.indexOf('firefox') > -1) {
      return 'Firefox';
    }

    else if(agent.indexOf('edg/') > -1 || agent.indexOf('msie') > -1 || (agent.indexOf('/') > -1 && agent.indexOf('Edg') > -1)) {
      return 'Edge';
    }

    else if((navigator as any).brave) {
      return 'Brave';
    }

    else if(agent.indexOf('chrome') > -1) {
      return 'Chrome';
    }

    else if(agent.indexOf('safari') > -1) {
      return 'Safari';
    }

    else {
      return undefined;
    }
  }

  /**
   * Returns the current browser object
   */
  function getCurrentBrowser(): Browser | undefined {
    const agent: BrowserName | undefined = getCurrentBrowserAgent();
    
    return browsers.find(browser => browser.name === agent);
  }

  /**
   * Returns all browsers
   */
  function getAllBrowsers(): Browser[] {
    const browsersCopy = browsers.slice();

    const currentBrowser = getCurrentBrowser();

    if(currentBrowser) {
      // sort browsers so that the current browser is first
      const currentBrowserIndex = browsersCopy.findIndex(browser => browser.name === currentBrowser?.name);
      browsersCopy.unshift(browsersCopy.splice(currentBrowserIndex, 1)[0]);
    }

    return [ ...browsers ];
  }

  /**
   * Returns all supported browsers
   */
  function getSupportedBrowsers(): Browser[] {
    return getAllBrowsers().filter(browser => browser.download !== undefined);
  }

  return {
    getCurrentBrowserAgent,
    getCurrentBrowser,
    getAllBrowsers,
    getSupportedBrowsers
  }
}