import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  email: z.string().email({ message: "Email must be valid." }),
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(20, { message: "Name can't be longer than 20 characters" }),

  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(100, { message: "Dude,message is to long" })
});

const notify = (messageStatus) => {
  if (messageStatus === "success") {
    toast.success("Successfully send!");
  }
  if (messageStatus === "error") {
    toast.error("An error happened!");
  }
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    watch
  } = useForm({
    defaultValues: { name: "", email: "", message: "" },
    resolver: zodResolver(formSchema)
  });

  const form = useRef();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", email: "", message: "" });
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    const subscription = watch((value) => setFormValues(value));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          notify("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Toaster />
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="  grid grid-col-1 lg:grid-cols-2 w-full h-[50vh] px-4 py-4 focus:ring-0  gap-2"
      >
        <label className="h-[50px] w-full p-[2px] rounded-lg relative bg-black">
          <div className="absolute z-10 w-full h-1/2 -top-1 left-0 right-0 bg-[#E1E1D1] rounded-t-lg" />
          <input
            autoComplete="off"
            id="name"
            name="name"
            {...register("name")}
            type="text"
            className="italic absolute w-[calc(100%-2px)] h-[48px] top-0 left-[1px] bg-[#E1E1D1] z-20  rounded-lg   focus:outline-none pl-4 text-[1.5rem]"
          />
          <p
            className={`font-archivo absolute z-30 ${
              formValues.name ? "bottom-3/4" : "bottom-2"
            } left-4  transition-all ease-out duration-200`}
          >
            {errors.name ? (
              <span className="text-red-600">{errors.name.message}</span>
            ) : (
              "Name:"
            )}
          </p>
        </label>

        <label className="h-[50px] w-full p-[2px] rounded-lg relative bg-black">
          <div className="absolute z-10 w-full h-1/2 -top-1 left-0 right-0 bg-[#E1E1D1] rounded-t-lg" />
          <input
            autoComplete="off"
            id="email"
            name="email"
            {...register("email")}
            type="email"
            className="italic absolute w-[calc(100%-2px)] h-[48px] top-0 left-[1px] bg-[#E1E1D1] z-20  rounded-lg   focus:outline-none pl-4 text-[1.5rem] "
          />
          <p
            className={`font-archivo absolute z-30 ${
              formValues.email ? "bottom-3/4" : "bottom-2"
            } left-4  transition-all ease-out duration-200`}
          >
            {errors.email ? (
              <span className="text-red-600">{errors.email.message}</span>
            ) : (
              "Email:"
            )}
          </p>
        </label>

        <label className="h-[50px] w-full p-[2px] rounded-lg relative bg-black lg:col-span-2">
          <div className="absolute z-10 w-full h-1/2 -top-1 left-0 right-0 bg-[#E1E1D1] rounded-t-lg" />
          <input
            autoComplete="off"
            id="message"
            name="message"
            {...register("message")}
            type="text"
            className=" absolute w-[calc(100%-2px)] h-[48px] top-0 left-[1px]  z-20 bg-[#E1E1D1] rounded-lg   focus:outline-none pl-4 pr-1 text-[1.5rem] italic"
          />
          <p
            className={`font-archivo absolute z-30 ${
              formValues.message ? "bottom-3/4" : "bottom-2"
            } left-4  transition-all ease-out duration-200`}
          >
            {errors.message ? (
              <span className="text-red-600">{errors.message.message}</span>
            ) : (
              "Message:"
            )}
          </p>
        </label>

        <button
          type="submit"
          className="w-full relative h-[50px] lg:col-span-2 transition-all before:z-0 before:absolute before:bottom-0 before:left-0 before:top-0 hover:text-white before:h-full before:w-0 before:bg-[#7a7a6a] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full flex items-center justify-center"
        >
          <span className="relative z-10 font-bold text-[1.5rem]  lg:text-[3rem] font-saira">
            Submit
          </span>
        </button>
      </form>
    </>
  );
};

export default ContactForm;
