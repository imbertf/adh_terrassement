import React from "react";

// material ui
import NavBar from "../components/NavBar";
import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";

// images
import Jardin from "../medias/images/jardin.webp";
import Enrochement4 from "../medias/images/enrochement_4.jpg";
import Olivier1 from "../medias/images/olivier_1.jpg";
import Piscine2 from "../medias/images/piscine_2.jpg";
import Materiel1 from "../medias/images/materiel_1.jpg";
import Terrassement2 from "../medias/images/terrassement_2.jpg";
import Fondation1 from "../medias/images/fondation_1.jpg";
import Fosse2 from "../medias/images/fosse_2.jpg";
import Enrochement3 from "../medias/images/enrochement_3.jpg";

// components
import CardComponent from "../components/CardComponent";
import ImageCardComponent from "../components/ImageCardComponent";

// material icons
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <NavBar />
      <Container sx={{ mt: "80px" }} component={"main"}>
        <Box component={"section"} my={1}>
          <Stack
            direction={{ sm: "row" }}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography component="h1" variant="h2" width={{ sm: "45%" }}>
              ARTISANT TERRASSIER A PERNES LES FONTAINES
            </Typography>
            <Stack width={{ sm: "40%" }} pt={2}>
              <Typography mb={4}>
                Disponible pour tous vos travaux de terrassement et aménagement.
                ADH Terrassement est la pour vous accompagner dans vos projets!
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                sx={{ width: "150px", borderRadius: 0 }}
              >
                Devis
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box
          component={"section"}
          sx={{ borderBottom: `2px solid ${theme.palette.primary.medium}` }}
          my={{ xs: 5, sm: 10 }}
          pb={5}
        >
          <Box height={"300px"}>
            <img
              src={Jardin}
              alt="jardin"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Box>
          <Stack
            direction={{ sm: "row" }}
            my={{ sm: "10px" }}
            justifyContent={"space-evenly"}
            alignItems={{ sm: "flex-start" }}
          >
            <Box
              sx={{
                textAlign: "center",
                my: { xs: "10px", sm: "inherit" },
                py: { xs: "10px", sm: "inherit" },
                width: { sm: "300px" },
                display: { sm: "flex" },
                flexDirection: { sm: "column" },
                justifyContent: { sm: "center" },
              }}
            >
              <Typography color={theme.palette.primary.light}>
                Expérience
              </Typography>
              <Typography fontSize={20}>10 ans</Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                my: { xs: "10px", sm: "inherit" },
                py: { xs: "10px", sm: "inherit" },
                width: { sm: "300px" },
                display: { sm: "flex" },
                flexDirection: { sm: "column" },
                justifyContent: { sm: "center" },
              }}
            >
              <Typography color={theme.palette.primary.light}>
                Réalisations
              </Typography>
              <Typography fontSize={20}>20 projets</Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                my: { xs: "10px", sm: "inherit" },
                py: { xs: "10px", sm: "inherit" },
                width: { sm: "300px" },
                display: { sm: "flex" },
                flexDirection: { sm: "column" },
                justifyContent: { sm: "center" },
              }}
            >
              <Typography color={theme.palette.primary.light}>
                Clients satisfaits
              </Typography>
              <Stack>
                <Typography fontSize={20}>
                  "Merci pour ce travail soigneux et propre"{" "}
                  <Typography variant="caption">V.Savin</Typography>
                </Typography>
                <Typography fontSize={20}>
                  "Merci ADH Terrassement, nous sommes très contentes. Une
                  équipe formidable!"{" "}
                  <Typography variant="caption">K.Braskamp</Typography>
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box
          component={"section"}
          sx={{ borderBottom: `2px solid ${theme.palette.primary.medium}` }}
          my={{ xs: 5, sm: 10 }}
          pb={5}
        >
          <Stack
            direction={{ md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              mb={{ xs: "20px" }}
              textAlign={{ xs: "center", sm: "inherit" }}
              maxWidth={"500px"}
            >
              <Typography component="h2" variant="h4" mb={3}>
                NOS SERVICES
              </Typography>
              <Typography color={theme.palette.primary.light} mb={3}>
                ADH Terrassement met à votre disposition son savoir faire et
                toute son expertise. Que ce soit pour des travaux
                d'assainissement ou viabilisation, nous pouvons intervenir sur
                tout types de chantiers.
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                size="small"
                sx={{ width: "150px", borderRadius: 0 }}
              >
                Devis
              </Button>
            </Box>
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}
              flexWrap={{ sm: "wrap" }}
              justifyContent={{ sm: "center", md: "flex-end" }}
            >
              <Box>
                <CardComponent
                  title={"Location de benne"}
                  text={
                    "Nous mettons à votre disposition du matériel de qualité"
                  }
                  icon={
                    <HandshakeOutlinedIcon
                      sx={{
                        color: theme.palette.primary.light,
                        fontSize: "40px",
                      }}
                    />
                  }
                />
              </Box>
              <Box>
                <CardComponent
                  title={"Pose de piscine"}
                  text={"Afin de préparer au mieux votre prochain été!"}
                  icon={
                    <PoolOutlinedIcon
                      sx={{
                        color: theme.palette.primary.light,
                        fontSize: "40px",
                      }}
                    />
                  }
                />
              </Box>
              <Box>
                <CardComponent
                  title={"Raccord au tout à l'égout"}
                  text={"Préparation du terrain, pose du matériel et raccord"}
                  icon={
                    <InsertLinkOutlinedIcon
                      sx={{
                        color: theme.palette.primary.light,
                        fontSize: "40px",
                      }}
                    />
                  }
                />
              </Box>
              <Box>
                <CardComponent
                  title={"Aménagement exterieur"}
                  text={"Pour vous aider à créer votre ambiance exterieure"}
                  icon={
                    <WbSunnyOutlinedIcon
                      sx={{
                        color: theme.palette.primary.light,
                        fontSize: "40px",
                      }}
                    />
                  }
                />
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box component={"section"} my={1}>
          <Stack
            direction={{ sm: "row" }}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography component="h2" variant="h4" width={{ sm: "45%" }}>
              REALISATIONS
            </Typography>
            <Stack width={{ sm: "40%" }} pt={2}>
              <Typography color={theme.palette.primary.light} mb={3}>
                Le savoir faire ADH Terrassement, votre projet et notre travail
                commun forment les bases solides afin de vous accompagner dans
                vos travaux.
              </Typography>
            </Stack>
          </Stack>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            <Box>
              <ImageCardComponent
                title={"Mise en valeur d'une piscine"}
                image={Enrochement4}
                alt={"piscine"}
                text={"Terrassement et enrochement de l'accès à la piscine "}
              />
            </Box>
            <Box>
              <ImageCardComponent
                title={"Plantation d'un olivier"}
                image={Olivier1}
                alt={"pose d'un olivier"}
                text={"Aménagement d'un espace pour la pose d'un olivier"}
              />
            </Box>
            <Box>
              <ImageCardComponent
                title={"Pose d'une piscine"}
                image={Piscine2}
                alt={"trou pour une piscine"}
                text={
                  "Préparation du trou pour la future piscine, évacuation de la terre"
                }
              />
            </Box>
            <Box>
              <ImageCardComponent
                title={"Materiels"}
                image={Materiel1}
                alt={"materiels en location"}
                text={"Matériels professionnels disponnibles à la location"}
              />
            </Box>
            <Box>
              <ImageCardComponent
                title={"Mise en valeur d'une cour"}
                image={Terrassement2}
                alt={"Cours d'une maison"}
                text={
                  "Retrait des gravats, terrassement et pose de graviers pour la nouvelle cour"
                }
              />
            </Box>
            <Box>
              <ImageCardComponent
                title={"Création des espaces fondations"}
                image={Fondation1}
                alt={"fondations"}
                text={"Préparation des fondations"}
              />
            </Box>
            <Box>
              <ImageCardComponent
                title={"Pose d'une fosse septique"}
                image={Fosse2}
                alt={"fosse septique"}
                text={
                  "Mise en place de la nouvelle fosse après avoir creusé le trou et déblayé les gravats"
                }
              />
            </Box>
            <Box>
              <ImageCardComponent
                title={"Enrochement lors de la construction"}
                image={Enrochement3}
                alt={"enrochement"}
                text={
                  "Belle mise en valeur de cette future maison par enrochement"
                }
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
