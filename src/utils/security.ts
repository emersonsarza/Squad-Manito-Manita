const cipher = (salt: string) => {
  const textToChars = (text: string) =>
    text.split('').map((c) => c.charCodeAt(0));
  const byteHex = (n: number) => ('0' + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code: any) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text: string) =>
    text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
};

const decipher = (salt: string) => {
  const textToChars = (text: string) =>
    text.split('').map((c) => c.charCodeAt(0));
  const applySaltToChar = (code: any) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded: any) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex: string) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode: number) => String.fromCharCode(charCode))
      .join('');
};

export const secretKey = 'default';
export const encrypt = cipher(process.env.REACT_APP_SECRET_KEY || secretKey);
export const decrypt = decipher(process.env.REACT_APP_SECRET_KEY || secretKey);
