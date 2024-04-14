import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import {
  Badge,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";

function App() {
  const [editMode, setEditMode] = useState(false);

  const handleShowEdit = () => {
    setEditMode(true);
  };

  const handleHideEdit = () => {
    setEditMode(false);
  };

  const Section = (props: { label: string; handleShowEdit: () => void }) => {
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const handleSectionChange = () => {
      setHasUnsavedChanges(true);
      props.handleShowEdit();
    };

    return (
      <Card headerLabel={props.label} hasUnsavedChanges={hasUnsavedChanges}>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Label"
            onChange={handleSectionChange}
          />
          <FormControlLabel
            required
            control={<Switch />}
            label="Required"
            onChange={handleSectionChange}
          />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </FormGroup>
      </Card>
    );
  };

  return (
    <div className="rounded-[25px] h-screen min-h-[500px]">
      <div className="flex flex-col items-start py-4">
        <h1 className="text-[35px]">Customize your settings</h1>
        <h2>Turn on/off settings according to your personal preference!</h2>
      </div>
      <div className="flex flex-col gap-4 p-3 bg-slate-200">
        {[1, 2, 3].map((element) => {
          return (
            <Section
              label={`Setting ${element}`}
              handleShowEdit={handleShowEdit}
            />
          );
        })}
      </div>
      {editMode && (
        <div
          id="form-btn-group"
          className="sticky bottom-0 w-full px-3 py-5 flex flex-col-reverse 
          sm:flex-row gap-2 justify-end bg-slate-200 border border-t-slate-700 "
        >
          <Button
            className="h-[60px] sm:h-[50px] w-full sm:w-[100px]"
            variant="outlined"
            color="secondary"
            onClick={handleHideEdit}
          >
            CANCEL
          </Button>
          <Badge badgeContent={4} color="warning">
            <Button
              className="h-[60px] sm:h-[50px] w-full sm:w-[100px]"
              variant="contained"
              color="primary"
              onClick={handleHideEdit}
            >
              SAVE
            </Button>
          </Badge>
        </div>
      )}
    </div>
  );
}

export default App;
