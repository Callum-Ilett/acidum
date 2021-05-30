import Head from "next/head";
import { Header } from "components";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Acidum Dance Night Club</title>
      </Head>

      <Header />

      <main>{children}</main>
    </>
  );
};

export default Layout;
