export const NEW_URL = (): string => {
  const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let newUrl = "";
  for(let i = 0; i < 7; i++){
    newUrl += abc[Math.round(Math.random() * (abc.length - 1))];
  }

  return newUrl;
};