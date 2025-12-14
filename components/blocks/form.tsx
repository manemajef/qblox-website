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
import { postEmail } from "@/app/api/services";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function FormDialog({
  children,
  caption,
  fail,
  open,
  onOpenChange,
}: {
  children?: React.ReactNode;
  fail?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  caption?: string;
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {fail ? (
              <span className="text-red-800">
                {caption || "somthing went wrong"}
              </span>
            ) : (
              <span className="text-lg">{caption || "Done"}</span>
            )}
          </AlertDialogTitle>
          <AlertDialogDescription>{children}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onOpenChange(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onOpenChange(false);
            }}
          >
            {fail ? "Retry" : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
const subjects = ["general", "delivery", "repair"];
type SubjectType = "general" | "delivery" | "repair";
const camlize = (t: string) => t[0].toUpperCase() + t.slice(1);

export function Form({ varient }: { varient?: "small" | "lg" }) {
  const [subject, setSubject] = useState<SubjectType>("general");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogFail, setDialogFail] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogCaption, setDialogCaption] = useState("");

  const openDialog = (message: string, fail = false, caption = "") => {
    setDialogFail(fail);
    setDialogMessage(message);
    caption && setDialogCaption(caption);
    setDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!email || !content) {
      openDialog(
        "Please fill in email, subject and message",
        true,
        "Invalid Email"
      );
      return;
    }
    try {
      const res = await postEmail(email, subject, content);
      if (res instanceof Error) {
        throw res;
      }
      openDialog("Your message has been sent, we'll get back to you soon.");
      setSubject("general");
      setEmail("");
      setContent("");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      openDialog(message, true);
    }
  };
  return (
    <>
      <Card
        className={cn(
          "mx-auto mt-12 w-full",
          varient === "lg" ? "max-w-2xl" : "max-w-lg"
        )}
      >
        <CardContent>
          <FieldSet className="">
            <FieldGroup
              className={cn(
                varient === "lg"
                  ? "grid sm:grid-cols-2 md:grid-cols-[1fr_2fr] gap-4"
                  : ""
              )}
            >
              <div className="sm:flex gap-4 space-y-4">
                <Field>
                  <FieldLabel htmlFor="name">Email</FieldLabel>
                  <Input
                    id="name"
                    autoComplete="off"
                    placeholder="youremail@mail.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
              {/* <FieldSeparator
                className={cn(varient === "lg" ? "hidden" : "")}
              /> */}
              <div>
                <Field>
                  <FieldLabel>Write Youre message here</FieldLabel>
                  <Textarea
                    placeholder="write youre content here.."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Field>
              </div>
            </FieldGroup>
            <Field orientation="horizontal" className="flex justify-between">
              <FieldDescription>
                <Small className="text-primary underline underline-offset-4">
                  <a href="mailto:support@qblox.co.il">Mail Us Instead</a>
                </Small>
              </FieldDescription>
              <Button onClick={handleSubmit}>Submit</Button>
            </Field>
          </FieldSet>
        </CardContent>
      </Card>
      <FormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        caption={dialogCaption}
        fail={dialogFail}
      >
        {dialogMessage}
      </FormDialog>
    </>
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
