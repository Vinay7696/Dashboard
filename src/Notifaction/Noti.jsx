import React, { useRef, useState } from "react";
import { IoIosNotifications } from "react-icons/io";

const Noti = () => {
  const [open, setopen] = useState(false);
  // const style =

  // const menuref = useRef();
  // const iconref = useRef();

  // window.addEventListener('click', (e)=>{
  //     if(e.target !== menuref.current && e.target !== iconref.current){
  //         setopen (false);
  //     }
  // })
  // window.addEventListener("click", (e) => {
  //   console.log(e.target === menuref.current);
  // });

  return (
    <>
      <div className="">
        <div className="">
          <IoIosNotifications
            // ref={iconref}
            onClick={() => setopen(!open)}
            fontSize={24}
            className="cursor-pointer"
          />
          <span className="absolute mr-[283px] mt-[13px] z-1 h-2 w-2 rounded-full text-red bg-meta-1 
          "><span className="absolute -z-1 inline-flex h-full w-full text-[#000] animate-ping rounded-full bg-meta-1 opacity-1"></span>
          </span>
        </div>
        {open && (
          <div
            // ref={menuref}
            className="absolute -right-27 mt-4 flex h-[280px] w-[270px] flex-col rounded-sm border border-stroke bg-white shadow-default    "
          >
            <div className="px-5 py-3">
              <h3 className="text-sm font-medium ">Notification</h3>
            </div>
            <ul
              onClick={() => setopen(false)}
              className="flex h-auto flex-col overflow-y-auto"
            >
              <li>
                {" "}
                <a
                  href=""
                  className="flex flex-col border-t border-stroke px-4 py-3 hover:bg-gray-100"
                >
                  <p className="text-sm">
                    <span className="text-black">
                      Edit your information in a swipe
                    </span>
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </p>{" "}
                  <p className="text-xs py-2">12 May, 2025</p>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="/"
                  className="flex flex-col border-t border-stroke px-4 py-3 hover:bg-gray-100"
                >
                  <p className="text-sm">
                    <span className="text-black">
                      Edit your information in a swipe
                    </span>
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </p>{" "}
                  <p className="text-xs py-2">12 May, 2025</p>
                </a>
              </li>

              <li>
                {" "}
                <a
                  href="/"
                  className="flex flex-col border-t border-stroke px-4 py-3 hover:bg-gray-100"
                >
                  <p className="text-sm text-red">
                    <span className="text-black">
                      Edit your information in a swipe
                    </span>
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </p>{" "}
                  <p className="text-xs py-2">12 May, 2025</p>
                </a>
              </li>

              <li>
                {" "}
                <a
                  href="/"
                  className="flex flex-col border-t border-stroke px-4 py-3 hover:bg-gray-100"
                >
                  <p className="text-sm">
                    <span className="text-black">
                      Edit your information in a swipe
                    </span>
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </p>{" "}
                  <p className="text-xs py-2">12 May, 2025</p>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Noti;
