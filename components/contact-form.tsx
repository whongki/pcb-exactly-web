"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Loader2 } from "lucide-react";
import { sendQuote } from "@/app/actions/send-quote";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const result = await sendQuote(formData);

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Request a Free Quote
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Tell us about your PCB requirements and we&apos;ll get back to you
            within 24 hours with a competitive quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:pcbexactly@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Mail className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="text-slate-900 font-medium">
                      pcbexactly@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/8617621750550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors">
                    <MessageCircle className="h-5 w-5 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">WhatsApp</div>
                    <div className="text-slate-900 font-medium">
                      +86 176 2175 0550
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Phone</div>
                    <div className="text-slate-900 font-medium">
                      +86 0563-2772577
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Factory Address</div>
                    <div className="text-slate-900 font-medium">
                      No. 777-9, Chang&apos;an Road, Economic Development Zone,
                      Guangde City, Anhui Province, China
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <h4 className="font-semibold text-slate-900 mb-2">
                Have Gerber files ready?
              </h4>
              <p className="text-sm text-slate-600">
                For faster quoting, send your Gerber files directly to{" "}
                <a
                  href="mailto:pcbexactly@gmail.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  pcbexactly@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Company Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone / WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>PCB Type</Label>
                  <Select name="pcbType">
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-sided">Single-Sided</SelectItem>
                      <SelectItem value="double-sided">Double-Sided</SelectItem>
                      <SelectItem value="multilayer">Multilayer</SelectItem>
                      <SelectItem value="aluminum">Aluminum</SelectItem>
                      <SelectItem value="led">LED PCB</SelectItem>
                      <SelectItem value="hdi">HDI</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="layers">Layers</Label>
                  <Input
                    id="layers"
                    name="layers"
                    placeholder="e.g. 2, 4, 6"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    placeholder="e.g. 100"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="boardSize">Board Size (mm)</Label>
                <Input
                  id="boardSize"
                  name="boardSize"
                  placeholder="e.g. 100mm x 80mm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Additional Requirements</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  placeholder="Surface finish, solder mask color, special requirements..."
                  rows={4}
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <p className="text-sm">
                    Your quote request has been sent successfully! We&apos;ll
                    get back to you within 24 hours.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm">
                  {errorMsg}
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Quote Request
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
