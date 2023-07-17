import {
  Box,
  Button,
  Paper,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { colours } from "../../constants/colours";

export interface ProductProps {
  image: string;
  price: string;
  title: string;
}

const Product = (props: ProductProps) => {
  return (
    <Box display={"block"} width={"100%"} height={"100%"}>
      <Paper
        elevation={1}
        sx={{
          transitionProperty: "box-shadow",
          objectFit: "contain",
          width: "100%",
          height: "100%",
          boxShadow:  `${colours.shadow} 0px 3px 6px 0px`,
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Box
            padding={"1.5rem 1.5rem 0 1.5rem"}
            sx={{ backgroundColor: colours.lightgrey, position: "relative" }}
          >
            <CardMedia
              component={"img"}
              image={props.image}
              sx={{
                height: "280px",
                objectFit: "contain",
                backgroundColor: colours.lightgrey,
              }}
            ></CardMedia>
            <Box>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  backgroundColor: "white",
                  padding: ".75rem",
                }}
              >
                <FavoriteBorderOutlinedIcon
                  sx={{
                    backgroundColor: "white",
                    width: "1.25rem",
                    height: "1.25rem",
                    color: colours.blue,
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <CardContent>
          <Typography variant="h6" align="left">
            {props.title}
          </Typography>
          <Box
            display={"flex"}
            alignContent={"left"}
            margin={"0.5rem 0 0.5rem"}
          >
            <Box display="flex" flexDirection={"row"}>
              <Box>
                <StarIcon
                  sx={{ color: colours.staryellow, width: 18, height: 18 }}
                />
              </Box>
              <Box>
                <StarIcon
                  sx={{ color: colours.staryellow, width: 18, height: 18 }}
                />
              </Box>
              <Box>
                <StarIcon
                  sx={{ color: colours.staryellow, width: 18, height: 18 }}
                />
              </Box>
              <Box>
                <StarIcon
                  sx={{ color: colours.staryellow, width: 18, height: 18 }}
                />
              </Box>
              <Box>
                <StarIcon
                  sx={{ color: colours.staryellow, width: 18, height: 18 }}
                />
              </Box>
            </Box>
          </Box>
          <CardActions
            sx={{
              padding: "0.5rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1" color={"primary"}>
              {props.price}
            </Typography>
            <Button
              variant="outlined"
              size="medium"
              startIcon={<BusinessCenterIcon />}
              sx={{ textTransform: "none", padding: "10px 15px" }}
            >
              Add to cart
            </Button>
          </CardActions>
        </CardContent>
      </Paper>
    </Box>
  );
};

export default Product;
