"use client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactCom = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://formsubmit.co/ahmedgodaiii029@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _captcha: false,
          }),
        }
      );

      if (res.ok) {
        toast({
          title: "Message Sent ✅",
          description: "Your message was submitted successfully.",
        });

        setFormData({ email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error 😢",
          description: "Failed to send message. Try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.log(err);

      toast({
        title: "Network Error",
        description: "Check your internet connection.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm 
              focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white"
            placeholder="Let us know how we can help you"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm 
              border border-gray-300 focus:ring-primary-500 focus:border-primary-500 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Leave a comment..."
          />
        </div>

        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium bg-orange-600 text-white rounded-lg sm:w-fit 
            hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactCom;
