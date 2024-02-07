"use client"
import { FormProvider, useForm } from "react-hook-form"
import SectionContainer from "../../SectionContainer"
import Input from "../../elements/Input"
import { sendEmail } from "./sendEmail"

export interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export default function ContactSection() {
  const methods = useForm<FormData>({ mode: "onSubmit" })

  function onSubmit(data: FormData) {
    sendEmail(data)
  }

  const parentClasses = "text-black flex flex-col"
  const inputClasses = "h-12 rounded"
  const labelClasses = "text-mothGrey-0"

  return (
    <SectionContainer
      bgClasses="h-screen bg-gradient-to-b from-mothGreen-0/20 from-0% to-mothBlack-0 to-80% pt-20"
      additionalContentClasses="w-full text-center max-w-[800px]"
      id="contact"
    >
      <h3 className="text-[28px] leading-[28px] md:text-[72px] md:leading-[72px] mb-4">
        {" "}
        Let&apos;s Get In Touch
      </h3>
      <FormProvider {...methods}>
        <form
          className="text-[16px] w-full text-justify grid grid-cols-2 gap-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Input
            name="firstName"
            id="firstName"
            parentClasses={parentClasses}
            inputClasses={inputClasses}
            label="First Name"
            labelClasses={labelClasses}
            validation={{ required: "First Name is required" }}
          />
          <Input
            name="lastName"
            id="lastName"
            parentClasses={parentClasses}
            inputClasses={inputClasses}
            label="Last name"
            labelClasses={labelClasses}
            validation={{ required: "Last Name is required" }}
          />
          <Input
            name="email"
            id="email"
            parentClasses={parentClasses}
            inputClasses={inputClasses}
            label="Email"
            labelClasses={labelClasses}
            validation={{ required: "Email is required" }}
          />
          <Input
            name="phone"
            id="phone"
            parentClasses={parentClasses}
            inputClasses={inputClasses}
            label="Phone (optional)"
            labelClasses={labelClasses}
          />
          <Input
            name="message"
            id="message"
            // @ts-ignore
            rows="5"
            parentClasses="col-span-2 rounded flex flex-col"
            inputClasses="w-full text-black"
            labelClasses=" text-lensGrey-0"
            label="What would you like to collaborate on?"
            validation={{ required: "Message is required" }}
          />
          <div className="col-span-2 flex justify-center">
            <button>Submit</button>
          </div>
        </form>
      </FormProvider>
    </SectionContainer>
  )
}
