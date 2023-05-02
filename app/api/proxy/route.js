import axios from 'axios';


export async function GET(request) { 
 
 let finData = ""
 let data = {}
    const headers = {
        'Content-Type': 'application/json',
        'X-Nukkad-Api-Token':'PeB6c75axZDByrASjDqw87RzaZVAMSHI',
        'X-Nukkad-Signature':'0de81ed4f458bf244238166dc676c504f8326af5',
        'X-Nukkad-Nonce':'1682415116'
      }
      
    await axios.post("http://staging.nukkadshops.com/open_apis_staging/public/v1/harhith/itemMasterList", data, {
          headers: headers
        })
        .then((response) => {
      finData = response,
      console.log(response)
        })
        .catch((error) => {
         console.log(error)
        })
  //  return new Response(finData)
   return new Response(finData, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
  }