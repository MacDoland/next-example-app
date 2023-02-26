import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "jm-component-library";

export const PokeCard = ({ pokemon }: any) => {
    const { name, imageUrl, description } = pokemon;
  return (
    <Card sx={{ flex: "1 0 11%", maxWidth: 345}}>
      <CardMedia
        component="img"
        sx={{ minHeight: 140 }}
        image={imageUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
