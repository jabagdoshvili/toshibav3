const contactData = [{
    attr: 'NCR',
    title: 'SUPER-AIRE REFRIGERATION & CONTRACTORS, INC.',
    desc: 'QUEZON CITY',
    phone: '0917 819 7908',
    social: 'https://web.facebook.com/SuperBuyAtSuperaire',
    email: 'gomarielgo@yahoo.com',
    dealer: '/assets/images/companies/image001.png'
  },
  {
    attr: 'NL',
    title: 'WINTER COOL REF & AIRCON SERVICES & TRADING',
    desc: 'BULACAN',
    phone: '0923-933-6866',
    social: 'https://www.facebook.com/wintercoolph',
    email: 'wintercoolphil@gmail.com',
    dealer: '/assets/images/companies/image003.png'
  },
  {
    attr: 'NL',
    title: 'KOOLTREND APPLIANCE SERVICE CENTER',
    desc: 'PANGASINAN',
    phone: '0919-0006936',
    social: 'https://www.facebook.com/TrusttheACexperts',
    email: 'KOOLTREND8@gmail.com',
    dealer: '/assets/images/companies/image005.png'
  },
  {
    attr: 'NL',
    title: 'RON REF & AIRCON SUPPLIES AND SERVICES',
    desc: 'NUEVA ECIJA',
    phone: '0977-819-3282',
    social: 'https://www.facebook.com/TrusttheACexperts',
    email: 'imrhodfigueroa@gmail.com',
    dealer: '/assets/images/companies/image007.png'
  },
  {
    attr: 'NCR',
    title: 'THE AIRCON STORE',
    desc: 'PASIG',
    phone: '0998-956-7147',
    social: 'https://www.facebook.com/TheAirconStorePasig',
    email: 'sales@theairconstoreph.com',
    dealer: '/assets/images/companies/image007.png'
  },
  {
    attr: 'NCR',
    title: 'THE AIRCON STORE',
    desc: 'PASIG',
    phone: '0998-956-7147',
    social: 'https://www.facebook.com/TheAirconStorePasig',
    email: 'sales@theairconstoreph.com',
    dealer: '/assets/images/companies/image011.png'
  },
  {
    attr: 'NCR',
    title: "MATEO'S REFRIGERATION AND AIRCONDITIONING SERVICES AND TRADING",
    desc: 'ANTIPOLO',
    phone: '0916-335-6312',
    social: 'https://www.facebook.com/Mateos-Airconditioning-505329079620164',
    email: 'daniel.delpilar@yahoo.com',
    dealer: '/assets/images/companies/image013.png'
  },
  {
    attr: 'VISAYAS',
    title: "LDC REFRIGERATION & AIRCONDITIONING INC.",
    desc: 'BACOLOD',
    phone: '0922-839-0461',
    social: 'https://www.facebook.com/LDCRefAir',
    email: 'ldc.nonong@gmail.com',
    dealer: '/assets/images/companies/image015.png'
  },
  {
    attr: 'VISAYAS',
    title: "LDC REFRIGERATION & AIRCONDITIONING INC.",
    desc: 'MANDALAGAN, BACOLOD',
    phone: '0932-858-3548',
    social: 'https://www.facebook.com/LDCRefAir',
    email: 'salesoffice@ldcrefair.com',
    dealer: '/assets/images/companies/image015.png'
  },
  {
    attr: 'MINDANAO',
    title: "AIRPROSYSTEMS, INC.",
    desc: 'DAVAO',
    phone: '0933-850-2196',
    social: 'https://www.facebook.com/airpro.ph',
    email: 'beth@airpro.ph',
    dealer: '/assets/images/companies/image019.png'
  }
]

function setData() {
  contactData.forEach((el, ind) => {
    let { title, desc, phone, email, social, attr, dealer } = el
    $('.shop-list').append(`
      <div class="shop-col" data-attr="${attr}">
        <img src="${dealer}" alt="">
        <h5>${title}</h5>
        <span>${desc}</span>
        <span>${phone}</span>
        <ul>
          <li><a href="mailto:${email}"><img src="/assets/images/icons/email.png" alt=""></a></li>
          <li><a href="${social}" target="_blank"><img src="/assets/images/icons/fb.png" alt=""></a></li>
        </ul>
        <div class="obj">
          <img src="/assets/images/partials/prime.png" alt="">
        </div>
      </div>
    `)
  })
}
setData()

void
function InitDomEvents() {

  $('.sm-menu-bar-icon').click(function() {
    $('.mobile-menu').toggleClass('visible')
  })

  
  $('.filter-tabs li').click(function() {
    $(this).addClass('active').siblings().removeClass('active')
    let attr = $(this).text()
  
    $(`.shop-list .shop-col`).hide()
  
    if(attr == 'ALL') {
      $(`.shop-list .shop-col`).show()
    } else {
      $(`.shop-list .shop-col[data-attr="${attr}"]`).show()
    }
  })

}()

void
function Init() {

  var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  AOS.init();

}()
