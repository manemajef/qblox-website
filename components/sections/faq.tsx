import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faq from "@/content/sections/qa.json";
import { Form } from "../blocks/form";

export default function FAQ() {
  return (
    <section className="my-24">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center">
          {faq.title || "Q&A"}
        </h1>
      </div>

      <div className="mt-12 max-w-4xl mx-auto px-4">
        <Accordion
          type="single"
          collapsible
          className="w-full p-4"
          defaultValue="1"
        >
          {faq.items.map((item, i) => (
            <AccordionItem value={`${i + 1}`} key={i}>
              <AccordionTrigger className="text-xl font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-foreground/85">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Form />
    </section>
  );
}
