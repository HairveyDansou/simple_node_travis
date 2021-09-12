const FAVORITE_COUNTRY = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FAVORITE_COUNTRY} rock!`);
    await sleep(5000);
  }
}

main();
