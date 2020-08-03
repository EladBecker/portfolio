'use strict';

const MONTHS = ['January', "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const MY_EMAIL = 'Becker.Elad@gmail.com';
function initPage() {
    renderPortfolio();
}

// render

function renderPortfolio() {
    var projs = getAllProjs();
    var strHTMLs = projs.map(function (proj) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="renderModal1('${proj.id}')" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${proj.imgUrl}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>
        `;
    });
    $('#portfolio .projs').html(strHTMLs.join(''));
}

function renderModal1(projId) {
    var currProj = getProjById(projId);
    $('.modal-body h2').text(currProj.name);
    $('.modal-body .item-intro').text(currProj.title);
    $('.modal-body .goto-proj').attr('action', currProj.url);
    $('.modal-body img').attr('src', currProj.imgUrl);
    $('.modal-body img').attr('alt', currProj.name);
    $('.modal-body p').text(currProj.desc);
    var publishedAt = new Date(currProj.publishedAt);
    $('.modal-body ul li:first-child').text('Date: ' + MONTHS[publishedAt.getMonth()] + ' ' + (1900 + publishedAt.getYear()));
    var labelsHTMLs = currProj.labels.map(function (label) {
        return `<a class="label" href=''>${label}</a>`;
    });
    $('.modal-body ul li:last-child').html(labelsHTMLs.join(' | '))
}

function onSendEmail(){
    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${MY_EMAIL}&su=${$('#contact .subject').val()}&body=${$('#contact .email-txt').val()}`;
    window.open(url, '_blank');
}