class Auth {
    getTemporaryToken() {

    }

    getLongTermToken() {

    }

    authWithTokens() {

    }
}

class FacedeAuth extends Auth {
    auth() {
        this.authWithTokens();
        this.getLongTermToken();
        return this.authWithTokens();
    }
}

function Auth(instanceAuth) {
    if (! instanceAuth instanceof Auth) {
        throw new TypeError();
    }
    instanceAuth.authWithTokens();
    instanceAuth.getLongTermToken();
    return instanceAuth.authWithTokens();
}