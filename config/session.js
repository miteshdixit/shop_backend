const sessionConfig = {
  cookie: {
    httpOnly: true,
    maxAge: 432000000, // 5 days
    secure: process.env.NODE_ENV === "production",
    sameSite: "None",
  },
};

export default sessionConfig;
