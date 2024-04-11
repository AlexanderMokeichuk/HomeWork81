import React from "react";
import {Card, CardContent, Container, Grid} from "@mui/material";
import FormLinks from "./FormLinks/FormLinks";

const Links: React.FC = () => {
  return (
    <Container>
      <Card sx={{
        marginTop: 10,
        padding: 5,
      }}>
        <CardContent>
          <FormLinks />
        </CardContent>
      </Card>
      <Grid container justifyContent={"center"} mt={40} direction={"column"}>

      </Grid>
    </Container>
  );
};

export default Links;