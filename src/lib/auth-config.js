export const authConfig = {
    pages: {
        signIn: "/auth/login",
    },

    providers: [],

    callbacks: {

        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
                token.username = user.username;
                // Add other property if you need
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
                session.user.username = token.username;
            }
            return session;
        },

        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blogs");
            const isOnAddBlogPage = request.nextUrl?.pathname.startsWith("/addblog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/auth/login");
            // const isOnRegisterPage = request.nextUrl?.pathname.startsWith("/auth/register");

            // ADMIN ACCESS ONLY
            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
            if (isOnBlogPage && !user) {
                return false;
            }

            // ONLY AUTHENTICATED USERS CAN REACH THE ADD BLOG PAGE
            if (isOnAddBlogPage && !user) {
                return false;
            }

            // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
            if (isOnLoginPage &&  user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            // ONLY UNAUTHENTICATED USERS CAN REACH THE REGISTER PAGE
            // if (isOnRegisterPage &&  user) {
            //     return Response.redirect(new URL("/", request.nextUrl));
            // }

            return true
        },
    },
};