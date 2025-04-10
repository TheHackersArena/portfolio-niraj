import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useFormStatus } from 'react-dom';

const ContactSection = () => {
  const { pending } = useFormStatus();

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
          <h3 className="text-sm uppercase tracking-wider text-primary font-semibold">Contact</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="sub-section-title">Let's Connect</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                I'm open to discussing product management roles, startup opportunities, or just a chat about the latest in tech.
              </p>
              <p>
                Feel free to reach out with any questions or inquiries.
              </p>
              <p>
                I'll get back to you as soon as possible.
              </p>
            </div>
          </motion.div>

          <motion.form
            action="/api/send"
            method="post"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div>
              <Input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div>
              <Input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div>
              <Textarea id="message" name="message" placeholder="Your Message" rows={4} required />
            </div>
            <Button type="submit" disabled={pending}>
              {pending ? "Submitting..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
