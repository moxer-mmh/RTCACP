import React from "react";
import {
  BsDiscord,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Footer as MyFooter } from "flowbite-react";

import logo from "../../assets/RTCACP-Logo.svg";

function Footer() {
  return (
    <MyFooter container className="bg-[#f5f5f5] rounded-none">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <MyFooter.Brand href="#" src={logo} alt="logo" name="RTCACP" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
            <div>
              <MyFooter.Title className="text-[#333333]" title="about" />
              <MyFooter.LinkGroup col>
                <MyFooter.Link href="#">Blog</MyFooter.Link>
                <MyFooter.Link href="#">Services</MyFooter.Link>
              </MyFooter.LinkGroup>
            </div>
            <div>
              <MyFooter.Title className="text-[#333333]" title="Support" />
              <MyFooter.LinkGroup col>
                <MyFooter.Link href="#">FAQ</MyFooter.Link>
                <MyFooter.Link href="#">Contact Us</MyFooter.Link>
              </MyFooter.LinkGroup>
            </div>
            <div>
              <MyFooter.Title className="text-[#333333]" title="Follow us" />
              <MyFooter.LinkGroup col>
                <MyFooter.Link href="#">Github</MyFooter.Link>
                <MyFooter.Link href="#">Discord</MyFooter.Link>
              </MyFooter.LinkGroup>
            </div>
            <div>
              <MyFooter.Title className="text-[#333333]" title="Legal" />
              <MyFooter.LinkGroup col>
                <MyFooter.Link href="#">Privacy Policy</MyFooter.Link>
                <MyFooter.Link href="#">Terms &amp; Conditions</MyFooter.Link>
              </MyFooter.LinkGroup>
            </div>
          </div>
        </div>
        <MyFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <MyFooter.Copyright href="#" by="MoXeR™" year={2024} />
          <div className=" mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <MyFooter.Icon href="#" icon={BsFacebook} />
            <MyFooter.Icon href="#" icon={BsInstagram} />
            <MyFooter.Icon href="#" icon={BsTwitter} />
            <MyFooter.Icon href="#" icon={BsGithub} />
            <MyFooter.Icon href="#" icon={BsDiscord} />
          </div>
        </div>
      </div>
    </MyFooter>
  );
}

export default Footer;
