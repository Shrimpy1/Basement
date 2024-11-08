'use client'

import {Button} from "@nextui-org/button";
import {useCallback, useEffect, useState} from "react";
import {GoogleGenerativeAI} from "@google/generative-ai";

const Page = () => {
    const [text, setText] = useState('')
    const [enabled, setEnabled] = useState(false)
    const [recognition, setRecognition] = useState(null)
    const [answer, setAnswer] = useState('')
    const [isClient, setIsClient] = useState(false)

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

    // Initialize speech recognition on client side only
    useEffect(() => {
        setIsClient(true)

        if (typeof window !== 'undefined') {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognitionInstance = new SpeechRecognition();
                recognitionInstance.interimResults = false;
                recognitionInstance.continuous = false;
                recognitionInstance.lang = 'en-US';

                recognitionInstance.onresult = async (event: any) => {
                    setEnabled(false);
                    const command = event.results[0][0].transcript.toLowerCase();
                    setText(command);
                    if (command === 'play') {
                        console.log('Play');
                        readText('I love Gura');
                    }
                    const result = await promptAI(command);
                    setAnswer(result);
                };

                recognitionInstance.onend = () => {
                    if (enabled) {
                        restartRecognition();
                    }
                };

                setRecognition(recognitionInstance);
            }
        }
    }, []);

    const readText = (text: string) => {
        if (typeof window === 'undefined') return;

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = 10;
        utterance.rate = 0.5;

        utterance.onend = () => {
            console.log('Read');
        };

        window.speechSynthesis.speak(utterance);
    };

    const awaitCommand = () => {
        if (!recognition) return;

        try {
            setEnabled(true);
            recognition.start();
        } catch (error) {
            console.error('Error starting speech recognition:', error);
            setEnabled(false);
        }
    };

    const restartRecognition = useCallback(() => {
        if (!enabled || !recognition) return;

        recognition.stop();
        setTimeout(() => {
            awaitCommand();
        }, 200);
    }, [recognition, enabled]);

    const promptAI = async (prompt: string) => {
        const result = await model.generateContent(prompt);
        return result.response.text();
    };

    // Don't render anything until we confirm we're on the client
    if (!isClient) {
        return null;
    }

    return (
        <div className="p-4">
            <Button
                className="mb-4"
                onClick={() => readText('engi is gay')}
            >
                Test Speech
            </Button>

            <Button
                className="ml-4"
                color={enabled ? 'primary' : 'default'}
                onClick={() => awaitCommand()}
            >
                {enabled ? 'On' : 'Off'}
            </Button>

            {text && (
                <div className="mt-4 font-bold">
                    Transcript: {text}
                </div>
            )}

            {answer && (
                <div className="mt-2">
                    Answer: {answer}
                </div>
            )}
        </div>
    );
};

export default Page;
