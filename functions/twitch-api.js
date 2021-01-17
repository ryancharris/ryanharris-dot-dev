// const fetch = require("node-fetch")
// require("dotenv").config()

// function getTwitchData(token) {
//   console.log("Fetching broadcast info...")

//   const apiUrl = "https://api.twitch.tv/helix/streams?user_login=ryan_c_harris"

//   return fetch(apiUrl, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Client-ID": process.env.GATSBY_TWITCH_CLIENT_ID,
//     },
//   })
//     .then(res => {
//       if (res.ok) {
//         return res.json()
//       } else {
//         throw new Error("Unable to authenticate with Twitch API")
//       }
//     })
//     .catch(err => err)
// }

// exports.handler = async function(event, context) {
//   console.log("Requesting token from Twitch API...")

//   const TWITCH_API = "https://id.twitch.tv/oauth2/token"
//   const tokenUrl = `${TWITCH_API}?client_id=${process.env.GATSBY_TWITCH_CLIENT_ID}&client_secret=${process.env.GATSBY_TWITCH_CLIENT_SECRET}&grant_type=client_credentials`

//   const data = fetch(tokenUrl, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Client-ID": process.env.GATSBY_TWITCH_CLIENT_ID,
//     },
//   })
//     .then(res => {
//       if (res.ok) {
//         return res.json()
//       } else {
//         throw new Error("Cannot retrieve access_token from Twitch API")
//       }
//     })
//     .then(async json => {
//       const token = json.access_token
//       return {
//         statusCode: 200,
//         body: JSON.stringify(await getTwitchData(token)),
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//         },
//       }
//     })
//     .catch(err => {
//       return {
//         statusCode: 422,
//         body: String(err),
//       }
//     })

//   return data
// }
