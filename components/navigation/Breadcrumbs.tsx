'use client';

import {Breadcrumbs as NextBreadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import {usePathname} from "next/navigation";
import Link from "next/link";

const Breadcrumbs = ({className}: { className?: string }) => {
    const pathname = usePathname();

    if (pathname == '/') {
        return;
    }

    const pathSegments = pathname.split('/').filter(segment => segment);

    return (
        <NextBreadcrumbs color={'primary'} variant={'light'} size={'lg'} className={`${className} `}>
            <BreadcrumbItem href={'/'} underline={'hover'}>Home</BreadcrumbItem>
            {pathSegments.map((segment, index) => {
                const href = '/' + pathSegments.slice(0, index + 1).join('/');
                const label = segment.charAt(0).toUpperCase() + segment.slice(1);
                return (
                    <BreadcrumbItem key={href} underline={'hover'}>
                        <Link href={href}>{label}</Link>
                    </BreadcrumbItem>
                );
            })}
        </NextBreadcrumbs>
    );
};

export default Breadcrumbs;
