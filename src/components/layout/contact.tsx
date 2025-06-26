
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

export const Contact = () => (
  <div className="my-0 w-full bg-slate-50 py-10" id="contact">
    <div className="container px-4">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-semibold text-2xl text-primary tracking-tighter md:text-4xl">
          Contact Us
        </h2>
        <p className="text-base text-muted-foreground md:text-lg">
          Get in touch with us for any inquiries
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="bg-white shadow-primary/20 shadow-sm">
          <CardContent className="p-6">
            <h3 className="mb-6 font-semibold text-2xl text-primary">Send us a message</h3>
            <form className="space-y-4" action="https://getform.io/f/adrgmxla" method="POST">
              <div>
                <Input placeholder="Your Name" name="name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" name="email"/>
              </div>
              <div>
                <Input placeholder="Subject" name="subject"/>
              </div>
              <div>
                <Textarea placeholder="Your Message" name="message" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-primary/20 shadow-sm">
          <CardContent className="p-6">
            <h3 className="mb-6 font-semibold text-2xl text-primary">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary">Address</h4>
                <p className="text-muted-foreground">
                  123 Repair Street<br />
                  City, Country 12345
                </p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Phone</h4>
                <p className="text-muted-foreground">+1 234 567 890</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Email</h4>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Business Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="mb-4 font-medium text-primary">Location</h4>
              <div className="h-[300px] w-full rounded-lg bg-slate-200">
                {/* Replace with your map implementation */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.748207539911!2d7.5643441764999935!3d49.413667161469974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479675ba53009655%3A0x1a0d123644984f93!2sPhone%20Empire%20Repair%20shop%20iPhone%20iPad%20Android%20Apple%20Watch!5e0!3m2!1sen!2sus!4v1750900549591!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
)