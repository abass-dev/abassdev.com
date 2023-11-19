"use client";

import { usePathname } from "next/navigation";
import Form from "./Form";
import { Report } from "../";

const Contact = () => {
  const pathName = usePathname();
  return (
    <>
      <div className={`${pathName === "/contact/" ? "xpt" : "pt-8"} px-5 pb-8`}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-3xl">Abass Dev</h1>
            <br />
            <p>Web and mobile app developer at self-employed.</p>
            <br />
            <p>19 Patrice Lumumba Road, Accra, GH, GA-254-4987, Ghana.</p>
            <br />
            <p>
              Email:{" "}
              <a className="text-blue-700" href="mailto:abass@abassdev.com">
                abass@abassdev.com
              </a>
            </p>
            <br />
            <p>
              {" "}
              Phone:{" "}
              <a className="text-blue-700" href="tel:+233598208469">
                +233 59 820 8469
              </a>
            </p>
          </div>
          <Form />
        </div>
      </div>
      <Report report="contact/page" />
    </>
  );
};
export default Contact;
