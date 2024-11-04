import {Button} from "@nextui-org/button";

const Page = () => {
    const readText = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => {
            console.log('Read')
        }
        window.speechSynthesis.speak(utterance);
    }

    return (
        <>
            <Button onClick={() => {
                readText('a')
            }}>A</Button>
        </>
    );
};

export default Page;
