function domainName(url){
    let x = url.replace('http://', '').replace('https://', '').split('.')
    return (x[0] == 'www') ? x[1] : x[0];
}
