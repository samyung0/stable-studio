import Cookies from "js-cookie";

const cookies = Cookies.withAttributes({
  path: "/",
  secure: true,
  sameSite: "lax",
  expires: 99999,
});

export { cookies };
