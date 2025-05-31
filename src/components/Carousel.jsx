import { useState, useEffect } from "react"
import { Box, Stack, Fade } from "@mui/material"
import OpinionCard from "../components/OpinionCard"

export default function ImageCarousel() {
    const components = [
        <OpinionCard
            url={"/images/Zenailda-Blas.jpg"}
            comment={
                "“Estoy muy agradecida con la Clínica Mercy porque me han ayudado mucho.”"
            }
            name={"Zenaida Blas"}
            job={"Laredo, TX"}
        />,
        <OpinionCard
            url={""}
            comment={
                "“Que Dios las bendiga a todas las trabajadoras y gracias por todo.”"
            }
            name={"Maria Niño"}
            job={"Laredo, TX"}
        />,
        <OpinionCard
            url={"/images/Carmen-Mata.jpg"}
            comment={"“Yo estoy muy agradecida porque me han ayudado mucho.”"}
            name={"Carmen Mata"}
            job={"Consultant"}
        />,
        <OpinionCard
            url={"/images/Adelaida-Santana.jpg"}
            comment={
                "“Gracias por todo su apoyo en nuestros necesidades.  Que Dios bendiga siempre a todos los empleados por su ayudar y apoyo.”"
            }
            name={"Adelaida Santana"}
            job={"Consultant"}
        />,
        <OpinionCard
            url={"/images/Patricia-Benavides.jpg"}
            comment={
                "“Estoy agradecida con la Clínica Mercy por la atención que me da cada vez que vengo.”"
            }
            name={"Patricia Benavides"}
            job={"Consultant"}
        />,
        <OpinionCard
            url={"/images/Graciela-Fructuoso.jpg"}
            comment={
                "“I’m very grateful to our (Mercy) clinic because I’ve been helped with counseling, exams and heart procedure.  I thank God for the Sisters of Mercy, the clinic & everyone involved ..."
            }
            name={"Graciela Fructuoso"}
            job={"Consultant"}
        />,
        <OpinionCard
            url={"/images/Yadira-Sanchez.jpg"}
            comment={
                "“Yo agradezco por mi cirugía que no pague mucho porque la Clínica Mercy me ayudo.”"
            }
            name={"Yadira Sanchez"}
            job={"Consultant"}
        />,
    ]

    const [index, setIndex] = useState(0)
    const [fadeIn, setFadeIn] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 4000)

        return () => clearInterval(interval)
    }, [index])

    const handleNext = () => {
        setFadeIn(false)
        setTimeout(() => {
            setIndex((prev) => (prev + 1) % components.length)
            setFadeIn(true)
        }, 200)
    }

    const handleDotClick = (i) => {
        setFadeIn(false)
        setTimeout(() => {
            setIndex(i)
            setFadeIn(true)
        }, 200)
    }

    return (
        <Box
            sx={{
                maxWidth: 800,
                mx: "auto",
                position: "relative",
            }}
        >
            <Fade in={fadeIn} timeout={300} key={index}>
                <Box>{components[index]}</Box>
            </Fade>

            <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
                {components.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => handleDotClick(i)}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: i === index ? "#1976d2" : "#ccc",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                    />
                ))}
            </Stack>
        </Box>
    )
}
