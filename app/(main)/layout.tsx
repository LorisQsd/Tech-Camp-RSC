import Link from "next/link";

type HomePageLayoutProps = {
  children: React.ReactNode;
};

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => (
  <>
    <header className="block mx-auto w-fit pt-4 m-4 text-center">
      <Link
        href="/"
        className="font-mono py-4 px-12 bg-zinc-800/80 rounded-xl text-3xl font-bold text-center duration-150 hover:drop-shadow-white"
      >
        Tech Camp RSC
      </Link>
    </header>
    {children}
  </>
);

export default HomePageLayout;
