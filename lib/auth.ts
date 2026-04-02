export const AUTH_COOKIE_NAME = "commerceflow_session";

export const DEMO_CREDENTIALS = {
  email: "reviewer@testdemo.com",
  password: "123456",
};

export function isValidDemoCredentials(email: string, password: string) {
  return (
    email.trim().toLowerCase() === DEMO_CREDENTIALS.email &&
    password === DEMO_CREDENTIALS.password
  );
}
