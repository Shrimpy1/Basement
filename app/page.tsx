import Body from "@/components/typography/Body";
import Display from "@/components/typography/Display";
import {Button} from "@nextui-org/button";

const Home = async () => {
    return (
        <main className="flex flex-col w-full h-full shrink-0">
            {/*<div className={'h-screen pt-32'}>*/}
            {/*    <NameAnimation className={''} bgClass={'bg-neutral-800'}/>*/}
            {/*</div>*/}

            {/*<Divider className={'my-5'}></Divider>*/}
            {/*<TitleAnimation/>*/}

            <Display className={'text-main1 font-bold'}>Text</Display>

            <Body className={'text-neutral-200 font-bold'}>
                This is some <span className={'text-highlight'}>random</span> text
            </Body>

            <Body className={'text-neutral-200'}>
                This is some <span className={'text-highlight'}>random</span> text
            </Body>

            <Button color={'secondary'}>Button</Button>
        </main>
    );
}

export default Home;
