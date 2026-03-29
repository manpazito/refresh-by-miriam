// ===== Footer Dates =====
const yearEl = document.getElementById('year');
const updatedEl = document.getElementById('last-updated');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (updatedEl) {
  updatedEl.textContent =
    `Last updated on ${new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })}`;
}

// ===== Mobile Navigation =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Contact Form Success State (Netlify Redirect) =====
const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');

if (form && success) {
  const params = new URLSearchParams(window.location.search);
  if (params.get('success') === '1') {
    form.style.display = 'none';
    success.style.display = 'block';
  }
}

// ===== Live U.S. Phone Formatter =====
const phoneInput = document.getElementById('phone');
const phoneExtensionInput = document.getElementById('phone-extension');

if (phoneInput) {
  phoneInput.addEventListener('input', (event) => {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 10);

    if (digits.length <= 3) {
      event.target.value = digits;
      return;
    }

    if (digits.length <= 6) {
      event.target.value = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      return;
    }

    event.target.value = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  });
}

if (phoneExtensionInput) {
  phoneExtensionInput.addEventListener('input', (event) => {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 3);
    event.target.value = digits ? `+${digits}` : '';
  });
}

// ===== Copy Contact Email =====
const copyEmailBtn = document.getElementById('copy-email-btn');
const contactEmail = document.getElementById('contact-email');

if (copyEmailBtn && contactEmail) {
  copyEmailBtn.addEventListener('click', async () => {
    const email = contactEmail.textContent.trim();

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const temp = document.createElement('textarea');
      temp.value = email;
      temp.setAttribute('readonly', '');
      temp.style.position = 'absolute';
      temp.style.left = '-9999px';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }

    const originalLabel = copyEmailBtn.getAttribute('aria-label');
    copyEmailBtn.setAttribute('aria-label', 'Email copied');
    copyEmailBtn.setAttribute('title', 'Copied');
    copyEmailBtn.classList.add('copied');

    setTimeout(() => {
      copyEmailBtn.setAttribute('aria-label', originalLabel || 'Copy email address');
      copyEmailBtn.setAttribute('title', 'Copy email');
      copyEmailBtn.classList.remove('copied');
    }, 1200);
  });
}
