const contactData = {
  contactInfo: {
    title: "Contact Info",
    description: "Feel free to reach out for project inquiries, collaborations, or technical discussions. I’m always open to new ideas and challenges.",
    items: [
      {
        icon: "bi-geo-alt",
        title: "Our Location",
        lines: [
          "Rathnapura, Sri Lanka",
          "Eheliyagoda"
        ]
      },
      {
        icon: "bi-telephone",
        title: "Phone Number",
        lines: [
          "+94 71 511 1302",
          "+94 71 804 8181"
        ]
      },
      {
        icon: "bi-envelope",
        title: "Email Address",
        lines: [
          "kavindulakmal2000@gmail.com",
          "kltechnology2000@gmail.com"
        ]
      }
    ]
  },

  contactForm: {
    title: "Get In Touch",
    description: "Have a project in mind? Send a message with your requirements, and I’ll get back to you as soon as possible.",
    formAction: "forms/contact.php",
    formMethod: "post",
    fields: [
      {
        type: "text",
        name: "name",
        placeholder: "Your Name",
        required: true,
        colClass: "col-md-6"
      },
      {
        type: "email",
        name: "email",
        placeholder: "Your Email",
        required: true,
        colClass: "col-md-6"
      },
      {
        type: "text",
        name: "subject",
        placeholder: "Subject",
        required: true,
        colClass: "col-12"
      },
      {
        type: "textarea",
        name: "message",
        placeholder: "Message",
        required: true,
        rows: 6,
        colClass: "col-12"
      }
    ],
    submitButtonText: "Send Message",
    messages: {
      loading: "Loading",
      error: "error-message",
      success: "Your message has been sent. Thank you!"
    }
  }
};
