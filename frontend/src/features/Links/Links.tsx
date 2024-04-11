import React from "react";
import {Card, CardContent, Container, Grid, Typography} from "@mui/material";
import FormLinks from "./components/FormLinks/FormLinks";
import {useAppSelector} from "../../app/hooks";
import {selectLink} from "./linksSlice";
import {API_URL} from "../../constants";


const Links: React.FC = () => {
  const link = useAppSelector(selectLink);

  let linkComponent;
  if (link) {
    linkComponent = (
      <Grid container justifyContent={"center"} alignItems={"center"} direction={"column"} marginTop={5} gap={2}>
        <Typography variant={"h4"}>You link now looks like this:</Typography>
        <Card>
          <CardContent>
            <a href={`${API_URL}/links/${link.shortUrl}`} target={"_blank"}>{API_URL}/{link.shortUrl}</a>
          </CardContent>
        </Card>
      </Grid>
    );
  }
  return (
    <Container>
      <Card sx={{
        marginTop: 10,
        padding: 5,
      }}>
        <CardContent>
          <FormLinks/>
        </CardContent>
      </Card>

      {linkComponent}
    </Container>
  );
  };

  export default Links;