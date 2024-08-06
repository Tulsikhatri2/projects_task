import { Box } from "@mui/material";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTodos } from "../Redux/ProjectsCRUD/dataSlice";
import TodosList from "./TodosList";
import { useParams } from "react-router-dom";

const Todos = () => {
  const [todosTitle, setTodosTitle] = useState("");
  const dispatch = useDispatch();
  const { f_id } = useParams();
  const { todosList } = useSelector((state) => state.data);

  function handleTodosSubmit() {
    dispatch(
      createTodos({
        id: crypto.randomUUID(),
        title: todosTitle,
        featureId: f_id,
      })
    );
    setTodosTitle("");
  }

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#091916",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "80%",
            backgroundColor: "#BCC1BA",
            boxShadow: "0px 0px 30vh #000000",
            borderRadius: "1rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "15%",
              borderRadius: "1rem",
            }}
          >
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4vh",
                color: "#092523",
              }}
            >
              <span style={{ width: "40%", height: "50%", marginLeft: "7vw" }}>
                <u>Todos</u>
              </span>
              <span
                style={{
                  width: "60%",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  label="Add Todos"
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      color: "#2C0B1F",
                      fontWeight: "bold",
                      backgroundColor: "#f4f4f4",
                      borderTopLeftRadius: "7px",
                      borderTopRightRadius: "7px",
                      "&:before": {
                        borderColor: "#2C0B1F",
                        borderWidth: "3px",
                      },
                      "&:after": {
                        borderColor: "#2C0B1F",
                        borderWidth: "3px",
                      },
                    },
                    "& .MuiInputLabel-filled": {
                      color: "#BFBFBF",
                      fontWeight: "bold",
                      "&.Mui-focused": {
                        color: "#000",
                        fontWeight: "bold",
                      },
                    },
                  }}
                  value={todosTitle}
                  onChange={(e) => setTodosTitle(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{
                    color: "#2C0B1F",
                    backgroundColor: "white",
                    marginLeft: "2vh",
                    height: "8vh",
                    fontSize: "4vh",
                    "&:hover": {
                      backgroundColor: "#091916",
                      color: "white",
                    },
                  }}
                  onClick={handleTodosSubmit}
                >
                  +
                </Button>
              </span>
            </h3>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "75%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <TodosList />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Todos;
