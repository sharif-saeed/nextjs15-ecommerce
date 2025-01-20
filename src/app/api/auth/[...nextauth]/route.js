import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    session: { 
        strategy: 'jwt' 
    },

    callbacks:{
        async jwt({token, user}){
            if(user){
                token.id = user.id
            }
            return token
        },

        async session({session, token}){
            session.user.id = token.id
            return session
        }

    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}