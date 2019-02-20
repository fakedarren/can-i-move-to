const puppeteer = require('puppeteer');


module.exports = async (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;

  let firstName;
  let lastName;

  if (name.includes(' ')) {
    firstName = name.split(' ')[0];
    lastName = name.split(' ')[1];
  } else {
    firstName = name;
    lastName = '';
  }

  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();

  await page.goto('https://www.bestforbritain.org/join', { waitUntil: 'load' });

  await page.type('[name="signup[first_name]"]', firstName);
  await page.type('[name="signup[last_name]"', lastName);
  await page.type('[name="signup[email]"]', email);

  await page.click('[name="signup[email_opt_in]"]');

  await page.$eval('.signup_form', form => form.submit());

  res.json({
    success: true,
  });
};
