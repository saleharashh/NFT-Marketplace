import FilledRoundedButton from "@/app/components/FilledRoundedButton";

const ActionBid = () => {
  return (
    <div className="flex flex-col rounded-2xl w-full md:w-1/2 bg-secondary-background p-6">
      <h1>Action ends in:</h1>
      <div className="flex flex-row gap-2  p-4 w-full justify-between">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1>59</h1>
          <p>Hours</p>
        </div>
        <p>:</p>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1>59</h1>
          <p>Minutes</p>
        </div>
        <p>:</p>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1>59</h1>
          <p>Seconds</p>
        </div>
      </div>
      <FilledRoundedButton onClick={() => {}}>
        <p>Place Bid</p>
      </FilledRoundedButton>
    </div>
  );
};

export default ActionBid;
