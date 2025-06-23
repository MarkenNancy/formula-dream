import { Header } from "@/components";
import { FadeIn } from "@/components/animation";
import FooterBottom from "@/components/molecules/Footer/FooterBottom";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="bg-[#F5F5F5]">
        <FadeIn>
          <FooterBottom className="pb-8" />
        </FadeIn>
      </footer>
    </>
  );
}
