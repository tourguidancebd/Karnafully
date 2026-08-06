/* ==========================================================================
   TOUR GUIDANCE BD - CENTRAL DATA ENGINE & LANDING PAGE SCRIPT
   Includes Official MV Karnafully Express Cruise Partner Integration
   ========================================================================== */

// Default Seed Data Store with MV Karnafully Express Official Ticket Tiers
const DEFAULT_SITE_DATA = {
  settings: {
    siteName: "Tour Guidance BD",
    tagline: "Luxury & Heritage Travel",
    hotline: "+880 1610-051005",
    hotlineAlt: "09613-888000 / +880 1967-670707",
    whatsapp: "+880 1610-051005",
    email: "info@tourguidancebd.com",
    address: "Suite 704, Green Tower, Gulshan-2, Dhaka-1212, Bangladesh",
    license: "Govt. Approved License #BD-99214",
    socialLinks: {
      facebook: "https://facebook.com/tourguidancebd",
      instagram: "https://instagram.com/tourguidancebd",
      youtube: "https://youtube.com/@tourguidancebd",
      linkedin: "https://linkedin.com/company/tourguidancebd",
      whatsapp: "https://wa.me/8801610051005"
    }
  },
  stats: {
    travelers: 10000,
    tours: 500,
    hotels: 100,
    support: "24/7"
  },
  services: [
    { id: "s1", title: "Tour Packages", icon: "navigation", description: "Handcrafted itineraries covering sea beaches, cloud valleys, jungles, and heritage sites with private guides.", linkText: "Book Package" },
    { id: "s2", title: "MV Karnafully Express Ship", icon: "anchor", description: "Official sales partner for MV Karnafully Express cruise ship to Saint Martin (Cox's Bazar ⇄ St. Martin).", linkText: "Book Cruise Seats" },
    { id: "s3", title: "Hotel Booking", icon: "home", description: "Exclusive partnerships with 5-star beachfront resorts, hill cottages & luxury suites with discounted rates.", linkText: "Reserve Room" },
    { id: "s4", title: "Bus Tickets", icon: "truck", description: "Luxury Scania, Hyundai & Volvo Sleeper/AC coach booking across all major Bangladesh routes.", linkText: "Book Coach Seats" },
    { id: "s5", title: "Corporate Tours", icon: "briefcase", description: "Executive retreats, annual AGMs, team bonding events, and custom corporate hospitality solutions.", linkText: "Corporate Inquiry" },
    { id: "s6", title: "Group Tours", icon: "users", description: "Special group discounts, private bus charters, dedicated tour managers, and campfire arrangements.", linkText: "Group Quote" },
    { id: "s7", title: "Student Tours", icon: "book-open", description: "Budget-friendly educational trips, university excursions, and safety-certified student excursions.", linkText: "Student Plans" },
    { id: "s8", title: "Family Tours", icon: "heart", description: "Comfortable family vacations with child-friendly resorts, private vehicles, and relaxed schedules.", linkText: "Family Packages" }
  ],
  karnafullyTickets: [
    {
      id: "kf-lavender",
      title: "Lavender Class (1st Floor VIP)",
      seats: "70 Seats Available",
      singlePrice: "৳ 1,800",
      roundPrice: "৳ 3,500",
      image: "https://karnafulyexpress.com.bd/img/package-image/lavender---pic.jpg",
      features: ["1st Floor VIP AC Seating", "Open Front & Back Deck Access", "Carpeted Floor & Prayer Room", "Lavender & Lilac Restaurant Access"]
    },
    {
      id: "kf-marigold",
      title: "Marigold Class (1st Floor VIP)",
      seats: "296 Seats Available",
      singlePrice: "৳ 1,800",
      roundPrice: "৳ 3,500",
      image: "https://karnafulyexpress.com.bd/img/package-image/marigold---pic.jpg",
      features: ["1st Floor VIP Seating", "Open Front & Back Deck Access", "Premium Food Service", "Carpeted Floor & Prayer Room"]
    },
    {
      id: "kf-opendeck",
      title: "Open Deck Class (Rooftop Ocean View)",
      seats: "80 Seats Available",
      singlePrice: "৳ 2,100",
      roundPrice: "৳ 4,000",
      image: "https://karnafulyexpress.com.bd/img/package-image/open---deck.jpg",
      features: ["Top Rooftop Deck Ocean View", "Panoramic Bay of Bengal Breeze", "Full Ship Access", "Prayer Room & Restaurant"]
    },
    {
      id: "kf-gladiolus",
      title: "Gladiolus Class (2nd Floor VIP)",
      seats: "108 Seats Available",
      singlePrice: "৳ 2,600",
      roundPrice: "৳ 5,000",
      image: "https://karnafulyexpress.com.bd/img/package-image/Gladiolus-700x400.jpg",
      features: ["2nd Floor Elevation VIP Lounge", "Premium Food & Snack Service", "Open Front & Back Deck Access", "Carpeted Interior"]
    },
    {
      id: "kf-lilac",
      title: "Lilac Lounge (2nd Floor Luxury)",
      seats: "24 Seats Exclusive",
      singlePrice: "৳ 2,700",
      roundPrice: "৳ 5,300",
      image: "https://karnafulyexpress.com.bd/img/package-image/rsz_2lilac_lounge_.jpg",
      features: ["2nd Floor Exclusive Lounge", "Dedicated Cabin Hostess", "Full Ship Deck Access", "Premium Dining Privileges"]
    },
    {
      id: "kf-chrysanthemum",
      title: "Chrysanthemum Lounge (3rd Floor Super VIP)",
      seats: "24 Seats Exclusive",
      singlePrice: "৳ 2,900",
      roundPrice: "৳ 5,600",
      image: "https://karnafulyexpress.com.bd/img/package-image/rsz_chrysanthemum_lounge.jpg",
      features: ["3rd Floor Highest Elevation Lounge", "Panoramic Ocean View Windows", "Private Dining Service", "Full Deck & Rooftop Access"]
    },
    {
      id: "kf-single-cabin",
      title: "MV Karnafully Single VIP Cabin (01 Person)",
      seats: "Private Room",
      singlePrice: "৳ 3,300",
      roundPrice: "৳ 6,500",
      image: "https://karnafulyexpress.com.bd/img/package-image/single.jpg",
      features: ["Private Air-Conditioned Bedroom", "Comfortable Single Bed", "Continuous Room Service", "Full Access to All Decks"]
    },
    {
      id: "kf-twin-cabin",
      title: "MV Karnafully Twin VIP Cabin (02 Persons)",
      seats: "Private Room (2 Beds)",
      singlePrice: "৳ 7,000",
      roundPrice: "৳ 13,000",
      image: "https://karnafulyexpress.com.bd/img/package-image/twin-cabin-bed.jpg",
      features: ["Private Luxury Twin Bed Cabin", "Ocean View Window", "Continuous Room Service", "Full Access to All Decks"]
    }
  ],
  destinations: [
    {
      id: "saint-martin",
      title: "Saint Martin Island (via Karnafully Express)",
      badge: "Coral Paradise",
      rating: "4.9",
      reviewsCount: 480,
      price: "৳ 6,500",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
      description: "Bangladesh’s only coral island featuring crystal turquoise waters, fresh lobster dining, and MV Karnafully Express cruise voyage.",
      highlights: [
        "MV Karnafully Express Cruise VIP tickets (Cox's Bazar ⇄ St. Martin)",
        "Beachfront eco-resort deluxe accommodation",
        "Speedboat tour to Chhera Dwip island",
        "Fresh coral lobster & barbecue dinner"
      ]
    },
    {
      id: "coxs-bazar",
      title: "Cox's Bazar Beach",
      badge: "Longest Beach",
      rating: "4.8",
      reviewsCount: 920,
      price: "৳ 5,500",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description: "The world's longest unbroken sandy sea beach (120km) with luxury oceanfront resorts & Marine Drive.",
      highlights: [
        "5-Star beachfront resort stay with sea-view balcony",
        "Open-top jeep drive through Marine Drive",
        "Inani Beach & Himchari Hill waterfall tour",
        "Daily buffet breakfast & pickup service"
      ]
    },
    {
      id: "sajek-valley",
      title: "Sajek Valley",
      badge: "Kingdom of Clouds",
      rating: "4.9",
      reviewsCount: 650,
      price: "৳ 7,200",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      description: "Perched high in Rangamati, experience floating cloud seas, bamboo cottages, and stunning sunset peaks.",
      highlights: [
        "Hilltop luxury wooden cottage with cloud view",
        "Scania AC bus from Dhaka + 4x4 Chander Gari transfer",
        "Konglak Pahar peak trekking & tribal village visit",
        "Traditional bamboo chicken dinner"
      ]
    },
    {
      id: "bandarban",
      title: "Bandarban",
      badge: "Roof of BD",
      rating: "4.8",
      reviewsCount: 410,
      price: "৳ 6,800",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      description: "Explore Nilgiri heights, Golden Temple, Boga Lake, and mountain waterfalls in Chittagong Hill Tracts.",
      highlights: [
        "Exclusive stay at Nilgiri Hilltop Resort",
        "Chander Gari mountain safari",
        "Golden Temple & Shoilo Propat Waterfall",
        "Guided tribal heritage walk"
      ]
    },
    {
      id: "sundarbans",
      title: "Sundarbans Mangrove",
      badge: "UNESCO Heritage",
      rating: "4.9",
      reviewsCount: 530,
      price: "৳ 12,500",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      description: "Sail through the world's largest mangrove forest, home of the Royal Bengal Tiger & spot exotic wildlife.",
      highlights: [
        "3 Days 3 Nights luxury vessel cabin accommodation",
        "Armed forest ranger & professional wildlife guide",
        "Spot Royal Bengal Tigers, spotted deer, and crocodiles",
        "5 fresh gourmet meals per day on board"
      ]
    },
    {
      id: "sylhet",
      title: "Sylhet & Sreemangal",
      badge: "Tea & Waterfalls",
      rating: "4.7",
      reviewsCount: 380,
      price: "৳ 5,800",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      description: "Lush tea estates, Ratargul freshwater swamp forest, Jaflong crystal rivers, and 7-layer tea tasting.",
      highlights: [
        "4-Star Sreemangal Tea Resort stay",
        "Private boat safari inside Ratargul Swamp Forest",
        "Jaflong zero-point river excursion",
        "Original 7-Layer Tea tasting session"
      ]
    }
  ],
  packages: [
    {
      id: "pkg1",
      title: "MV Karnafully Express Saint Martin Luxury Tour",
      category: "beach",
      tag: "Karnafully Partner",
      duration: "3 Days / 2 Nights",
      price: "৳ 9,500",
      image: "https://karnafulyexpress.com.bd/img/cruise/Website-bg.png",
      highlights: [
        "MV Karnafully Express Round Trip Cruise Tickets",
        "Beachfront Deluxe Resort Stay in Saint Martin",
        "Chhera Dwip Speedboat Trip & Coral Sightseeing",
        "Seafood BBQ Dinner & Breakfast Included"
      ]
    },
    {
      id: "pkg2",
      title: "Sajek Valley Cloud Heaven",
      category: "hill",
      tag: "Luxury Hill",
      duration: "3 Days / 2 Nights",
      price: "৳ 8,200",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Scania AC Bus + 4x4 Chander Gari",
        "Premium Wooden Eco Cottage Stay",
        "Helipad Sunset & Konglak Pahar Trek",
        "Bamboo Chicken & Local Meals"
      ]
    },
    {
      id: "pkg3",
      title: "Cox's Bazar Ocean Front Escapade",
      category: "beach",
      tag: "Popular",
      duration: "4 Days / 3 Nights",
      price: "৳ 11,800",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "5-Star Ocean View Hotel Room",
        "Marine Drive Open Jeep Safari",
        "Inani & Himchari Tour",
        "Buffet Breakfast Included"
      ]
    },
    {
      id: "pkg4",
      title: "Sundarbans Royal Tiger Safari",
      category: "jungle",
      tag: "Exclusive",
      duration: "3 Days / 3 Nights",
      price: "৳ 16,500",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Luxury AC Cruise Vessel Cabin",
        "Kotka & Kochikhali Jungle Trails",
        "Armed Forest Guards & Naturalist",
        "5 Meals / Day Seafood Feast"
      ]
    }
  ],
  reviews: [
    {
      id: "r1",
      name: "Dr. Tahmina Rahman",
      role: "Dhaka | MV Karnafully Saint Martin Tour",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      quote: "Travelling to Saint Martin on MV Karnafully Express was pure luxury! The Gladiolus VIP lounge seating and delicious seafood buffet made our sea voyage unforgettable."
    },
    {
      id: "r2",
      name: "Asif Mahmud",
      role: "Head of HR, TechVision Ltd",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      quote: "Tour Guidance BD booked 45 tickets on MV Karnafully Express for our corporate event with zero hassle. Seamless payment and instant ticket issuance!"
    },
    {
      id: "r3",
      name: "Zubair Hossain",
      role: "Chittagong | Twin VIP Cabin Traveler",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      quote: "The Twin VIP Cabin on MV Karnafully Express felt like a 5-star hotel room on the sea. Waking up to ocean waves through our cabin window was magical!"
    }
  ]
};

// Data Helper Functions
function getSiteData() {
  const local = localStorage.getItem('tgbd_site_data');
  if (!local) {
    localStorage.setItem('tgbd_site_data', JSON.stringify(DEFAULT_SITE_DATA));
    return DEFAULT_SITE_DATA;
  }
  try {
    const parsed = JSON.parse(local);
    // Ensure whatsapp fields exist
    if (!parsed.settings.whatsapp) {
      parsed.settings.whatsapp = parsed.settings.hotline || "+880 1610-051005";
    }
    return parsed;
  } catch (e) {
    return DEFAULT_SITE_DATA;
  }
}

function saveSiteData(data) {
  localStorage.setItem('tgbd_site_data', JSON.stringify(data));
}

function getBookings() {
  const b = localStorage.getItem('tgbd_bookings');
  return b ? JSON.parse(b) : [
    {
      id: "BK-1001",
      name: "Tanvir Ahmed",
      phone: "+880 1610-051005",
      email: "tanvir@example.com",
      package: "MV Karnafully Express - Gladiolus VIP (৳ 5,000 Round Trip)",
      date: "2026-08-25",
      guests: 2,
      notes: "Karnafully Cruise Ticket request",
      status: "Confirmed",
      timestamp: "2026-08-05 14:20"
    }
  ];
}

function saveBookings(bookings) {
  localStorage.setItem('tgbd_bookings', JSON.stringify(bookings));
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  const data = getSiteData();
  
  // Render Site Components
  renderDynamicSiteInfo(data);
  renderDynamicKarnafully(data.karnafullyTickets);
  renderDynamicDestinations(data.destinations);
  renderDynamicPackages(data.packages);
  renderDynamicServices(data.services);
  renderDynamicReviews(data.reviews);

  // Initialize Feather Icons
  if (window.feather) {
    feather.replace();
  }

  // Header Scroll Effect
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile Nav Drawer Toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileClose = document.getElementById('mobileClose');

  function toggleMobileNav() {
    if (mobileNav) mobileNav.classList.toggle('active');
    if (mobileOverlay) mobileOverlay.classList.toggle('active');
  }

  if (hamburger) hamburger.addEventListener('click', toggleMobileNav);
  if (mobileClose) mobileClose.addEventListener('click', toggleMobileNav);
  if (mobileOverlay) mobileOverlay.addEventListener('click', toggleMobileNav);
  window.toggleMobileNav = toggleMobileNav;

  // Testimonials Slider Logic
  initReviewsSlider();

  // Animated Counter for Stats
  initStatsCounter();
});

/* Helper to build valid WhatsApp URL */
function buildWhatsAppUrl(numStr) {
  if (!numStr) return 'https://wa.me/8801610051005';
  if (numStr.startsWith('http')) return numStr;

  let clean = numStr.replace(/\D/g, '');
  if (clean.startsWith('0')) {
    clean = '880' + clean.substring(1);
  } else if (!clean.startsWith('880')) {
    clean = '880' + clean;
  }
  return `https://wa.me/${clean}`;
}

/* Renderers */
function renderDynamicSiteInfo(data) {
  const s = data.settings;

  // --- Apply Brand Identity (name, tagline, logo) ---
  const siteName = s.siteName || 'Tour Guidance BD';
  const tagline  = s.tagline  || 'Luxury & Heritage Travel';
  const logoIcon = s.logoIcon || 'compass';
  const logoUrl  = s.logoUrl  || '';

  // Page title
  document.title = `${siteName} | MV Karnafully Express & Luxury Travel`;

  // All logo-title elements
  document.querySelectorAll('.logo-title').forEach(el => {
    el.textContent = siteName;
  });

  // Tagline elements
  document.querySelectorAll('.logo-tagline').forEach(el => {
    el.textContent = tagline;
  });

  // Logo icon boxes
  document.querySelectorAll('.logo-icon').forEach(box => {
    if (logoUrl) {
      box.innerHTML = `<img src="${logoUrl}" alt="${siteName} logo" style="width:100%; height:100%; object-fit:contain; border-radius:8px;">`;
    } else {
      box.innerHTML = `<i data-feather="${logoIcon}"></i>`;
    }
  });

  if (window.feather) feather.replace();

  const topPhone = document.getElementById('topBarPhone');
  if (topPhone) topPhone.textContent = `Hotline: ${s.hotline}`;

  const topEmail = document.getElementById('topBarEmail');
  if (topEmail) topEmail.textContent = s.email;

  const topAddress = document.getElementById('topBarAddress');
  if (topAddress) topAddress.textContent = s.address.split(',')[0] + ', Bangladesh';

  const footerPhone = document.getElementById('footerPhone');
  if (footerPhone) footerPhone.innerHTML = `<strong>Hotline:</strong><br>${s.hotline} / ${s.hotlineAlt}`;

  const footerEmail = document.getElementById('footerEmail');
  if (footerEmail) footerEmail.innerHTML = `<strong>Email:</strong><br>${s.email}`;

  const footerAddress = document.getElementById('footerAddress');
  if (footerAddress) footerAddress.innerHTML = `<strong>Office Address:</strong><br>${s.address}`;

  const footerWaText = document.getElementById('footerWaText');
  if (footerWaText) footerWaText.innerHTML = `<strong>WhatsApp Support:</strong><br>${s.whatsapp || s.hotline}`;

  // WhatsApp Link Buttons
  const waUrl = buildWhatsAppUrl(s.whatsapp || (s.socialLinks && s.socialLinks.whatsapp));
  
  const waFloat = document.getElementById('whatsappFloat');
  if (waFloat) {
    waFloat.href = `${waUrl}?text=Hello%20Tour%20Guidance%20BD,%20I%20want%20to%20inquire%20about%20a%20tour%20package.`;
  }

  const ctaWaBtn = document.getElementById('ctaWhatsappBtn');
  if (ctaWaBtn) {
    ctaWaBtn.href = `${waUrl}?text=Hello%20Tour%20Guidance%20BD,%20I%20want%20to%20inquire%20about%20a%20tour%20package.`;
  }

  const socialContainer = document.getElementById('footerSocialLinks');
  if (socialContainer && s.socialLinks) {
    socialContainer.innerHTML = `
      ${s.socialLinks.facebook ? `<a href="${s.socialLinks.facebook}" target="_blank" class="social-icon"><i data-feather="facebook"></i></a>` : ''}
      ${s.socialLinks.instagram ? `<a href="${s.socialLinks.instagram}" target="_blank" class="social-icon"><i data-feather="instagram"></i></a>` : ''}
      ${s.socialLinks.youtube ? `<a href="${s.socialLinks.youtube}" target="_blank" class="social-icon"><i data-feather="youtube"></i></a>` : ''}
      ${s.socialLinks.linkedin ? `<a href="${s.socialLinks.linkedin}" target="_blank" class="social-icon"><i data-feather="linkedin"></i></a>` : ''}
      <a href="${waUrl}" target="_blank" class="social-icon"><i data-feather="message-circle"></i></a>
    `;
  }
}

function renderDynamicKarnafully(tickets) {
  const container = document.getElementById('karnafullyTicketsGrid');
  if (!container) return;

  container.innerHTML = (tickets || []).map(t => `
    <div class="destination-card" style="border: 1.5px solid var(--border-gold);">
      <div class="destination-image" style="height:200px;">
        <img src="${t.image}" alt="${t.title}" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'">
        <span class="destination-badge" style="background:var(--primary-dark); color:var(--accent-gold);">${t.seats}</span>
      </div>
      <div class="destination-body">
        <h3 class="destination-title" style="font-size:1.2rem;">${t.title}</h3>
        <ul class="pkg-highlights" style="margin-bottom:16px;">
          ${(t.features || []).map(f => `<li><i data-feather="check" style="color:var(--primary-green);"></i> ${f}</li>`).join('')}
        </ul>
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-light); padding:10px 14px; border-radius:10px; margin-bottom:16px;">
          <div>
            <span style="font-size:0.7rem; color:var(--text-light); text-transform:uppercase; display:block;">Single Trip</span>
            <strong style="color:var(--primary-dark); font-size:1.1rem;">${t.singlePrice}</strong>
          </div>
          <div style="text-align:right;">
            <span style="font-size:0.7rem; color:var(--text-light); text-transform:uppercase; display:block;">Round Trip</span>
            <strong style="color:var(--primary-green); font-size:1.2rem;">${t.roundPrice}</strong>
          </div>
        </div>
        <button class="btn btn-primary btn-sm" style="width:100%;" onclick="openBookingModal('MV Karnafully Ticket: ${t.title} (${t.roundPrice} Round Trip)')">
          <i data-feather="anchor"></i> Book Karnafully Ticket
        </button>
      </div>
    </div>
  `).join('');
}

function renderDynamicDestinations(destinations) {
  const container = document.getElementById('destinationsGrid');
  if (!container) return;

  container.innerHTML = destinations.map(d => `
    <div class="destination-card">
      <div class="destination-image">
        <img src="${d.image}" alt="${d.title}">
        <span class="destination-badge">${d.badge}</span>
        <div class="destination-rating"><i data-feather="star" style="fill:#D4AF37; width:14px;"></i> ${d.rating} (${d.reviewsCount || 400})</div>
      </div>
      <div class="destination-body">
        <h3 class="destination-title">${d.title}</h3>
        <p class="destination-desc">${d.description}</p>
        <div class="destination-footer">
          <div class="destination-price">
            <span class="price-label">Starting From</span>
            <span class="price-val">${d.price}</span>
          </div>
          <button class="btn btn-outline-dark btn-sm" onclick="openDestinationModal('${d.id}')">
            Explore <i data-feather="arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderDynamicPackages(packages) {
  const container = document.getElementById('packagesGrid');
  if (!container) return;

  container.innerHTML = packages.map(p => `
    <div class="package-card" data-category="${p.category || 'beach'}">
      <div class="package-header-img">
        <img src="${p.image}" alt="${p.title}" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'">
        <span class="pkg-tag">${p.tag || 'Luxury'}</span>
        <div class="pkg-duration"><i data-feather="clock"></i> ${p.duration}</div>
      </div>
      <div class="package-content">
        <h3 class="pkg-title">${p.title}</h3>
        <ul class="pkg-highlights">
          ${(p.highlights || []).map(h => `<li><i data-feather="check"></i> ${h}</li>`).join('')}
        </ul>
        <div class="pkg-footer">
          <div class="pkg-price-tag">
            <span>Per Person</span>
            <strong>${p.price}</strong>
          </div>
          <button class="btn btn-primary btn-sm" onclick="openBookingModal('${p.title} (${p.price})')">
            Book Now
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderDynamicServices(services) {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  container.innerHTML = services.map(s => `
    <div class="service-card">
      <div class="service-icon-box">
        <i data-feather="${s.icon || 'navigation'}"></i>
      </div>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
      <a href="javascript:void(0)" class="service-link" onclick="openBookingModal('Service: ${s.title}')">
        ${s.linkText || 'Book Now'} <i data-feather="arrow-right"></i>
      </a>
    </div>
  `).join('');
}

function renderDynamicReviews(reviews) {
  const container = document.getElementById('reviewsTrack');
  if (!container) return;

  container.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-stars">
        ${Array(r.stars || 5).fill('<i data-feather="star" style="fill:#D4AF37;"></i>').join('')}
      </div>
      <p class="review-quote">"${r.quote}"</p>
      <div class="reviewer-meta">
        <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar">
        <div class="reviewer-info">
          <h4 class="reviewer-name">${r.name}</h4>
          <p class="reviewer-role">${r.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* Search Tab Switcher */
function switchSearchTab(button, tabType) {
  const tabs = document.querySelectorAll('.search-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');

  const destSelect = document.getElementById('searchDestination');
  if (!destSelect) return;

  if (tabType === 'ships') {
    destSelect.innerHTML = `
      <option value="MV Karnafully Express - Lavender (৳ 3,500 RT)">MV Karnafully Express - Lavender (৳ 3,500 RT)</option>
      <option value="MV Karnafully Express - Marigold (৳ 3,500 RT)">MV Karnafully Express - Marigold (৳ 3,500 RT)</option>
      <option value="MV Karnafully Express - Open Deck (৳ 4,000 RT)">MV Karnafully Express - Open Deck (৳ 4,000 RT)</option>
      <option value="MV Karnafully Express - Gladiolus (৳ 5,000 RT)">MV Karnafully Express - Gladiolus (৳ 5,000 RT)</option>
      <option value="MV Karnafully Express - Lilac Lounge (৳ 5,300 RT)">MV Karnafully Express - Lilac Lounge (৳ 5,300 RT)</option>
      <option value="MV Karnafully Express - Chrysanthemum (৳ 5,600 RT)">MV Karnafully Express - Chrysanthemum (৳ 5,600 RT)</option>
      <option value="MV Karnafully Express - Single VIP Cabin (৳ 6,500 RT)">MV Karnafully Express - Single VIP Cabin (৳ 6,500 RT)</option>
      <option value="MV Karnafully Express - Twin VIP Cabin (৳ 13,000 RT)">MV Karnafully Express - Twin VIP Cabin (৳ 13,000 RT)</option>
    `;
  } else if (tabType === 'buses') {
    destSelect.innerHTML = `
      <option value="Dhaka to Cox's Bazar (Green Line Scania AC)">Dhaka to Cox's Bazar (Green Line Scania AC)</option>
      <option value="Dhaka to Khagrachari/Sajek (Ena Hyundai AC)">Dhaka to Khagrachari/Sajek (Ena Hyundai AC)</option>
      <option value="Dhaka to Bandarban (Hanif Scania AC)">Dhaka to Bandarban (Hanif Scania AC)</option>
      <option value="Dhaka to Sylhet (Shohag Scania AC)">Dhaka to Sylhet (Shohag Scania AC)</option>
    `;
  } else if (tabType === 'hotels') {
    destSelect.innerHTML = `
      <option value="Sayeman Beach Resort Cox's Bazar">Sayeman Beach Resort (5-Star)</option>
      <option value="Ocean Paradise Cox's Bazar">Ocean Paradise Hotel & Resort</option>
      <option value="Sajek Megh Machang Cottage">Sajek Megh Machang Cottage</option>
      <option value="Grand Sultan Tea Resort Sylhet">Grand Sultan Tea Resort Sylhet</option>
      <option value="Blue Marine Resort Saint Martin">Blue Marine Resort Saint Martin</option>
    `;
  } else {
    destSelect.innerHTML = `
      <option value="Saint Martin Island (via Karnafully Express)">Saint Martin Island (via Karnafully Express)</option>
      <option value="Cox's Bazar">Cox's Bazar Beach</option>
      <option value="Sajek Valley">Sajek Valley, Rangamati</option>
      <option value="Bandarban">Bandarban Hill Tracks</option>
      <option value="Sundarbans">Sundarbans Mangrove</option>
      <option value="Sylhet">Sylhet & Sreemangal</option>
    `;
  }
}

function handleSearch(event) {
  event.preventDefault();
  const dest = document.getElementById('searchDestination').value;
  const date = document.getElementById('searchDate').value;
  const guests = document.getElementById('searchGuests').value;

  openBookingModal(`Search Request: ${dest}`, date, guests);
}

/* Package Category Filter */
function filterPackages(button, category) {
  const filterBtns = document.querySelectorAll('.pkg-filter-btn');
  filterBtns.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  const pkgCards = document.querySelectorAll('.package-card');
  pkgCards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.4s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

/* Reviews Slider Implementation */
let currentReviewIndex = 0;
function initReviewsSlider() {
  const track = document.getElementById('reviewsTrack');
  const cards = document.querySelectorAll('.review-card');
  const prevBtn = document.getElementById('prevReview');
  const nextBtn = document.getElementById('nextReview');
  const dotsContainer = document.getElementById('sliderDots');

  if (!track || cards.length === 0) return;

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => goToReview(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function goToReview(index) {
    currentReviewIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentReviewIndex = (currentReviewIndex - 1 + cards.length) % cards.length;
      goToReview(currentReviewIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentReviewIndex = (currentReviewIndex + 1) % cards.length;
      goToReview(currentReviewIndex);
    });
  }
}

/* Statistics Counter on Scroll */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length === 0) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          if (!target) return;

          let count = 0;
          const timer = setInterval(() => {
            count += Math.ceil(target / 40);
            if (count >= target) {
              stat.textContent = target.toLocaleString() + '+';
              clearInterval(timer);
            } else {
              stat.textContent = count.toLocaleString() + '+';
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSec = document.getElementById('stats');
  if (statsSec) observer.observe(statsSec);
}

/* Booking Modal Engine */
function openBookingModal(packageTitle = 'General Inquiry', defaultDate = '2026-08-20', defaultGuests = '2') {
  const modal = document.getElementById('bookingModal');
  const pkgInput = document.getElementById('bookPackage');
  const dateInput = document.getElementById('bookDate');
  const guestsInput = document.getElementById('bookGuests');
  const title = document.getElementById('modalTitle');

  if (pkgInput) pkgInput.value = packageTitle;
  if (dateInput && defaultDate) dateInput.value = defaultDate;
  if (guestsInput && defaultGuests) guestsInput.value = defaultGuests.replace(/\D/g, '') || 2;
  if (title) title.textContent = `Book: ${packageTitle}`;

  if (modal) modal.classList.add('active');
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.remove('active');
}

function submitBookingForm(event) {
  event.preventDefault();
  const name = document.getElementById('bookName').value;
  const phone = document.getElementById('bookPhone').value;
  const email = document.getElementById('bookEmail').value;
  const pkg = document.getElementById('bookPackage').value;
  const date = document.getElementById('bookDate').value;
  const guests = document.getElementById('bookGuests').value;
  const notes = document.getElementById('bookNotes').value;

  const bookings = getBookings();
  const newBooking = {
    id: `BK-${1000 + bookings.length + 1}`,
    name,
    phone,
    email,
    package: pkg,
    date,
    guests,
    notes,
    status: "Pending",
    timestamp: new Date().toLocaleString()
  };

  bookings.unshift(newBooking);
  saveBookings(bookings);

  closeBookingModal();
  showToast(`Thank you, ${name}! Your booking request for "${pkg}" has been recorded. Reference ID: ${newBooking.id}`, 'success');
}

/* Destination Modal Engine */
function openDestinationModal(destId) {
  const data = getSiteData();
  const dest = data.destinations.find(d => d.id === destId);
  if (!dest) return;

  const content = document.getElementById('destinationModalContent');
  content.innerHTML = `
    <div style="border-radius:16px; overflow:hidden; margin-bottom:20px; height:260px;">
      <img src="${dest.image}" alt="${dest.title}" style="width:100%; height:100%; object-fit:cover;">
    </div>
    <span class="section-tag" style="margin-bottom:8px;"><i data-feather="map-pin"></i> ${dest.badge}</span>
    <h3 style="font-size:1.6rem; color:var(--primary-dark); margin-bottom:12px;">${dest.title}</h3>
    <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6; margin-bottom:20px;">${dest.description}</p>
    
    <h4 style="font-size:1.05rem; color:var(--primary-dark); margin-bottom:10px;">Package Inclusions:</h4>
    <ul class="pkg-highlights" style="margin-bottom:24px;">
      ${(dest.highlights || []).map(h => `<li><i data-feather="check" style="color:var(--primary-green);"></i> ${h}</li>`).join('')}
    </ul>

    <div style="display:flex; justify-content:space-between; align-items:center; background:var(--accent-gold-light); padding:16px 20px; border-radius:12px; border:1px solid var(--border-gold);">
      <div>
        <span style="font-size:0.75rem; color:var(--text-secondary); text-transform:uppercase; font-weight:700;">Starting Price</span>
        <div style="font-size:1.35rem; font-weight:800; color:var(--primary-dark);">${dest.price}</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="closeDestinationModal(); openBookingModal('${dest.title} (${dest.price})');">
        Book Destination Package
      </button>
    </div>
  `;

  if (window.feather) feather.replace();

  const modal = document.getElementById('destinationModal');
  if (modal) modal.classList.add('active');
}

function closeDestinationModal() {
  const modal = document.getElementById('destinationModal');
  if (modal) modal.classList.remove('active');
}

/* Toast Notifications */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-feather="info" style="color:var(--accent-gold); width:18px;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.feather) feather.replace();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-30px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}
