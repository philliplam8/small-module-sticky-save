import { Chip } from "@mui/material";

export const Card = (props: {
  headerLabel: string;
  children: React.ReactNode;
  hasUnsavedChanges?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-4 justify-between bg-white text-black rounded-[25px] p-5">
      <div className="w-full flex flex-row gap-3 items-center">
        <h1 className="text-xl">{props.headerLabel}</h1>
        {props.hasUnsavedChanges && (
          <Chip label={"Unsaved changes"} size={"small"} color="warning" />
        )}
      </div>
      {props.children}
      {/* <div>
        <p>FOOTER</p>
      </div> */}
    </div>
  );
};
