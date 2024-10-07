import Body from "@/components/typography/Body";
import Link from "@/components/link/Link";
import Icon from "@/components/iconography/Icon";
import {faCopyright} from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
    return (
        <div
            className={'relative w-full p-24 bg-gradient-to-b from-primary via-[2.5%] via-primary/90 to-5% to-primary/80 flex flex-col gap-5'}>
            <Body className={'flex items-center'}><Icon icon={faCopyright}/>Shrimp-2024 (not
                really)</Body>
            <Body>Email: <Link href={'mailto:kiet.nguyenich@yahoo.com'}>kiet.nguyenich@yahoo.com</Link></Body>
            <Body>Phone: <Link href={'tel:+84919035246'}>+84919035246</Link></Body>
            <Body className={'text-transparent'}>FEET</Body>
        </div>
    );
};

export default Footer;
