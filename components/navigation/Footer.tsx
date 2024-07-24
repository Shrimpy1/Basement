import {faCopyright} from "@fortawesome/free-regular-svg-icons";
import Icon from "@/components/iconography/Icon";
import Body from "@/components/typography/Body";
import Link from "@/components/link/Link";

const Footer = () => {
    return (
        <div
            className={'relative w-full p-24 bg-gradient-to-b from-orange-400 via-[2.5%] via-orange-400/90 to-5% to-orange-400/80 flex flex-col gap-5'}>
            <Body><Icon icon={faCopyright}></Icon>Shrimp-2024 (not really)</Body>
            <Body>Email: <Link href={'mailto:kiet.nguyenich@yahoo.com'}>kiet.nguyenich@yahoo.com</Link></Body>
            <Body>Phone: <Link href={'tel:+84919035246'}>+84919035246</Link></Body>
            <Body className={'text-transparent'}>FEET</Body>
        </div>
    );
};

export default Footer;
