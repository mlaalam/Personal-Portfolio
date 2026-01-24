import emailjs from "@emailjs/browser"
import { useRef } from "react";
function Form() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8yalxd3", 
      "template_abbslc8", 
      form.current, 
      "z3565rlbM0BWHh-JV"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset(); 
    }, (error) => {
      alert("Failed to send message, please try again.");
      console.error("EmailJS Error:", error);
    });
  };
  return (
    <>
            <section className='relative flex flex-col md:flex-row justify-center px-4 py-10 gap-20'>
                
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 size-140 bg-green-500/35 rounded-full blur-[200px]'></div>
                
                <div className='text-center md:text-left mt-10'>
                    <div className="flex items-center  p-1.5 rounded-full border border-[#00ff99] text-xs w-fit mx-auto md:mx-0">
                        <div className="flex items-center">
                            <img className="size-7 rounded-full border border-[#00ff99]" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                            <img className="size-7 rounded-full border border-[#00ff99] -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                            <img className="size-7 rounded-full border border-[#00ff99] -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="userImage3" />
                        </div>
                        <p className="-translate-x-2 text-xs text-slate-200">Join 50+ happy clients and founders.</p>
                    </div>
                    <h1 className='font-medium text-3xl md:text-5xl/15 bg-linear-to-r from-white to-green-300 bg-clip-text text-transparent max-w-[470px] mt-4'>Let’s Build Something Great Together.</h1>
                    <p className='text-sm/6 text-white max-w-[345px] mt-4 font-["JetBrains_Mono"] mx-auto md:mx-0'>Ready to transform your ideas into a powerful digital reality? Click below to schedule a session and discuss your next project.</p> 
                </div>
                        
                <div className='w-full max-w-lg bg-[#00A63E]/0 backdrop-blur-sm border border-white/10 rounded-xl p-8'>
                    <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                        <div>
                            <label className='block text-white text-sm mb-2'>Name</label>
                            <input 
                                type="text" 
                                required
                                name="name"
                                placeholder="Mouad" 
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-[#00ff99] transition'
                            />
                        </div>
            
                        <div>
                            <label className='block text-white text-sm mb-2'>Email</label>
                            <input 
                                type="email" 
                                required
                                name="email"
                                placeholder="mouad@example.com" 
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-[#00ff99] transition'
                            />
                        </div>
                        <div>
                            <label className='block text-white text-sm mb-2'>Subject</label>
                            <input 
                                type="text" 
                                required
                                name="subject"
                                placeholder="Write your subject here..." 
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-[#00ff99] transition'
                            />
                        </div>
            
                        <div>
                            <label className='block text-white text-sm mb-2'>Message</label>
                            <textarea 
                                placeholder="Write your message here..." 
                                rows="4"
                                name="message"
                                required
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-[#00ff99] transition resize-none'
                            ></textarea>
                        </div>
            
                        <div className='flex items-center justify-center'>
                            <button type="submit" className='bg-linear-to-r from-green-950 to-[#00ff99] hover:from-[#00ff99] hover:to-green-950 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
  )
}

export default Form