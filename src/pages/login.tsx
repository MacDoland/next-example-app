import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import { Card, CardContent, Container, Typography } from "jm-component-library";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Example NextJs Component Lib Integration</title>
        <meta
          name="description"
          content="Example NextJs Component Lib Integration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container sx={{ minHeight: "100vw", p: 8 }}>
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sign In
              </Typography>
              <FormControl variant="standard">
                <InputLabel htmlFor="username">
                  Username
                </InputLabel>
                <Input id="username" />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel htmlFor="password">
                  Password
                </InputLabel>
                <Input id="password" />
              </FormControl>
            </CardContent>
          </Card>
        </Container>
      </main>
    </>
  );
}
