import { useState } from "react";
import "./App.css";

import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  let taskNames = [
    "Study for Math Quiz",
    "Email Science Teacher",
    "Clean Desktop Folder",
    "Plan Weekend Outing",
    "Update Resume Draft",
    "Call Grandma",
    "Backup Laptop Files",
    "Write Thank You Notes",
    "Read Chapter 5 - History",
    "Fix Broken Drawer",
  ];

  let dueDates = [
    "2025-07-09",
    "2025-07-10",
    "2025-07-11",
    "2025-07-12",
    "2025-07-13",
    "2025-07-13",
    "2025-07-14",
    "2025-07-15",
    "2025-07-16",
    "2025-07-17",
  ];

  let statuses = [
    "In Progress",
    "Not Started",
    "Completed",
    "Not Started",
    "In Progress",
    "Completed",
    "In Progress",
    "Not Started",
    "Completed",
    "Not Started",
  ];
  let index_to_modify = 0;

  const handleSelectItem = (item: string, index: number) => {
    setOptionsVisibility(true);
    index_to_modify = index;
  };

  const [optionsVisible, setOptionsVisibility] = useState(false);

  return (
    <div>
      <div className="Tasks">
        <ListGroup
          names={taskNames}
          dates={dueDates}
          statuses={statuses}
          heading="tasks"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        <hr className="boundary text-secondary"></hr>
      </div>
      <div className="buttons">
        <Button
          color="primary"
          onClick={() => {
            let new_name = String(prompt("name of item"));
            let new_date = String(prompt("due date of item: MM/DD/YYYY HH:MM"));
            let valid = true;
            do {
              if (
                new_date &&
                /^\d{2}\/\d{2}\/\d{2} \d{2}:\d{2}$/.test(new_date)
              ) {
                // console.log("Valid date format:", new_date);
                valid = true;
              } else {
                // console.log("Invalid format. Please use MM/DD/YY HH:MM");
                valid = false;
                let new_date = prompt(
                  "incorrect format: please use MM/DD/YY HH:MM"
                );
              }
            } while (!valid);

            let userDate = new Date(new_date);
            let now = new Date();

            let new_status = "blank";

            if (userDate > now) {
              new_status = "pending";
            } else if (userDate < now) {
              new_status = "missing";
            }
            alert(
              "a new task is being made where the name is " +
                new_name +
                " and the date is " +
                new_date +
                " and the status is " +
                new_status
            );
          }}
        >
          add new task
        </Button>
        {optionsVisible && (
          <>
            <Button
              color="primary"
              onClick={() => {
                let edit_index = index_to_modify;
                let new_name = String(
                  prompt("what is the new name of the task")
                );
                alert(
                  "the name of task with index " +
                    String(edit_index) +
                    " and name " +
                    taskNames[edit_index] +
                    " is being edited into " +
                    new_name
                );
              }}
            >
              edit task name
            </Button>
            <Button
              color="primary"
              onClick={() => {
                let edit_index = index_to_modify;

                let new_date = String(
                  prompt("due date of item: MM/DD/YYYY HH:MM")
                );
                let valid = true;

                do {
                  if (
                    new_date &&
                    /^\d{2}\/\d{2}\/\d{2} \d{2}:\d{2}$/.test(new_date)
                  ) {
                    // console.log("Valid date format:", new_date);
                    valid = true;
                  } else {
                    // console.log("Invalid format. Please use MM/DD/YY HH:MM");
                    valid = false;
                    let new_date = prompt(
                      "incorrect format: please use MM/DD/YY HH:MM"
                    );
                  }
                } while (!valid);

                let userDate = new Date(new_date);
                let now = new Date();

                let new_status = "blank";

                if (userDate > now) {
                  new_status = "pending";
                } else if (userDate < now) {
                  new_status = "missing";
                }

                alert(
                  "the due date of task with index " +
                    String(edit_index) +
                    " and name " +
                    taskNames[edit_index] +
                    " is being edited into " +
                    new_date +
                    " where the status is " +
                    new_status
                );
              }}
            >
              edit task due date
            </Button>
            <Button
              color="primary"
              onClick={() => {
                let remove_index = index_to_modify;
                alert(
                  "the task of index " +
                    String(remove_index) +
                    " and name " +
                    taskNames[remove_index] +
                    " is being removed"
                );
              }}
            >
              remove task
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
