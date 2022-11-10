async function consumeAPI () {
  const url = 'http://enderecos.metheora.com'
  const api = await fetch(url)
  const resolve = await api.text()
  console.log(resolve)
  
}

// async function consumeAPI() {
//   const api = await fetch(
//       "https://api.nasa.gov/neo/rest/v1/neo/sentry?api_key=DEMO_KEY"
//   );
//   // const resolve = await api.json();
//   // console.log(resolve["sentry_objects"]);
//   console.log(api)
// }

consumeAPI()