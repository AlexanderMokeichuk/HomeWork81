import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {LinkFrontend} from "../../../../type";
import {useAppDispatch} from "../../../../app/hooks";
import {shortenUrl} from "../../linksThunks";

const defaultState: LinkFrontend = {
  url: "",
};

const FormLinks: React.FC = () => {
  const [form, setForm] = useState<LinkFrontend>(defaultState);
  const dispatch = useAppDispatch();

  const changeFrom = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(shortenUrl(form));
    setForm(defaultState);
  };
  return (
    <form onSubmit={onSubmit}>
      <Grid container justifyContent={"center"} gap={2}>
        <Typography
          variant={"h3"}
          marginBottom={7}
        >
          Shorten your link
        </Typography>
        <TextField
          name={"url"}
          label="Enter URL here"
          type={"url"}
          variant="standard"
          fullWidth={true}
          required

          value={form.url}
          onChange={changeFrom}
        />
        <Button
          variant={"contained"}
          aria-label="Basic button group"
          type={"submit"}
        >
          Shorten
        </Button>
      </Grid>
    </form>
  );
};

export default FormLinks;