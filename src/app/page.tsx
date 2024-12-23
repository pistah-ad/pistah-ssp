import { redirect } from "next/navigation";

export default function AppHome() {
  redirect("/dashboard");
  return null;
}
