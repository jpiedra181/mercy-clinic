import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import CardActionArea from "@mui/material/CardActionArea"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"

export default function CardSection({ url, title, description, page }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(page)
    }

    return (
        <Card
            sx={{ maxWidth: 800 }}
            style={{
                borderRadius: "24px",
                boxShadow: "10px 10px 5px #888",
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={url}
                    alt="our services"
                    sx={{
                        maxHeight: 400, // Your custom height
                        objectFit: "contain", // Ensures it fills the area nicely
                    }}
                />
                <CardContent
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        {description}
                    </Typography>
                    <CardActions>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#800020",
                                color: "white",
                                borderRadius: "12px",
                            }}
                            onClick={handleClick}
                        >
                            Read More
                        </Button>
                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
