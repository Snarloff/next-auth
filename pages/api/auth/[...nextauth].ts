import prisma from 'lib/prisma'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      }
    })
  ],

  callbacks: {
    session: ({ session, user }) => ({
      ...session, user: {
        ...session.user,
        id: user.id,
        username: user.username
      }
    })
  }
}

export default NextAuth(AuthOptions)