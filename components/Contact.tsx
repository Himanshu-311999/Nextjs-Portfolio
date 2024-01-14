const Contact = () => {
    return (
      <section id="contact" className="">
        <h1 className="my-10 text-center font-bold text-4xl">
            Contact
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <h4>If you want us to work together, have any questions, my inbox is always open. Whether I just want to say hi, I'll try my best to get back to you! Cheers!</h4>
        <div className="flex justify-center items-center my-4">
        <a href="mailto:himanshumukhedkar@gmail.com" 
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            Say Hello
        </a>
        </div>
      </section>
    )
  }
  
  export default Contact;