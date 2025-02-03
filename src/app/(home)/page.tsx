// src/app/(home)/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import NonAuthHomeView from "../../sections/NonAuthHomeView";
import AuthHomeView from "../../sections/AuthHomeView";
import { Session } from "next-auth";  // Import session typu, ak nie je automaticky dostupný

export const metadata = { title: "Domov | ZoškaSnap" };

export default async function HomePage() {
  let session: Session | null = null;  // Typovanie session ako Session alebo null
  
  try {
    // Skontroluj session na serverovej strane
    session = await getServerSession(authOptions);
  } catch (error) {
    console.error("Error fetching session:", error);
  }

  // Ak session neexistuje, vráť neautorizovanú verziu stránky
  if (!session) {
    return <NonAuthHomeView />;
  }

  // Ak session existuje, vráť autorizovanú verziu stránky
  return <AuthHomeView  />;
}
