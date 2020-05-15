export const CustomDate = (() => {

  const pad = (num) => { 
    return ("0"+num).slice(-2);
  }

  const getTimeFromDate = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return pad(hours)+":"+pad(minutes)+":"+pad(seconds)
  };

  return {
    getTimeFromDate
  };

})();