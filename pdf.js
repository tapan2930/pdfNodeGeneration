const puppeteer = require('puppeteer');

exports.app = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/resume?resumeOnly=true');
  let pdfBuffer = await page.pdf({
      path:"resumeTapan.pdf",
      printBackground:true,
      pageRanges:'1-1',
      format:"Letter",
    }).catch((err)=>{
        console.log(err)
    })

  await browser.close();
  return pdfBuffer
}
