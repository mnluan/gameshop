const rollback = `<div class="rollback"><button onclick="location.href='#home'"><b>^</b></button></div>`
function createFooter(){
    document.getElementById('footer').innerHTML = '' + 
    '<footer> ' + 
    '<div class="f-logo">' +
      '<img src="./img/logo.png" alt="logo">' +
    '</div>' +
        '<div class="f-info">This is a demo site only, there is no actual game sale available</div>' +
        '<div class="f-info"><h3>Developed by: Luan Nascimento</h3></div>' +
        '<div class="social-box">' +
            '<div class="social">' +
                '<a href="https://www.linkedin.com/in/mnluan/" target="_blank"><img src="./img/social/linkedin.png" alt="linkedin"></a>' +
                '<div class="social-name"><a href="https://www.linkedin.com/in/mnluan/" target="_blank">LinkedIn</a></div>' +
            '</div>' +
            '<div class="social">' +
                '<a href="https://github.com/mnluan" target="_blank"><img src="./img/social/github.png" alt="github"></a>' +
                '<div class="social-name"><a href="https://github.com/mnluan" target="_blank">Github</a></div>' +
            '</div>' +
            '<div class="social">' +
                '<a href="https://mnluan.github.io/portfolio/index.html" target="_blank"><img src="./img/social/portfolio.png" alt="portfolio"></a>' +
                '<div class="social-name"><a href="https://mnluan.github.io/portfolio/index.html" target="_blank">Portfolio</a></div>' +
            '</div>'+
        '</div>'+ rollback +
    '</footer>'
};
  
createFooter();