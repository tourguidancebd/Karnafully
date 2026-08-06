/* ==========================================================================
   TOUR GUIDANCE BD - ADMIN PANEL CONTROLLER
   Includes: Brand/Logo Manager, Security/Password, CRUD for all entities,
   MV Karnafully Express Ticket Management, WhatsApp Updater
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) feather.replace();

  // Show logged-in user
  const user = sessionStorage.getItem('tgbd_admin_user') || 'admin';
  const userEl = document.getElementById('adminUserName');
  const avatarEl = document.getElementById('adminUserAvatar');
  const secUser = document.getElementById('secLoggedInUser');
  if (userEl) userEl.textContent = user;
  if (avatarEl) avatarEl.textContent = user.charAt(0).toUpperCase();
  if (secUser) secUser.textContent = user;

  // Show session expiry
  const expiry = sessionStorage.getItem('tgbd_token_exp');
  const secExpiry = document.getElementById('secTokenExpiry');
  if (secExpiry && expiry) {
    const ms = parseInt(expiry, 10) - Date.now();
    const hrs = Math.floor(ms / 3600000);
    const mins = Math.floor((ms % 3600000) / 60000);
    secExpiry.textContent = `In ${hrs}h ${mins}m`;
  }

  refreshAdminAll();
});

function logoutAdmin() {
  if (!confirm('Are you sure you want to log out?')) return;
  sessionStorage.removeItem('tgbd_admin_token');
  sessionStorage.removeItem('tgbd_token_exp');
  sessionStorage.removeItem('tgbd_admin_user');
  window.location.href = 'login.html';
}

function refreshAdminAll() {
  const data = getSiteData();
  const bookings = getBookings();

  renderAdminDashboard(data, bookings);
  loadSiteSettingsForm(data);
  loadBrandSettingsForm(data);
  renderAdminKarnafully(data.karnafullyTickets || []);
  renderAdminDestinations(data.destinations);
  renderAdminPackages(data.packages);
  renderAdminServices(data.services);
  renderAdminReviews(data.reviews);
  renderAdminLeads(bookings);

  const badge = document.getElementById('leadCountBadge');
  if (badge) badge.textContent = bookings.length;
}

/* ======================================================
   TAB SWITCHER
   ====================================================== */
function switchAdminTab(button, tabId) {
  document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
  button.classList.add('active');

  document.querySelectorAll('.admin-content-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  const titlesMap = {
    'dashTab':        ['Dashboard Overview', 'Key statistics, recent bookings, and system health'],
    'karnafullyTab':  ['MV Karnafully Express Tickets', 'Manage seat capacity, single trip & round trip pricing for all 8 cruise classes'],
    'brandTab':       ['Brand & Logo Settings', 'Change company name, logo icon, and tagline that appears site-wide'],
    'settingsTab':    ['Site & Social Links', 'Modify phone numbers, WhatsApp, email, address, and social links'],
    'destinationsTab':['Destinations Manager', 'Add, edit, or delete featured Bangladesh travel destinations'],
    'packagesTab':    ['Tour Packages Manager', 'Manage pricing, highlights, categories, and duration'],
    'servicesTab':    ['Services Manager', 'Edit the 8 primary service offerings'],
    'reviewsTab':     ['Customer Reviews', 'Manage traveler testimonials and star ratings'],
    'leadsTab':       ['Booking Leads & Inquiries', 'Manage customer tour requests and update booking statuses'],
    'securityTab':    ['Security & Password', 'Change admin username/password and view session info']
  };

  const title = document.getElementById('adminPageTitle');
  const sub = document.getElementById('adminPageSubtitle');
  if (titlesMap[tabId]) {
    if (title) title.textContent = titlesMap[tabId][0];
    if (sub)   sub.textContent   = titlesMap[tabId][1];
  }
}

function switchAdminTabByTabId(tabId) {
  const btn = Array.from(document.querySelectorAll('.admin-tab-btn'))
    .find(b => b.getAttribute('onclick') && b.getAttribute('onclick').includes(tabId));
  if (btn) switchAdminTab(btn, tabId);
}

/* ======================================================
   DASHBOARD
   ====================================================== */
function renderAdminDashboard(data, bookings) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('dashTotalLeads', bookings.length);
  set('dashTotalDest', data.destinations.length);
  set('dashTotalReviews', data.reviews.length);
  set('dashTotalKarnafully', (data.karnafullyTickets || []).length);

  const tableBody = document.getElementById('dashRecentLeadsBody');
  if (!tableBody) return;

  const recent = bookings.slice(0, 5);
  if (recent.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-light);">No booking inquiries yet.</td></tr>`;
    return;
  }

  tableBody.innerHTML = recent.map(b => `
    <tr>
      <td><strong>${b.id}</strong></td>
      <td>${b.name}</td>
      <td>${b.phone}</td>
      <td>${b.package}</td>
      <td>${b.date}</td>
      <td><span class="status-badge status-${b.status.toLowerCase()}">${b.status}</span></td>
    </tr>
  `).join('');
}

/* ======================================================
   BRAND & LOGO SETTINGS
   ====================================================== */
function loadBrandSettingsForm(data) {
  const s = data.settings;
  const el = id => document.getElementById(id);

  if (el('setBrandName'))    el('setBrandName').value    = s.siteName    || 'Tour Guidance BD';
  if (el('setBrandTagline')) el('setBrandTagline').value = s.tagline     || 'Luxury & Heritage Travel';
  if (el('setBrandIcon'))    el('setBrandIcon').value    = s.logoIcon    || 'compass';
  if (el('setBrandLogoUrl')) el('setBrandLogoUrl').value = s.logoUrl     || '';

  updateBrandPreview();
}

function updateBrandPreview() {
  const name    = document.getElementById('setBrandName')?.value    || 'Tour Guidance BD';
  const tagline = document.getElementById('setBrandTagline')?.value || 'Luxury & Heritage Travel';
  const icon    = document.getElementById('setBrandIcon')?.value    || 'compass';
  const logoUrl = document.getElementById('setBrandLogoUrl')?.value || '';

  const previewName    = document.getElementById('brandPreviewName');
  const previewTagline = document.getElementById('brandPreviewTagline');
  const previewIconBox = document.getElementById('brandPreviewIcon');

  if (previewName)    previewName.textContent    = name;
  if (previewTagline) previewTagline.textContent = tagline;

  if (previewIconBox) {
    if (logoUrl) {
      previewIconBox.innerHTML = `<img src="${logoUrl}" alt="Logo" style="width:100%; height:100%; object-fit:contain; border-radius:10px;">`;
    } else {
      previewIconBox.innerHTML = `<i data-feather="${icon || 'compass'}" id="previewIconEl"></i>`;
      if (window.feather) feather.replace();
    }
  }
}

function saveBrandSettings(event) {
  event.preventDefault();
  const data = getSiteData();

  const name    = document.getElementById('setBrandName').value.trim();
  const tagline = document.getElementById('setBrandTagline').value.trim();
  const icon    = document.getElementById('setBrandIcon').value.trim() || 'compass';
  const logoUrl = document.getElementById('setBrandLogoUrl').value.trim();

  data.settings.siteName = name;
  data.settings.tagline  = tagline;
  data.settings.logoIcon = icon;
  data.settings.logoUrl  = logoUrl;

  saveSiteData(data);

  // Update sidebar live
  const sidebarName = document.getElementById('sidebarBrandName');
  if (sidebarName) sidebarName.textContent = name;

  showToast(`Brand updated! Company name is now "${name}". Refresh the main site to see changes.`, 'success');
}

/* ======================================================
   SITE SETTINGS & SOCIAL LINKS
   ====================================================== */
function loadSiteSettingsForm(data) {
  const s = data.settings;
  const el = id => document.getElementById(id);

  if (el('setHotline'))    el('setHotline').value    = s.hotline    || '';
  if (el('setHotlineAlt')) el('setHotlineAlt').value = s.hotlineAlt || '';
  if (el('setWhatsapp'))   el('setWhatsapp').value   = s.whatsapp   || s.hotline || '';
  if (el('setEmail'))      el('setEmail').value      = s.email      || '';
  if (el('setLicense'))    el('setLicense').value    = s.license    || '';
  if (el('setAddress'))    el('setAddress').value    = s.address    || '';

  const soc = s.socialLinks || {};
  if (el('setSocialFb')) el('setSocialFb').value = soc.facebook  || '';
  if (el('setSocialIg')) el('setSocialIg').value = soc.instagram || '';
  if (el('setSocialYt')) el('setSocialYt').value = soc.youtube   || '';
  if (el('setSocialLi')) el('setSocialLi').value = soc.linkedin  || '';
}

function saveSiteSettings(event) {
  event.preventDefault();
  const data = getSiteData();

  const waRaw   = document.getElementById('setWhatsapp').value.trim();
  let waClean   = waRaw.replace(/\D/g, '');
  if (waClean.startsWith('0'))         waClean = '880' + waClean.substring(1);
  else if (!waClean.startsWith('880')) waClean = '880' + waClean;

  data.settings.hotline    = document.getElementById('setHotline').value.trim();
  data.settings.hotlineAlt = document.getElementById('setHotlineAlt').value.trim();
  data.settings.whatsapp   = waRaw;
  data.settings.email      = document.getElementById('setEmail').value.trim();
  data.settings.license    = document.getElementById('setLicense').value.trim();
  data.settings.address    = document.getElementById('setAddress').value.trim();

  data.settings.socialLinks = {
    facebook:  document.getElementById('setSocialFb').value.trim(),
    instagram: document.getElementById('setSocialIg').value.trim(),
    youtube:   document.getElementById('setSocialYt').value.trim(),
    linkedin:  document.getElementById('setSocialLi').value.trim(),
    whatsapp:  `https://wa.me/${waClean}`
  };

  saveSiteData(data);
  showToast('Site settings & WhatsApp number updated successfully!', 'success');
}

/* ======================================================
   SECURITY: CHANGE USERNAME & PASSWORD
   ====================================================== */
function getAdminCredentials() {
  const saved = localStorage.getItem('tgbd_admin_credentials');
  if (saved) { try { return JSON.parse(saved); } catch(e) {} }
  return { username: 'admin', password: 'tgbd2024' };
}

function saveAdminCredentials(creds) {
  localStorage.setItem('tgbd_admin_credentials', JSON.stringify(creds));
}

function changeAdminCredentials(event) {
  event.preventDefault();

  const currentPw  = document.getElementById('secCurrentPw').value;
  const newUser    = document.getElementById('secNewUser').value.trim();
  const newPw      = document.getElementById('secNewPw').value;
  const confirmPw  = document.getElementById('secConfirmPw').value;

  const creds = getAdminCredentials();

  if (currentPw !== creds.password) {
    showToast('Current password is incorrect. Please try again.', 'error');
    return;
  }

  if (newPw !== confirmPw) {
    showToast('New passwords do not match. Please re-enter.', 'error');
    return;
  }

  if (newPw.length < 6) {
    showToast('Password must be at least 6 characters.', 'error');
    return;
  }

  saveAdminCredentials({ username: newUser, password: newPw });

  // Update session user
  sessionStorage.setItem('tgbd_admin_user', newUser);
  const userEl   = document.getElementById('adminUserName');
  const avatarEl = document.getElementById('adminUserAvatar');
  const secUser  = document.getElementById('secLoggedInUser');
  if (userEl)   userEl.textContent   = newUser;
  if (avatarEl) avatarEl.textContent = newUser.charAt(0).toUpperCase();
  if (secUser)  secUser.textContent  = newUser;

  // Clear form
  document.getElementById('securityForm').reset();

  showToast(`Credentials updated! New username: "${newUser}". Use these on next login.`, 'success');
}

/* ======================================================
   MV KARNAFULLY EXPRESS
   ====================================================== */
function renderAdminKarnafully(tickets) {
  const tbody = document.getElementById('karnafullyTableBody');
  if (!tbody) return;

  tbody.innerHTML = tickets.map(t => `
    <tr>
      <td><img src="${t.image}" style="width:48px; height:36px; border-radius:6px; object-fit:cover;" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'"></td>
      <td><strong>${t.title}</strong></td>
      <td><span class="status-badge" style="background:var(--accent-gold-light); color:var(--primary-dark);">${t.seats}</span></td>
      <td><strong style="color:var(--primary-dark);">${t.singlePrice}</strong></td>
      <td><strong style="color:var(--primary-green);">${t.roundPrice}</strong></td>
      <td>
        <button class="btn-icon" onclick="editKarnafullyPrompt('${t.id}')" title="Edit Ticket Class"><i data-feather="edit-2" style="width:14px;"></i></button>
      </td>
    </tr>
  `).join('');

  if (window.feather) feather.replace();
}

function editKarnafullyPrompt(id) {
  const data = getSiteData();
  const t = (data.karnafullyTickets || []).find(x => x.id === id);
  if (!t) return;

  const newSingle = prompt(`Single Trip Price for "${t.title}":`, t.singlePrice);
  if (newSingle === null) return;

  const newRound = prompt(`Round Trip Price for "${t.title}":`, t.roundPrice);
  if (newRound === null) return;

  t.singlePrice = newSingle.trim();
  t.roundPrice  = newRound.trim();

  saveSiteData(data);
  refreshAdminAll();
  showToast(`Updated pricing for ${t.title}!`, 'success');
}

/* ======================================================
   DESTINATIONS CRUD
   ====================================================== */
function renderAdminDestinations(destinations) {
  const tbody = document.getElementById('destinationsTableBody');
  if (!tbody) return;

  tbody.innerHTML = destinations.map(d => `
    <tr>
      <td><img src="${d.image}" style="width:48px; height:36px; border-radius:6px; object-fit:cover;"></td>
      <td><strong>${d.title}</strong></td>
      <td><span class="destination-badge" style="position:static;">${d.badge}</span></td>
      <td><i data-feather="star" style="fill:#D4AF37; width:12px;"></i> ${d.rating}</td>
      <td><strong style="color:var(--primary-green);">${d.price}</strong></td>
      <td>
        <div class="action-btn-group">
          <button class="btn-icon" onclick="openEditDestinationModal('${d.id}')"><i data-feather="edit-2" style="width:14px;"></i></button>
          <button class="btn-icon danger" onclick="deleteDestination('${d.id}')"><i data-feather="trash-2" style="width:14px;"></i></button>
        </div>
      </td>
    </tr>
  `).join('');

  if (window.feather) feather.replace();
}

function openAddDestinationModal() {
  ['destEditId','destTitle','destBadge','destPrice','destImage','destDesc','destHighlights'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  document.getElementById('destModalTitle').textContent = 'Add New Destination';
  document.getElementById('adminDestModal').classList.add('active');
}

function openEditDestinationModal(id) {
  const data = getSiteData();
  const d = data.destinations.find(x => x.id === id);
  if (!d) return;

  document.getElementById('destEditId').value    = d.id;
  document.getElementById('destTitle').value     = d.title;
  document.getElementById('destBadge').value     = d.badge;
  document.getElementById('destPrice').value     = d.price;
  document.getElementById('destImage').value     = d.image;
  document.getElementById('destDesc').value      = d.description;
  document.getElementById('destHighlights').value = (d.highlights || []).join(', ');

  document.getElementById('destModalTitle').textContent = `Edit: ${d.title}`;
  document.getElementById('adminDestModal').classList.add('active');
}

function saveDestinationForm(event) {
  event.preventDefault();
  const data   = getSiteData();
  const editId = document.getElementById('destEditId').value;

  const newDest = {
    id: editId || `dest-${Date.now()}`,
    title:       document.getElementById('destTitle').value,
    badge:       document.getElementById('destBadge').value,
    rating:      '4.9',
    reviewsCount: 450,
    price:       document.getElementById('destPrice').value,
    image:       document.getElementById('destImage').value,
    description: document.getElementById('destDesc').value,
    highlights:  document.getElementById('destHighlights').value.split(',').map(s => s.trim()).filter(Boolean)
  };

  if (editId) {
    const idx = data.destinations.findIndex(x => x.id === editId);
    if (idx !== -1) data.destinations[idx] = newDest;
  } else {
    data.destinations.push(newDest);
  }

  saveSiteData(data);
  closeAdminModal('adminDestModal');
  refreshAdminAll();
  showToast('Destination saved!', 'success');
}

function deleteDestination(id) {
  if (!confirm('Delete this destination?')) return;
  const data = getSiteData();
  data.destinations = data.destinations.filter(x => x.id !== id);
  saveSiteData(data);
  refreshAdminAll();
  showToast('Destination deleted.', 'info');
}

/* ======================================================
   PACKAGES CRUD
   ====================================================== */
function renderAdminPackages(packages) {
  const tbody = document.getElementById('packagesTableBody');
  if (!tbody) return;

  tbody.innerHTML = packages.map(p => `
    <tr>
      <td><img src="${p.image}" style="width:48px; height:36px; border-radius:6px; object-fit:cover;" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'"></td>
      <td><strong>${p.title}</strong></td>
      <td><span class="status-badge" style="background:var(--accent-gold-light); color:var(--primary-dark);">${p.category}</span></td>
      <td>${p.duration}</td>
      <td><strong style="color:var(--primary-green);">${p.price}</strong></td>
      <td>
        <div class="action-btn-group">
          <button class="btn-icon" onclick="openEditPackageModal('${p.id}')"><i data-feather="edit-2" style="width:14px;"></i></button>
          <button class="btn-icon danger" onclick="deletePackage('${p.id}')"><i data-feather="trash-2" style="width:14px;"></i></button>
        </div>
      </td>
    </tr>
  `).join('');

  if (window.feather) feather.replace();
}

function openAddPackageModal() {
  ['pkgEditId','pkgTitle','pkgImage','pkgHighlights'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('pkgCategory').value = 'beach';
  document.getElementById('pkgTag').value      = 'Best Seller';
  document.getElementById('pkgDuration').value = '3 Days / 2 Nights';
  document.getElementById('pkgPrice').value    = '৳ 8,500';
  document.getElementById('pkgModalTitle').textContent = 'Add Tour Package';
  document.getElementById('adminPkgModal').classList.add('active');
}

function openEditPackageModal(id) {
  const data = getSiteData();
  const p    = data.packages.find(x => x.id === id);
  if (!p) return;

  document.getElementById('pkgEditId').value     = p.id;
  document.getElementById('pkgTitle').value      = p.title;
  document.getElementById('pkgCategory').value   = p.category || 'beach';
  document.getElementById('pkgTag').value        = p.tag || '';
  document.getElementById('pkgDuration').value   = p.duration;
  document.getElementById('pkgPrice').value      = p.price;
  document.getElementById('pkgImage').value      = p.image;
  document.getElementById('pkgHighlights').value = (p.highlights || []).join('\n');

  document.getElementById('pkgModalTitle').textContent = `Edit: ${p.title}`;
  document.getElementById('adminPkgModal').classList.add('active');
}

function savePackageForm(event) {
  event.preventDefault();
  const data   = getSiteData();
  const editId = document.getElementById('pkgEditId').value;

  const newPkg = {
    id:         editId || `pkg-${Date.now()}`,
    title:      document.getElementById('pkgTitle').value,
    category:   document.getElementById('pkgCategory').value,
    tag:        document.getElementById('pkgTag').value,
    duration:   document.getElementById('pkgDuration').value,
    price:      document.getElementById('pkgPrice').value,
    image:      document.getElementById('pkgImage').value,
    highlights: document.getElementById('pkgHighlights').value.split('\n').map(s => s.trim()).filter(Boolean)
  };

  if (editId) {
    const idx = data.packages.findIndex(x => x.id === editId);
    if (idx !== -1) data.packages[idx] = newPkg;
  } else {
    data.packages.push(newPkg);
  }

  saveSiteData(data);
  closeAdminModal('adminPkgModal');
  refreshAdminAll();
  showToast('Tour package saved!', 'success');
}

function deletePackage(id) {
  if (!confirm('Delete this package?')) return;
  const data = getSiteData();
  data.packages = data.packages.filter(x => x.id !== id);
  saveSiteData(data);
  refreshAdminAll();
  showToast('Package deleted.', 'info');
}

/* ======================================================
   SERVICES
   ====================================================== */
function renderAdminServices(services) {
  const tbody = document.getElementById('servicesTableBody');
  if (!tbody) return;

  tbody.innerHTML = services.map(s => `
    <tr>
      <td><i data-feather="${s.icon || 'navigation'}" style="color:var(--primary-green);"></i></td>
      <td><strong>${s.title}</strong></td>
      <td style="color:var(--text-secondary); max-width:400px;">${s.description}</td>
      <td>
        <button class="btn-icon" onclick="editServicePrompt('${s.id}')"><i data-feather="edit-2" style="width:14px;"></i></button>
      </td>
    </tr>
  `).join('');

  if (window.feather) feather.replace();
}

function editServicePrompt(id) {
  const data = getSiteData();
  const s    = data.services.find(x => x.id === id);
  if (!s) return;

  const newDesc = prompt(`Update description for "${s.title}":`, s.description);
  if (newDesc !== null && newDesc.trim() !== '') {
    s.description = newDesc.trim();
    saveSiteData(data);
    refreshAdminAll();
    showToast(`Service "${s.title}" updated!`, 'success');
  }
}

/* ======================================================
   REVIEWS
   ====================================================== */
function renderAdminReviews(reviews) {
  const tbody = document.getElementById('reviewsTableBody');
  if (!tbody) return;

  tbody.innerHTML = reviews.map(r => `
    <tr>
      <td><img src="${r.avatar}" style="width:36px; height:36px; border-radius:50%; object-fit:cover;"></td>
      <td><strong>${r.name}</strong></td>
      <td>${r.role}</td>
      <td>⭐ ${r.stars || 5}</td>
      <td style="font-style:italic; max-width:300px;">"${r.quote}"</td>
      <td>
        <button class="btn-icon danger" onclick="deleteReview('${r.id}')"><i data-feather="trash-2" style="width:14px;"></i></button>
      </td>
    </tr>
  `).join('');

  if (window.feather) feather.replace();
}

function openAddReviewModal() {
  ['reviewEditId','reviewName','reviewRole','reviewQuote'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('reviewAvatar').value = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';
  document.getElementById('adminReviewModal').classList.add('active');
}

function saveReviewForm(event) {
  event.preventDefault();
  const data = getSiteData();

  data.reviews.push({
    id:     `rev-${Date.now()}`,
    name:   document.getElementById('reviewName').value,
    role:   document.getElementById('reviewRole').value,
    stars:  5,
    avatar: document.getElementById('reviewAvatar').value,
    quote:  document.getElementById('reviewQuote').value
  });

  saveSiteData(data);
  closeAdminModal('adminReviewModal');
  refreshAdminAll();
  showToast('Testimonial added!', 'success');
}

function deleteReview(id) {
  if (!confirm('Delete this review?')) return;
  const data = getSiteData();
  data.reviews = data.reviews.filter(x => x.id !== id);
  saveSiteData(data);
  refreshAdminAll();
  showToast('Review deleted.', 'info');
}

/* ======================================================
   BOOKING LEADS
   ====================================================== */
function renderAdminLeads(bookings) {
  const tbody = document.getElementById('leadsTableBody');
  if (!tbody) return;

  if (bookings.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-light);">No customer booking leads found.</td></tr>`;
    return;
  }

  tbody.innerHTML = bookings.map(b => `
    <tr>
      <td><strong>${b.id}</strong></td>
      <td>${b.name}</td>
      <td><div>${b.phone}</div><small style="color:var(--text-light);">${b.email}</small></td>
      <td>${b.package}</td>
      <td>${b.date}</td>
      <td>${b.guests}</td>
      <td>
        <select onchange="updateLeadStatus('${b.id}', this.value)" style="padding:4px 8px; border-radius:6px; font-weight:700; font-size:0.8rem; background:var(--bg-light);">
          <option value="Pending"   ${b.status === 'Pending'   ? 'selected' : ''}>Pending</option>
          <option value="Confirmed" ${b.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
          <option value="Cancelled" ${b.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
        </select>
      </td>
      <td>
        <button class="btn-icon danger" onclick="deleteLead('${b.id}')"><i data-feather="trash-2" style="width:14px;"></i></button>
      </td>
    </tr>
  `).join('');

  if (window.feather) feather.replace();
}

function updateLeadStatus(id, newStatus) {
  const bookings = getBookings();
  const b = bookings.find(x => x.id === id);
  if (b) {
    b.status = newStatus;
    saveBookings(bookings);
    refreshAdminAll();
    showToast(`Lead ${id} → ${newStatus}`, 'success');
  }
}

function deleteLead(id) {
  if (!confirm(`Delete booking inquiry ${id}?`)) return;
  saveBookings(getBookings().filter(x => x.id !== id));
  refreshAdminAll();
  showToast(`Inquiry ${id} deleted.`, 'info');
}

function exportLeadsCSV() {
  const bookings = getBookings();
  if (!bookings.length) { alert('No booking leads to export.'); return; }

  const headers = ['Ref ID','Customer Name','Phone','Email','Package','Date','Guests','Status','Timestamp'];
  const rows = bookings.map(b => [b.id, b.name, b.phone, b.email, `"${b.package}"`, b.date, b.guests, b.status, `"${b.timestamp || ''}"`]);

  const csv = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const link = document.createElement('a');
  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', `TGBD_Leads_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();

  showToast('Booking leads exported as CSV!', 'success');
}

/* ======================================================
   MODALS & UTILITIES
   ====================================================== */
function closeAdminModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove('active');
}

function exportDataJSON() {
  const data = getSiteData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href  = url;
  link.download = `Tour_Guidance_BD_Config_${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('Site configuration exported as JSON!', 'success');
}

function resetToDefaults() {
  if (!confirm('Reset ALL site data to factory defaults? This cannot be undone.')) return;
  localStorage.removeItem('tgbd_site_data');
  refreshAdminAll();
  showToast('All website data reset to factory defaults!', 'info');
}

/* ======================================================
   TOAST NOTIFICATIONS
   ====================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const colors = { success: '#22C55E', error: '#EF4444', info: '#D4AF37' };
  const icons  = { success: 'check-circle', error: 'alert-circle', info: 'info' };

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-feather="${icons[type] || 'info'}" style="color:${colors[type] || colors.info}; width:18px; min-width:18px;"></i><span>${message}</span>`;

  container.appendChild(toast);
  if (window.feather) feather.replace();

  setTimeout(() => {
    toast.style.cssText += 'opacity:0; transform:translateX(-30px); transition:all 0.3s ease;';
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}
