import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between dark:bg-dark dark:text-light lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
        <div className="flex items-center py-2">
          Built with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>{" "}
          by &nbsp;
          <Link className="underline underline-offset-2" href="/">
            MKJ
          </Link>
        </div>
        <Link className="underline underline-offset-2" href="/">
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
