import { MdOutlineLocalMovies } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-[#4338CA] bottom-0 left-0 absolute ">
        <div className="m-5 ">
          <div>
            <div className="text-[#FAFAFA] font-bold text-[20px]  flex items-center">
              <MdOutlineLocalMovies />
              <p className="italic pl-2">Movie Z</p>
            </div>
            <p className="text-[14px] text-[#FAFAFA] ">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>
          <div className="flex pt-6">
            <div>
              <p className="text-[#FAFAFA]">Contact Information</p>
              <div className="flex items-center pt-4">
                <CiMail className="text-[#FAFAFA]" />
                <div className="pl-3">
                  <p className="text-[#FAFAFA] text-[14px] font-medium">
                    Email:
                  </p>
                  <p className="text-[#FAFAFA] text-[14px] ">
                    support@movieZ.com
                  </p>
                </div>
              </div>
              <div className="flex items-center  pt-6">
                <CiPhone className="text-[#FAFAFA]" />
                <div className="pl-3">
                  <p className="text-[#FAFAFA] text-[14px] font-medium">
                    Phone:
                  </p>
                  <p className="text-[#FAFAFA] text-[14px] ">
                    +976 (11) 123-4567
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-20 ">
              <ul className="flex flex-col space-y-3 text-[#FAFAFA]">
                <li> follow us</li>
                <li className="font-medium">Facebook</li>
                <li className="font-medium">Instagram</li>
                <li className="font-medium">Twitter</li>
                <li className="font-medium">Youtube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
