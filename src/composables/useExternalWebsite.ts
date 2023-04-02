export function useExtenralWebsite(){
  function sendTo(url: string | undefined){
    if(typeof url === 'string'){
      window.open(url, '_blank');
    }

    return;
  }

  return {
    sendTo
  } 
}