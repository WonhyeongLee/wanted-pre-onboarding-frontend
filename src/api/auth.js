import instance from "./api";

// 회원가입
// 테스트@test.com
export const signUpUser = async (email, password) => {
  try {
    const response = await instance.post("/auth/signup", {
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
// 로그인
export const signInUser = async (email, password) => {
  try {
    const response = await instance.post("/auth/signin", {
      email: email,
      password: password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
