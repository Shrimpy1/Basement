'use client'

import {ReactNode} from "react";
import {NextUIProvider} from "@nextui-org/react";
import ScrollProvider from "@/components/providers/ScrollProvider";
import SideFormProvider from "@/components/providers/SideFormProvider";
import LoadingProvider from "@/components/providers/LoadingProvider";
import {ThemeProvider as NextThemeProvider} from "next-themes";

const Providers = ({children}: {
    children: ReactNode
}) => {
    return (
        <NextUIProvider>
            <NextThemeProvider attribute={'class'}>
                <ScrollProvider>
                    <LoadingProvider>
                        <SideFormProvider>
                            {children}
                        </SideFormProvider>
                    </LoadingProvider>
                </ScrollProvider>
            </NextThemeProvider>
        </NextUIProvider>
    );
};

export default Providers;
