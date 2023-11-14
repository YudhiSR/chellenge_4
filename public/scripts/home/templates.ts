const testimonials = [
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400"
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400"
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400"
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400"
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400"
  }
];
const whyus = [
  {
    icon: `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#F9CC00"/>
<path d="M11.8333 24.3333H9.33329C8.89127 24.3333 8.46734 24.1577 8.15478 23.8452C7.84222 23.5326 7.66663 23.1087 7.66663 22.6667V16.8333C7.66663 16.3913 7.84222 15.9674 8.15478 15.6548C8.46734 15.3423 8.89127 15.1667 9.33329 15.1667H11.8333M17.6666 13.5V10.1667C17.6666 9.50362 17.4032 8.86774 16.9344 8.3989C16.4656 7.93006 15.8297 7.66666 15.1666 7.66666L11.8333 15.1667V24.3333H21.2333C21.6352 24.3379 22.0253 24.197 22.3315 23.9367C22.6378 23.6763 22.8397 23.3141 22.9 22.9167L24.05 15.4167C24.0862 15.1778 24.0701 14.9339 24.0027 14.7019C23.9354 14.4698 23.8184 14.2552 23.6598 14.0729C23.5013 13.8906 23.305 13.7449 23.0846 13.646C22.8642 13.5471 22.6249 13.4973 22.3833 13.5H17.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    `,
    title: "Mobil Lengkap",
    content:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
  },
  {
    icon: `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#FA2C5A"/>
<path d="M23.1583 17.175L17.1833 23.15C17.0285 23.305 16.8447 23.4279 16.6424 23.5118C16.44 23.5956 16.2232 23.6388 16.0041 23.6388C15.7851 23.6388 15.5682 23.5956 15.3659 23.5118C15.1636 23.4279 14.9797 23.305 14.825 23.15L7.66663 16V7.66666H16L23.1583 14.825C23.4687 15.1373 23.6429 15.5597 23.6429 16C23.6429 16.4403 23.4687 16.8627 23.1583 17.175V17.175Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8334 11.8333H11.8417" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    `,
    title: "Harga Murah",
    content:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
  },
  {
    icon: `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#0D28A6"/>
<path d="M16 24.3333C20.6023 24.3333 24.3333 20.6024 24.3333 16C24.3333 11.3976 20.6023 7.66666 16 7.66666C11.3976 7.66666 7.66663 11.3976 7.66663 16C7.66663 20.6024 11.3976 24.3333 16 24.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 11V16L19.3333 17.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    `,
    title: "Layanan 24 Jam",
    content:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
  },
  {
    icon: `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#5CB85F"/>
<path d="M16.0001 18.5C19.2217 18.5 21.8334 15.8883 21.8334 12.6667C21.8334 9.44501 19.2217 6.83334 16.0001 6.83334C12.7784 6.83334 10.1667 9.44501 10.1667 12.6667C10.1667 15.8883 12.7784 18.5 16.0001 18.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8416 17.575L11.8333 25.1667L15.9999 22.6667L20.1666 25.1667L19.1583 17.5667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    `,
    title: "Sopir  Profesional",
    content:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
  }
];
const faq = [
  {
    label: "Apa saja syarat yang dibutuhkan?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    label: "Berapa hari minimal sewa mobil lepas kunci?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    label: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    label: "Apakah Ada biaya antar-jemput?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    label: "Bagaimana jika terjadi kecelakaan",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  }
];
function generateTestimonial(section) {
  testimonials.forEach((testimonial) => {
    const card = document.createElement("div");
    card.className = "col-11 col-sm-11 col-md-6 col-lg-4 mb-3 mb-sm-0 px-3";
    card.innerHTML = `
    <div class="card py-2" style="background: #F1F3FF">
      <div class="card-body d-flex flex-column flex-lg-row justify-content-between align-items-center px-2 pl-3 pl-lg-4">
        <div class="px-3">
          <img src="${
            testimonial.avatar
          }" alt="avatar" width="80" style="border-radius: 50%;"/>
        </div>
        <div >
          <h5 class="card-title">${testimonial.rating}</h5>
          <p class="card-text" style="white-space: wrap;">${
            testimonial.content
          }</p>
          <p class="card-text" style="white-space: wrap; font-weight: bold;">${`January 01 1990`}</p>
        </div>
      </div>
    </div>
  `;
    section.appendChild(card);
  });
}

function generateWhyus(section) {
  whyus.forEach((data) => {
    const card = document.createElement("div");
    card.className = "card mb-3 mb-lg-0 col-12 col-lg-3 mx-2";
    card.innerHTML = `
      <div class="card-body">
      ${data.icon}
        <h5 class="mt-2">${data.title}</h5>
        <p class="mt-3">
       ${data.content}
        </p>
      </div>
  `;
    section.appendChild(card);
  });
}
function generateFaq(section) {
  faq.forEach((data) => {
    const randomId = Math.floor(Math.random() * 100);
    const card = document.createElement("div");
    card.className = "accordion-item border border-light-subtle mb-3";
    card.innerHTML = `
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#${randomId}" aria-expanded="false" aria-controls="flush-collapseOne">
       ${data.label}
      </button>
    </h2>
    <div id="${randomId}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        ${data.content}
      </div>
    </div>
  `;
    section.appendChild(card);
  });
}

generateTestimonial(document.querySelector("#card-testimonial"));
generateWhyus(document.querySelector("#card-whyus"));

generateFaq(document.querySelector("#card-accordion"));
