import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {LinkFrontend} from "../../../type";

const defaultState: LinkFrontend = {
  url: "",
};

const FormLinks: React.FC = () => {
  const [form, setForm] = useState<LinkFrontend>(defaultState);

  const changeFrom = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={onSubmit}>
      <Typography
        variant={"h3"}
        textAlign={"center"}
        marginBottom={7}
      >
        Shorten your link
      </Typography>
      <Grid container direction={"row"} justifyContent={"center"} gap={2} alignItems={"center"}>
        <TextField
          name={"url"}
          label="URL"
          type={"url"}
          variant="standard"
          sx={{width: "70%"}}
          required

          value={form.url}
          onChange={changeFrom}
        />
        <Button
          variant={"contained"}
          aria-label="Basic button group"
          type={"submit"}
        >
          Send
        </Button>
      </Grid>
    </form>
  );
};

export default FormLinks;