function renderContact() {
  const infoContainer = document.querySelector('.contact-info-container');
  const formContainer = document.querySelector('.contact-form-container');

  const data = (typeof contactData !== 'undefined') ? contactData : (window.contactData || null);
  if (!data) {
    console.error('contactData not found');
    return;
  }

  if (infoContainer) {
    const info = data.contactInfo;
    let infoHtml = `\n      <div class="info-box">\n        <h3>${info.title}</h3>\n        <p>${info.description}</p>\n`;

    info.items.forEach(item => {
      infoHtml += `\n        <div class="info-item">\n          <div class="icon-box">\n            <i class="bi ${item.icon}"></i>\n          </div>\n          <div class="content">\n            <h4>${item.title}</h4>\n            ${item.lines.map(line => `<p>${line}</p>`).join('\n            ')}\n          </div>\n        </div>\n`;
    });

    infoHtml += '      </div>\n';
    infoContainer.innerHTML = infoHtml;
  }

  if (formContainer) {
    const form = data.contactForm;
    let formHtml = `\n      <div class="contact-form">\n        <h3>${form.title}</h3>\n        <p>${form.description}</p>\n        <form action="${form.formAction}" method="${form.formMethod}" class="php-email-form">\n          <div class="row gy-4">\n`;

    form.fields.forEach(field => {
      if (field.type === 'textarea') {
        formHtml += `            <div class="${field.colClass}">\n              <textarea class="form-control" name="${field.name}" rows="${field.rows || 4}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}></textarea>\n            </div>\n`;
      } else {
        formHtml += `            <div class="${field.colClass}">\n              <input type="${field.type}" name="${field.name}" class="form-control" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}>\n            </div>\n`;
      }
    });

    formHtml += `            <div class="col-12 text-center">\n              <div class="loading">${form.messages.loading}</div>\n              <div class="error-message"></div>\n              <div class="sent-message">${form.messages.success}</div>\n\n              <button type="submit" class="btn">${form.submitButtonText}</button>\n            </div>\n          </div>\n        </form>\n      </div>\n`;

    formContainer.innerHTML = formHtml;
  }

  // If there are any scripts that need re-initialization, do it here (AOS etc.)
  if (window.AOS) {
    setTimeout(() => window.AOS.refresh(), 100);
  }

  console.log('Contact rendered');
}

// Run after a short delay to ensure data file executed
setTimeout(renderContact, 60);