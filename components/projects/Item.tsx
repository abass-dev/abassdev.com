import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const Item = ({name, description, seeMore, techs, headerLinks }) => {
  return (
                 <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                quality={75}
                className="w-full"
                src="/assets/images/php_code.webp"
                width={430}
                height={600}
                alt={name}
              />
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{name}</h2>
                { headerLinks.github.url }
                <p className="text-gray-700 text-base">{description}</p>                   
                  <br />                   
                  <p>                     
                  Let's discover{" "}                     
                  <a className="text-blue-700" href={seeMore.url}> {seeMore.text}</a>{" "}in 5 minutes. 
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
              {techs.map((value, index) => {
                return (
                 <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{value}
                 </span>
                )
              })}
              </div>
            </div>
    )
}

export default Item