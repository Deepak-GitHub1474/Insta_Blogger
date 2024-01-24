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
                token.img = user.img;
                // Add other property if you need
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
                session.user.username = token.username;
                session.user.img = token.img;
            }
            return session;
        },

        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blogs");
            const isOnAddBlogPage = request.nextUrl?.pathname.startsWith("/addblog");
            const isOnProfilePage = request.nextUrl?.pathname.startsWith("/profile");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/auth/login");

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
            
            // ONLY AUTHENTICATED USERS CAN REACH THE PROFILE PAGE
            if (isOnProfilePage && !user) {
                return false;
            }

            // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
            if (isOnLoginPage &&  user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true
        },
    },
};