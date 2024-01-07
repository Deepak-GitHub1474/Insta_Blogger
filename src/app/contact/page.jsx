import Image from "next/image";

export const metadata = {
    title: "Contact Page",
    description: "Contact description",
};

const Contact = () => {
  return (
    <div className="min-h-[80vh] flex items-center lg:flex-row flex-col justify-center gap-20 bg-gray-900 text-white p-4">
      <div className="sm:w-[28rem] sm:h-[25rem] w-80 h-80 relative mx-20">
        <Image src="/contact.png" alt="" fill className="" />
      </div>
      <div className="flex-1 xl:px-20 px-2 sm:w-[450px] w-[95vw]">
        <form action="" className="flex flex-col gap-2 bg-gray-700 pb-16 pt-8 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
          <input type="text" placeholder="Name and Surname" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white"/>
          <input type="text" placeholder="Email Address" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white"/>
          <input type="text" placeholder="Phone Number (Optional)" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white"/>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            className="p-3 rounded-md border-none outline-none bg-gray-800 text-white"
          ></textarea>
          <button className="p-3 bg-blue-800 text-white font-semibold border-none hover:bg-blue-600 absolute bottom-0 left-0 right-0">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
