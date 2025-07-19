const ContactCom = () => {
  return (
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <form
    action="https://formsubmit.co/ahmedgodaiii029@gmail.com"
    method="POST"
    className="space-y-8"
  >
    <input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_next" value="https://portfolio-two-lemon-69.vercel.app/" />

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
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
        required
        rows={6}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Leave a comment..."
      />
    </div>

    <button
      type="submit"
      className="py-3 px-5 text-sm font-medium bg-orange-600 text-center text-white rounded-lg sm:w-fit hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300"
    >
      Send message
    </button>
  </form>
</div>

  );
};

export default ContactCom;
