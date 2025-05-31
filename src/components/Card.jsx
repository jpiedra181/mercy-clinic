import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import CardActionArea from "@mui/material/CardActionArea"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"

export default function ActionAreaCard({ url, title, description }) {
    return (
        <Card
            sx={{
                maxWidth: {
                    sm: 280,
                    md: 280,
                    lg: 300,
                    xl: 350,
                },
            }}
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
                    style={{ objectFit: "cover" }}
                    alt="our services"
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
                                backgroundColor: "#00a3c8",
                                color: "white",
                                borderRadius: "12px",
                            }}
                        >
                            More Info
                        </Button>
                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
