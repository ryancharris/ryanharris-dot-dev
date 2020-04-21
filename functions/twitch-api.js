const fetch = require("node-fetch")
require("dotenv").config()

const TWITCH_API = "https://id.twitch.tv/oauth2/token"

function getTwitchData(token) {
  console.log("Fetching broadcast info...")
  console.log(`---> Using token: ${token}`)

  return fetch("https://api.twitch.tv/helix/streams?user_login=ryan_c_harris", {
    method: "GET",
    header: {
      Authorization: `Bearer ${token}`,
      "Client-ID": process.env.GATSBY_TWITCH_CLIENT_ID,
    },
  })
    .then(res => res.json())
    .then(json => json)
    .catch(err => err)
}

exports.handler = async function(event, context) {
  console.log("Requesting token from Twitch API...")
  const data = fetch(
    `${TWITCH_API}?client_id=${process.env.GATSBY_TWITCH_CLIENT_ID}&client_secret=${process.env.GATSBY_TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then(res => res.json())
    .then(json => {
      const token = json.access_token
      console.log("---> Token response:")
      console.log(json)
      return getTwitchData(token)
    })
    .then(twitch => {
      const { status } = twitch

      if (status === 200) {
        console.log("Success!")
        return {
          statusCode: 200,
          body: JSON.stringify(twitch),
        }
      } else {
        console.log("Request failed...")
        return {
          statusCode: status,
          body: `${twitch.error} [${status}]: ${twitch.message}`,
        }
      }
    })
    .catch(err => {
      return {
        statusCode: 422,
        body: String(err),
      }
    })

  return data
}
