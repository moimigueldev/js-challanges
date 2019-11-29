function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    console.log('url', url.split('.'))
    return url.split('.')[0];
  };

module.exports = domainName;

