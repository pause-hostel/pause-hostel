const config = {
  apiEndpoint: 'http://www.pausehostel.com/newsite/wp-json/wp/v2',
  email_secret:
    process.env.NODE_ENV === 'development'
      ? btoa('testy')
      : btoa(process.env.PAUSE_EMAIL_KEY), // encode the secret for sending mails
};

export default config;
