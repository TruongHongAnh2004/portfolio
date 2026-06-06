import Linkedin from "../assets/linkedin_3536505.png";
import Facebook from "../assets/facebook_3536394.png";

export default function Footer() {
  return (
    <footer className=" mt-10 border-t border-gray-300">
      <div className="flex justify-between bg-gray-100 px-40 py-20">
        <div>
          <p className="text-3xl font-bold">Trương Hồng Anh</p>
          <p className="text-gray-500 pt-2">honganhtruong46@gmail.com</p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/h%E1%BB%93ng-anh-tr%C6%B0%C6%A1ng-87138a2b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              onClick={() => {}}
              src={Linkedin}
              alt="LinkedIn Image"
              className="w-10 h-10 block"
            />
          </a>

          <a
            href="https://www.facebook.com/honganh.truong.184"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Facebook}
              alt="Facebook Image"
              className="w-10 h-10 block"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
