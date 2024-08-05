export type SignInInput = {
  email: string;
  password: string;
};

export type SignUpInput = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

export type UserSettingInput = {
  image?: string;
  name: string;
  email: string;
  password: string;
};
