import { GraphQLDateTime, GraphQLDate, GraphQLTime } from "graphql-iso-date"
import jwt from "jsonwebtoken"
import cookie from "cookie"
import { GraphQLUpload } from "apollo-server-micro"
import db from "../mongo"

export const resolvers = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
  Upload: GraphQLUpload,
  Mutation: {
    userRegisterAndLoginSocial: async (parent, args, context, info) => {
      const { email, type, id } = args

      const user = await db.collection("users").findOne({ email })
      if (user) {
        await db
          .collection("users")
          .findOneAndUpdate({ email }, { $set: { GG_ID: id } })

        const payload = { userId: user._id, userRole: user.role }
        const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
          expiresIn: "7 days",
        })

        context.res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, {
            // httpOnly: true,
            maxAge: 6 * 60 * 60,
            path: "/",
            // sameSite: "lax",
            // secure: process.env.NODE_ENV === "production",
          })
        )

        return { token }
      }

      if (!user && type === "VK") {
        const date = new Date()
        const newUser = {
          email,
          VK_ID: id,
          firstName: "",
          lastName: "",
          login: "",
          role: "USER",
          createdAt: date,
          updatedAt: date,
          isSendNewStockReminders: "EMAIL",
          isSendPaymentsReminders: "EMAIL",
          isSendAnotherReminders: "EMAIL",
          status: "NEW",
        }
        try {
          await db.collection("users").insertOne(newUser)
          const user = await db.collection("users").findOne({ email })
          const payload = { userId: user._id, userRole: user.role }
          const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
            expiresIn: "7 days",
          })

          context.res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
              // httpOnly: true,
              maxAge: 6 * 60 * 60,
              path: "/",
              // sameSite: "lax",
              // secure: process.env.NODE_ENV === "production",
            })
          )

          return { token }
        } catch (error) {
          console.log("error")
          return false
        }
      }

      if (!user && type === "FB") {
        const date = new Date()
        const newUser = {
          email,
          FB_ID: id,
          login: "",
          firstName: "",
          lastName: "",
          role: "USER",
          createdAt: date,
          updatedAt: date,
          isSendNewStockReminders: "EMAIL",
          isSendPaymentsReminders: "EMAIL",
          isSendAnotherReminders: "EMAIL",
          status: "NEW",
        }
        try {
          await db.collection("users").insertOne(newUser)
          const user = await db.collection("users").findOne({ email })
          const payload = { userId: user._id, userRole: user.role }
          const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
            expiresIn: "7 days",
          })

          context.res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
              // httpOnly: true,
              maxAge: 6 * 60 * 60,
              path: "/",
              // sameSite: "lax",
              // secure: process.env.NODE_ENV === "production",
            })
          )

          return { token }
        } catch (error) {
          console.log("error")
          return false
        }
      }

      if (!user && type === "GG") {
        const date = new Date()
        const newUser = {
          email,
          GG_ID: id,
          firstName: "",
          lastName: "",
          login: "",
          role: "USER",
          createdAt: date,
          updatedAt: date,
          isSendNewStockReminders: "EMAIL",
          isSendPaymentsReminders: "EMAIL",
          isSendAnotherReminders: "EMAIL",
          status: "NEW",
        }
        try {
          await db.collection("users").insertOne(newUser)
          const user = await db.collection("users").findOne({ email })
          const payload = { userId: user._id, userRole: user.role }
          const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
            expiresIn: "7 days",
          })

          context.res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
              // httpOnly: true,
              maxAge: 6 * 60 * 60,
              path: "/",
              // sameSite: "lax",
              // secure: process.env.NODE_ENV === "production",
            })
          )

          return { token }
        } catch (error) {
          console.log("error")
          return false
        }
      }
    }
  }
}