"use client";
import React, { FC, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, formSchema } from "./formSchema";
import { submitForm } from "./actions";
import ErrorMessage from "@/components/atom/ErrorMessage/ErrorMessage";
import Button from "@/components/atom/Button/Button";
import Input from "@/components/atom/Input/Input";
import Typo from "@/components/atom/Typo/Typo";
import { twMerge } from "tailwind-merge";
// import SelectDropDown from "@/components/atom/SelectDropDown/SelectDropDown";
import dynamic from "next/dynamic";
// import Success from "./Success";
import { sweetAlert } from "@/utils";
const SelectDropDown = dynamic(
  () => import("@/components/atom/SelectDropDown/SelectDropDown"),
  {
    ssr: false,
  }
);
export type OptionsProps = {
  value: string;
  label: string;
};
const topPriorityData: OptionsProps[] = [
  {
    label: "AI Strategy & Advisory",
    value: "AI Strategy & Advisory",
  },
  {
    label: "Build Custom AI Solutions",
    value: "Build Custom AI Solutions",
  },
  {
    label: "Scale AI Across Operations",
    value: "Scale AI Across Operations",
  },
  {
    label: "AI-Powered Outsourcing & Automation",
    value: "AI-Powered Outsourcing & Automation",
  },
  {
    label: "Not Sure Yet – Let’s Explore Together",
    value: "Not Sure Yet – Let’s Explore Together",
  },
];
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  description?: string;
};

// clarient-get-starteds

const GetStarteds: FC<Props> = ({
  className,
  style,
  title = "Share your goals",
  description = "Let’s build the AI-powered future your business deserves.",
}) => {
  const pathname = usePathname();
  const formRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState(0);

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, []);

  const [isError, setIsError] = useState(false);
  const [isErrorMsg, setIsErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "all",
    // delayError: 1000,
    defaultValues: {
      email: "",
      name: "",
      company: "",
      role: "",
      topPriority: "",
      source_page: "",
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  /* eslint-disable */

  const handleTopPriorityData = (e: any) => {
    setValue("topPriority", e.value);
    setError("topPriority", { message: "" });
  };

  const onSubmitForm: SubmitHandler<FormSchema> = async (data) => {
    const { status, message } = (await submitForm(data)) as {
      status: number | string;
      message: string;
    };
    // console.log("status:", status);
    // console.log("message:", message);
    if (status === 200) {
      setIsSuccess(true);
      setIsErrorMsg("");
      setIsError(false);
    } else {
      setIsError(true);
      setIsErrorMsg(message);
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      sweetAlert(
        "success",
        "Thanks for taking the first step!",
        "Our AI Strategy Lead will reach out to you shortly to schedule your session."
      );
      reset();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (pathname) {
      setValue("source_page", pathname);
    }
  }, [pathname]);

  return (
    <div
      className={twMerge(`flex flex-col`, className)}
      style={{ minHeight: `${formHeight}px`, ...style }}
      ref={formRef}
    >
      {/* {isSuccess ? (
        <div className="h-full flex flex-col justify-center grow">
          <Success />
        </div>
      ) : (
      )} */}
      <>
        <Typo
          size="2xl"
          weight="bold"
          tag="h3"
          className="text-[#4A4A4A]"
          isTitle
        >
          {title}
        </Typo>
        <Typo tag="p" size="sm" className="mt-2 mb-4">
          {description}
        </Typo>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          {/* <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Name *"
            disabled={isSubmitting}
          />
          {errors.name && errors.name.message && (
            <ErrorMessage message={errors.name.message} />
          )}
        </div> */}
          <div className="grid md:grid-cols-1 gap-x-14 gap-y-5 lg:gap-y-5">
            <Input
              label="Name"
              {...register("name")}
              disabled={isSubmitting}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              {...register("email")}
              type="email"
              disabled={isSubmitting}
              error={errors.email?.message}
            />
            <Input
              label="Company"
              {...register("company")}
              disabled={isSubmitting}
              error={errors.company?.message}
            />
            <Input
              label="Role"
              {...register("role")}
              disabled={isSubmitting}
              error={errors.role?.message}
            />
            {/* <Input
            label="What’s your top priority with AI?"
            {...register("topPriority")}
            disabled={isSubmitting}
            error={errors.topPriority?.message}
          /> */}
            <SelectDropDown
              className=""
              label="What’s your top priority with AI?"
              error={errors.topPriority?.message}
              onChange={(e) => handleTopPriorityData(e)}
              options={topPriorityData}
              selectedValue={form.getValues("topPriority")}
            />
          </div>
          <div className="mt-5 md:mt-10">
            <Button
              disabled={isSubmitting}
              type="submit"
              isRounded
              variant="primary"
              className="uppercase"
            >
              Schedule My&nbsp;<b>AI Blueprint Session</b>
            </Button>
          </div>
        </form>
        {isError && (
          <ErrorMessage message={isErrorMsg ?? "Something went wrong"} />
        )}
      </>
    </div>
  );
};

export default GetStarteds;
