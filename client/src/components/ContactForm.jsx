import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(20)
});

const ContactForm = () => {
  return (
    <form className="border-2 border-black grid grid-col-1 w-full h-[50vh] px-4 focus:ring-0 ">
      <label className="h-fit border-b-2 border-x-2 border-black rounded-lg relative">
        <input
          type="text"
          className=" w-full h-[50px] border-b-2 border-b-black absolute focus:outline-none"
        />
        {/* <p>Email:</p> */}
      </label>
      <label className="border-2 border-black">
        <input type="text" />
        <br />
        <p>Email:</p>
      </label>
    </form>
  );
};

export default ContactForm;
