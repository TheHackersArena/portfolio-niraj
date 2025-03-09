
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    // Reset form fields here
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section className="section-container" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-primary font-semibold">Get in touch</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-foreground/80">
              I'm always open to discussing product design work, partnerships, or potential opportunities. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:nirajkumar4598@gmail.com" 
                className="flex items-center gap-3 p-4 card hover:border-primary/30 transition-colors bg-card text-card-foreground"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground text-sm">nirajkumar4598@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/nirajkryadav" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 card hover:border-primary/30 transition-colors bg-card text-card-foreground"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-muted-foreground text-sm">linkedin.com/in/nirajkryadav</p>
                </div>
              </a>

              <a 
                href="https://github.com/nirajkumar"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 card hover:border-primary/30 transition-colors bg-card text-card-foreground"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-muted-foreground text-sm">github.com/nirajkumar</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card h-full bg-card text-card-foreground"
          >
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-input bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-input bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-input bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
