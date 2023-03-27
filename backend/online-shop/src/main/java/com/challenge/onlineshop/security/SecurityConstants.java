package com.challenge.onlineshop.security;

public class SecurityConstants {
    public static final String SECRET_KEY = "bQeThWmZq4t7w!z$C&F)J@NcRfUjXn2r5u8x/A?D*G-KaPdSgVkYp3s6v9y$B&E)"; // Secret key for JWT encryption.
    public static final int TOKEN_EXPIRATION = 7200000; // 7200000 milliseconds = 2 hours.
    public static final String BEARER = "Bearer "; // Authorization : "Bearer " + Token 
    public static final String AUTHORIZATION = "Authorization"; // "Authorization" : Bearer Token
    public static final String REGISTER_PATH = "/customer/register"; // Public path that clients can use to register.
    public static final String LOGIN_PATH = "/authenticate"; // Public path that clients can use to login.
}