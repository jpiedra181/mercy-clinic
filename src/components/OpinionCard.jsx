import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import CardActionArea from "@mui/material/CardActionArea"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"

export default function OpinionCard({ url, comment, name, job }) {
    return (
        <Card
            sx={{ maxWidth: 400 }}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                borderRadius: "24px",
                boxShadow: "inset 1px 1px 10px #00a3c8",
            }}
        >
            <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {comment}
                </Typography>
            </CardContent>
            <CardContent
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "20px",
                }}
            >
                <Stack>
                    <Avatar
                        alt="Remy Sharp"
                        src={url}
                        style={{ width: "68px", height: "68px" }}
                    />
                </Stack>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        {job}
                    </Typography>
                </Typography>
            </CardContent>
        </Card>
    )
}
