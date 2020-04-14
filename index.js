const puppeteer = require('puppeteer');
const ejs = require('ejs');

(async () => {
  const info = {
    company: 'The Coffess House',
    companyAddress: '266 Đội Cấn, Liễu Giai, Ba Đình, Hà Nội',
    name: 'Andy Junior',
    address: '87 Vĩnh Phúc, Vĩnh Phúc, Ba Đình, Hà Nội',
    paymentReason: 'Nợ phải trả',
    amount: '10.000.000đ',
    handyAmount: 'Mười triệu đồng chẵn.',
    source: '00000000981',
    billDate: '10/03/2020',
  };
  const browser = await puppeteer.launch();
    const page = await browser.newPage();
    ejs.renderFile(__dirname + "/bill.ejs", info, async function (err, data) {
      await page.setContent(data);
      await page.pdf({ format: 'A4', path: 'bill.pdf' });
      await browser.close();
    });
})();
