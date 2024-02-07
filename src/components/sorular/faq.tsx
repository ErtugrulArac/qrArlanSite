import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
    return (
<<<<<<< HEAD
        <Accordion  type="single" collapsible className="w-full  ">
=======
        <Accordion type="single" collapsible className="w-full">
>>>>>>> ef979dc3f6703ef5f6d5ba2fc307a9aedfc35bba
            <AccordionItem className="w-full" value="item-1">
                <AccordionTrigger className="font-bold text-xl max-md:text-lg">Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold text-xl max-md:text-lg">Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold text-xl max-md:text-lg">Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="font-bold text-xl max-md:text-lg">Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="font-bold text-xl max-md:text-lg">Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> ef979dc3f6703ef5f6d5ba2fc307a9aedfc35bba
