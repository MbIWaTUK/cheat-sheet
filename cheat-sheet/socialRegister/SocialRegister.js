import { useEffect } from "react"
import { useMutation, useApolloClient } from "@apollo/react-hooks"
import gql from "graphql-tag"

const SOCIAL_LOGIN = gql`
  mutation UserRegisterAndLoginSocial(
    $id: String!
    $email: String
    $type: Social
  ) {
    userRegisterAndLoginSocial(id: $id, email: $email, type: $type) {
      token
    }
  }
`
const SocialRegister = () => {
  const [socialLogin] = useMutation(SOCIAL_LOGIN)
  const client = useApolloClient()
  useEffect(() => {
    //GG
    window.gapi.load("auth2", function () {
      window.gapi.auth2
        .init({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        })
        .then(
          () => console.log("OK"),
          () => console.log("ERROR")
        )
    }),
      //VK

      VK.init({
        apiId: process.env.NEXT_PUBLIC_VK_CLIENT_ID,
      })
    // FB

    FB.init({
      appId: process.env.NEXT_PUBLIC_FB_CLIENT_ID,
      cookie: true, // Enable cookies to allow the server to access the session.
      xfbml: true, // Parse social plugins on this webpage.
      version: "v7.0", // Use this Graph API version for this call.
    })
  }, [])

  const signInGG = () => {
    const authOk = async (user) => {
      const userId = user.getBasicProfile().getId()
      const userEmail = user.getBasicProfile().getEmail()
      try {
        const { data } = await socialLogin({
          variables: { email: userEmail, id: userId, type: "GG" },
        })
        if (data.userRegisterAndLoginSocial) {
          await client.resetStore()
        }
      } catch (error) {
        setError(error)
      }
    }

    const authErr = () => { }
    const googleAuth = window.gapi.auth2.getAuthInstance()
    googleAuth
      .signIn({
        scope: "profile email",
      })
      .then(authOk, authErr)
  }

  const signInVK = () => {
    var url =
      "https://oauth.vk.com/authorize?client_id=7541472&display=page&redirect_uri=http://localhost:3000&scope=email&response_type=token&v=5.120"

    var newWin = window.open(url, "vk-login", "width=665,height=370")

    newWin.onload = function () {
      var hash = newWin.location.hash
      console.log(hash)
    }

    // VK.Auth.login(function (response) {
    //   if (response.session) {
    //     console.log(response)
    //   }
    // })

    // var data = {}
    // data = res.session
    // var user = {}
    // user = res.session.user
    // VK.Api.call(
    //   "users.get",
    //   {
    //     fields: "photo_id",
    //     v: 5.21,
    //     scope: "email",
    //   },
    //   function (res) {
    //     console.log(res)
    //     if (res.response) {
    //       console.log(res.response)
    //       data.user = user
    //     }
    //   }
    // )

    // VK.Auth.logout()

    // try {
    //   const { data } = await socialLogin({
    //     variables: { email: userEmail, id: userId, type: "VK" },
    //   })
    //   if (data.userRegisterAndLoginSocial) {
    //     await client.resetStore()
    //   }
    // } catch (error) {
    //   setError(error)
    // }
    // }
  }
  const signInFB = () => {
    // FB.logout(function (response) {
    //   console.log(response)

    // })
    FB.login(
      function (response) {
        console.log(response)
        if (response) {
          console.log(response)
          // console.log("ID", response.authResponse.userId)
        } else {
          console.log("ERROR")
        }
      },
      { scope: "public_profile,email" }
    )
  }


  return (
    <div>
      <a href="#" onClick={signInGG}>
        GG
      </a>
      <a href="#" onClick={signInFB}>
        FB
      </a>
      <a href="#" onClick={signInVK}>
        VK
      </a>
    </div>
  )
}

export default SocialRegister