import React, {
  HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import "react-toastify/dist/ReactToastify.min.css";
import InteractiveCard from "components/InteractiveCard";
import { CardDetails } from "types/card";
import { useForm } from "react-hook-form";
import CardDetailsForm from "components/CardDetailsForm";
import CardDetailsComplete from "components/CardDetailsComplete";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const CardInteractionFormContainer: React.FC<IProps> = ({ ...props }) => {
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [cardholderName, phoneNumber, collegeName, branch, year] = watch([
    "cardholderName",
    "phoneNumber",
    "collegeName",
    "branch",
    "year",
  ]);
  const [complete, setComplete] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem("form") !== null) {
      setComplete(true);
    }
  }, []);

  const onSubmit = useCallback(async (data) => {
    // e.preventDefault()
    alert(JSON.stringify(data));

    try {
      // ⛔️ TypeError: Failed to fetch
      // 👇️ incorrect or incomplete URL
      const response = await fetch("http://localhost:3000/api/notion", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        setComplete(true);
        localStorage.setItem("form", JSON.stringify(data));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onContinue = useCallback(() => {
    reset();
    setComplete(false);
  }, [reset]);

  const cardDetails: CardDetails = useMemo(() => {
    return {
      cardholderName: cardholderName ? cardholderName : "Jane Appleseed",

      collegeName: collegeName ? collegeName : "G.H raisoni",
      phoneNumber: phoneNumber ? phoneNumber : "9999 999 999",
      branch: branch ? branch : "Architect",
      year: year ? year : "final",
    };
  }, [cardholderName, collegeName, phoneNumber, branch, year]);

  return (
    <div {...props}>
      <InteractiveCard cardDetails={cardDetails} />

      {!complete ? (
        <CardDetailsForm
          register={register}
          control={control}
          errors={errors}
          onSubmit={handleSubmit(onSubmit)}
        />
      ) : (
        <CardDetailsComplete onContinue={onContinue} />
      )}
    </div>
  );
};

export default CardInteractionFormContainer;
