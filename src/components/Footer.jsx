import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
      <div className="justify-start flex flex-col flex-1 mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          {" "}
          New way to make payements easy. reliable and secure.{" "}
        </p>
      </div>
      <div
        className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-10 mt-10 `}
      >
        {footerLinks.map((footer) => (
          <div
            key={footer.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px] text-white "
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white" > {footer.title} </h4>
            <ul className="list-none mt-4 " >
              {footer.links.map((link , index) => (
                <li  className={` ${index !== footer.links.length - 1  ? 'mb-4' : 'mb-0'}  font-poppins font-normal text-dimWhite text-[16px] hover:text-secondary cursor-pointer`} key={link.name} >{link.name}</li>
              ))}
            </ul>
  
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45] " >
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white" >
          2024 HooBank. All Rights Reserved.
      </p>

      <div className={`flex flex-row md:mt-0 mt-6`}>
        {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt="social" className= {`flex flex-1 ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0' } w-[21px] h-[21px] object-contain cursor-pointer `}  />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
