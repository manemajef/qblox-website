"use client";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { H4, Link, Small, Strong } from "../prose";
import { cn } from "@/lib/utils";

const subjects = ["general", "delivery", "repair"];
type SubjectType = "general" | "delivery" | "repair";
const camlize = (t: string) => t[0].toUpperCase() + t.slice(1);

export function Form() {
  const [subject, setSubject] = useState<SubjectType>("general");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  return (
    <Card className="max-w-lg mx-auto mt-12 w-full">
      <CardContent>
        <FieldSet>
          <FieldGroup className="">
            <div className="sm:flex gap-4 space-y-4">
              <Field>
                <FieldLabel htmlFor="name">Email</FieldLabel>
                <Input
                  id="name"
                  autoComplete="off"
                  placeholder="youremail@mail.com"
                  required
                  type="email"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="username">Subject</FieldLabel>
                <Select
                  value={subject}
                  onValueChange={(value) => setSubject(value as SubjectType)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((s) => (
                      <SelectItem value={s} key={s}>
                        {camlize(s)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <FieldSeparator />
            <Field>
              <FieldLabel>Write Youre message here</FieldLabel>
              <Textarea placeholder="write youre content here.." />
            </Field>
          </FieldGroup>
          <Field orientation="horizontal" className="flex justify-between">
            <FieldDescription>
              <Small className="text-primary underline underline-offset-4">
                <a href="mailto:support@qblox.co.il">Mail Us Instead</a>
              </Small>
            </FieldDescription>
            <Button>Submit</Button>
          </Field>
        </FieldSet>
      </CardContent>
    </Card>
  );
}
export function ContactUs({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn(className, "")}>Contact Us</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="">Leave us a Message</DialogTitle>
        </DialogHeader>
        <Form />
      </DialogContent>
    </Dialog>
  );
}
