import { Button } from "@/components/ui/button"
import Linkler from "@/components/navbar/linkler"
import { GiHamburgerMenu } from "react-icons/gi";
import Responsivelink from "./responsivelink";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function SheetDemo() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="text-white max-md:text-xs py-1 px-2 font-bold border-none bg-transparent " variant="outline"><GiHamburgerMenu size={22} /></Button>
            </SheetTrigger>
            <SheetContent className="overflow-auto" side={"left"}>
                <SheetHeader>
                    <SheetTitle className="flex items-center justify-center"><img className="w-20 " src="siyahlogo.png" alt="" /></SheetTitle>
                    <SheetDescription>
                        Dijital dönüşümününüzün bir partneri olarak yanınızdayız...
                    </SheetDescription>
                </SheetHeader>

                <div className="gap-4 py-4 flex items-center justify-center flex-col">
                    <Responsivelink />
                </div>
                <div className="flex justify-center">
                    <h1 className="font-bold text-center mt-4">ARLAN MEDYA</h1>
                </div>
            </SheetContent>
        </Sheet>
    )
}
