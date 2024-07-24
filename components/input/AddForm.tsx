'use client'

import Input from "@/components/input/Input";
import {Radio, RadioGroup} from "@nextui-org/radio";
import {Button} from "@nextui-org/button";
import {useFormState, useFormStatus} from "react-dom"
import {addNode} from "@/app/action";
import Body from "@/components/typography/Body";

const initialState = {message: null,}
const SubmitButton = () => {
    const {pending} = useFormStatus();

    return (
        <Button type={'submit'} aria-disabled={pending} fullWidth={false}>Add</Button>
    )
}

const AddForm = () => {

    // @ts-ignore
    const [state, action] = useFormState(addNode, initialState);

    return (
        <form className={'flex flex-col w-full gap-5 grow-0'} action={action}>
            <Input name={'name'} label={'Name'} size={'md'} placeholder={"Enter your name"} isRequired/>
            <Input name={'parent'} label={'Parent name'} size={'md'}
                   placeholder={"Enter the your parent name"} isRequired/>
            <RadioGroup name={'gender'} label={'Gender'} orientation={'horizontal'} isRequired
                        defaultValue={'male'}
            >
                <Radio value={'male'}>Male</Radio>
                <Radio value={'female'}>Female</Radio>
            </RadioGroup>
            <SubmitButton/>
            <Body>{state.message}</Body>
        </form>
    );
};

export default AddForm;
