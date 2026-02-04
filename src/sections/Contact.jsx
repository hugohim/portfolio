import { useState } from "react"
import { Button } from "@/components/Button";
import { Send } from  'lucide-react';
import emailjs from "@emailjs/browser"
export const Contact = () => {

    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: ""
    })
     const [isLoading, setIsLoading] = useState(false);


    async function handleSubmit(e){
        e.preventDefault();
        try{
            setIsLoading(true);
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            await emailjs.send(serviceId,templateId,
                {
                name: formData.name, email: formData.email, message: formData.message
                },
                publicKey)
                setIsLoading(false);
                setformData({ name: "", email: "", message: "" });
        }catch(err){
            console.log((err));
        }
    }

    return(
        <section id="contact">
            <div className="text-center">
             <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                Get in touch
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                 Contact me
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} >
                <div className="flex flex-col glass border gap-4 m-8 p-6 rounded-t-4xl w-1/2 m-auto">
                    <div className="glass p-3 rounded-2xl flex gap-4 items-center"> 
                        <label className="text-md font-bold ">Name:</label>
                        <input type="text" placeholder="Your name" className="rounded-2xl p-3 outline-none focus:border border-primary animate-all"
                        value={formData.name}
                        onChange={(e) => setformData({...formData, name: e.target.value})}
                        />
                    </div>
                     <div className="glass p-3 rounded-2xl flex gap-4 items-center"> 
                        <label className="text-md font-bold ">Email:</label>
                        <input type="text" placeholder="example@mail.com" className="rounded-2xl p-3 outline-none focus:border border-primary animate-all"
                          value={formData.email}
                        onChange={(e) => setformData({...formData, email: e.target.value})}
                        
                    />
                    </div>
                    <label className="text-md font-bold self-start px-2">Message:</label>
                    <div className="glass p-3 rounded-2xl flex gap-4 items-center"> 
                        <textarea 
                        rows={5}
                        type="text" placeholder="Your message..." className="rounded-2xl p-3 outline-none resize-none"
                        value={formData.message}
                        onChange={(e) => setformData({...formData, message: e.target.value})}
                        /> 

                    </div>

              <Button
                className="w-full"
    
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
                </div>
            </form>
            </div>
        </section>
    )
}
