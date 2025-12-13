"use client";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "../ui/input";

import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectLabel,
  SelectValue,
  SelectItem,
} from "../ui/select";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const subjects = ["general", "delivery", "repair"];
type SubjectType = "general" | "delivery" | "repair";
const camlize = (t: string) => t[0].toUpperCase() + t.slice(1);

export function Form() {
  const [subject, setSubject] = useState<SubjectType>("general");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  return (
    <Card className="max-w-lg mx-auto mt-12">
      <CardHeader>leave us a message</CardHeader>
      <CardContent>
        <FieldSet>
          <FieldGroup className="">
            <div className="sm:flex gap-4">
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
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={subject} value={subject} />
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
            <Field>
              <FieldLabel>Content</FieldLabel>
              <Textarea placeholder="write youre content here.." />
            </Field>
          </FieldGroup>
          <Field orientation="horizontal" className="flex justify-between">
            <FieldDescription>Well get back to you soon</FieldDescription>
            <Button>Submit</Button>
          </Field>
        </FieldSet>
      </CardContent>
    </Card>
  );
}
