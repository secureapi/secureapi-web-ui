import md5 from "md5";
import { format, parseISO } from "date-fns";

export const getGravatarURL = (email = "") => {
  const hashedEmail = md5(email.toLowerCase());
  return `https://www.gravatar.com/avatar/${hashedEmail}`;
};

export const formatDate = (
  dateAsString,
  formatTokens = "dd-MM-yyyy HH:mm:ss"
) => format(parseISO(dateAsString), formatTokens);
