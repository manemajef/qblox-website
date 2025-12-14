import { PostEmailData } from "./post-email/route";
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export async function postEmail(
  from: string,
  subject: string,
  content: string
) {
  if (!isValidEmail(from)) {
    return new Error("not a valid email");
  }

  const res = await fetch("/api/post-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, subject, content }),
  });
  if (!res.ok) {
    throw new Error("Failed to send email");
  }
  return res.json();
}
