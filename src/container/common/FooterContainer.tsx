import React, { useState } from "react";
import { SpaceYLogo_floor } from "../../images/blue";
import { userService } from "../../services";
const FooterContainer = () => {
  const [userAddress, setUserAddress] = useState<string>("");

  // const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // console.log(event.target.value)
  //   setUserAddress(event.target.value)
  //   console.log(userAddress);

  // }
  // console.log('====================================');
  // console.log(userAddress);
  // console.log('====================================');
  const addClick = async (userAddress: any) => {
    const { handleSubscribeEmail } = userService;
    let nonce = await handleSubscribeEmail(userAddress);
    console.log("====================================");
    console.log(nonce);
    console.log("====================================");
  };

  return (
    <div className="flex flex-row justify-around items-center pb-20">
      <div className="flex flex-col ">
        <div className="">
          <img src={SpaceYLogo_floor} alt="" />
        </div>
        <div className="">
          © 2021 Blockfish Inc <br />
          TERMS & CONDITIONS | PRIVACY POLICY
        </div>
      </div>
      <div className="">
        <div>Subscribe to Our Newsletter</div>
        <div className="mt-2">Email*</div>
        <div className="mt-2 w-50 h-9 ">
          <input
            className="w-full h-full rounded-md bg-black inp"
            type="text"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
          />
        </div>
        <div className="mt-2 w-20 h-9 ">
          <button
            className="w-full h-full rounded-md cursor-pointer bg-black inp"
            onClick={addClick}
          >
            Submit
          </button>
        </div>
        {/* <div>Please input the correct email</div> */}
      </div>
      <div className="">
        <div>Follow Us On:</div>
        <div className="flex flex-row mt-5">
          <div className="w-8 h-8 rounded-full flex justify-center items-center bg-181d21">
            <a
              target="_blank"
              href="https://discord.com/invite/cUeNS8UzGW"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
              </svg>
            </a>
          </div>
          <div className="w-8 h-8 bg-181d21 rounded-full flex justify-center items-center ml-2">
            <a
              target="_blank"
              href="https://t.me/Spacey2025"
              rel="noopener noreferrer"
            >
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
              </svg>
            </a>
          </div>
          <div className="w-8 h-8 bg-181d21 rounded-full flex justify-center items-center ml-2">
            <a
              target="_blank"
              href="https://medium.com/@spacey2025"
              rel="noopener noreferrer"
            >
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"></path>
              </svg>
            </a>
          </div>
          <div className="w-8 h-8 bg-181d21 rounded-full flex justify-center items-center ml-2">
            <a
              target="_blank"
              href="https://twitter.com/spacey2025"
              rel="noopener noreferrer"
            >
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
          </div>
          <div className="w-8 h-8 bg-181d21 rounded-full flex justify-center items-center ml-2">
            <a
              target="_blank"
              href="https://www.facebook.com/SpaceY-2025-102636005328431"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div>support@spacey2025.com</div>
        {/* <div>123-456-7890 </div>
        <div className='mt-2'>Info@mysite.com </div>
        <div className='mt-2'>500 Terry Francois St</div>
        <div className='mt-2'>San Francisco, CA 94158</div> */}
      </div>
    </div>
  );
};

export { FooterContainer };
