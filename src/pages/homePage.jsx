import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

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
import Fondation1 from "../medias/images/fondation_2.jpg";
import Cuve2 from "../medias/images/cuve_2.jpg";
import Enrochement3 from "../medias/images/enrochement_3.jpg";
import Epandage1 from "../medias/images/epandage_1.jpg";
import Epandage2 from "../medias/images/epandage_2.jpg";
import Epandage3 from "../medias/images/epandage_3.jpg";
import Epandage4 from "../medias/images/epandage_4.jpg";

// components
import CardComponent from "../components/CardComponent";
import ImageCardComponent from "../components/ImageCardComponent";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// material icons
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import FolderSpecialOutlinedIcon from "@mui/icons-material/FolderSpecialOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import Looks4OutlinedIcon from "@mui/icons-material/Looks4Outlined";

const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <NavBar />
      <Container sx={{ mt: "80px" }} component={"main"} maxWidth="xl">
        <Box component={"section"} my={1}>
          <Stack
            direction={{ sm: "row" }}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography component="h1" variant="h2" width={{ sm: "45%" }}>
              ARTISAN TERRASSIER A PERNES LES FONTAINES
            </Typography>

            <Stack width={{ sm: "40%" }} pt={2}>
              <Typography mb={4}>
                Disponible pour tous vos travaux de terrassement et aménagement.
                ADH Terrassement est la pour vous accompagner dans vos projets!
              </Typography>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ width: "150px", borderRadius: 0 }}
                >
                  Devis
                </Button>
              </ScrollLink>
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
                L'expertise ADH Terrassement, une aventure qui dure depuis plus
                de 7 ans.
              </Typography>
              <Typography fontSize={20}>
                Pour vous et à vos côtés depuis 2016 et plus de{" "}
                <span style={{ color: "gold" }}>170 de projets</span> réalisés
              </Typography>
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
                Assurance décennale comprise
              </Typography>
              <Typography fontSize={20}>
                Après la réalisation des travaux, ADH Terrassement assure
                l'intervention en cas de problème grâce à l'
                <span style={{ color: "gold" }}>assurance décennale</span>
              </Typography>
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
          id="services"
          sx={{ borderBottom: `2px solid ${theme.palette.primary.medium}` }}
          my={{ xs: 5, sm: 10 }}
          pb={5}
        >
          <Stack
            direction={{ lg: "row" }}
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
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  sx={{ width: "150px", borderRadius: 0 }}
                >
                  Devis
                </Button>
              </ScrollLink>
            </Box>
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}
              flexWrap={{ sm: "wrap" }}
              justifyContent={{ sm: "center", lg: "flex-end" }}
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
                  title={"Aménagement extérieur"}
                  text={"Pour vous aider à créer votre ambiance extérieure"}
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
              <Box>
                <CardComponent
                  title={"Mise aux normes d'assainissement"}
                  text={
                    "En partenariat avec Soléo environnement qui, après étude de cas, définira les options de travaux à faire"
                  }
                  icon={
                    <BusinessCenterOutlinedIcon
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
                  title={"Projet complet"}
                  text={
                    "Vous accompagner dans votre projet de A à Z. Recueil des besoins, conseils, accompagnement et mise à disposition de l'expertise ADH Terrassement "
                  }
                  icon={
                    <FolderSpecialOutlinedIcon
                      sx={{
                        color: "gold",
                        fontSize: "40px",
                      }}
                    />
                  }
                />
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box
          component={"section"}
          id="projet"
          sx={{ borderBottom: `2px solid ${theme.palette.primary.medium}` }}
          my={{ xs: 5, sm: 10 }}
          pb={5}
        >
          <Stack
            alignItems={{ xs: "center", sm: "flex-start" }}
            justifyContent={"space-between"}
          >
            <Box
              mb={{ xs: "20px" }}
              textAlign={{ xs: "center", sm: "inherit" }}
              maxWidth={"500px"}
            >
              <Typography component="h2" variant="h4" mb={3} display={"flex"}>
                PROJET COMPLET
                <StarBorderPurple500OutlinedIcon
                  sx={{ path: { color: "gold" } }}
                />
              </Typography>
              <Typography color={theme.palette.primary.light} mb={3}>
                Visite du site, recueil des besoins, établissement du cahier des
                charges, proposition d'un devis personnalisé et réalisation de A
                à Z.
              </Typography>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  sx={{ width: "150px", borderRadius: 0 }}
                  to="contact"
                >
                  Devis
                </Button>
              </ScrollLink>
            </Box>
            <Typography color={theme.palette.primary.light} mb={3}>
              Pose d'une filière compacte 5EH (Equivalent Humain) après étude de
              mise aux normes d'assainissement
            </Typography>
          </Stack>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={{ xs: "center", sm: "space-between" }}
          >
            <Box mx={1}>
              <ImageCardComponent
                title={<LooksOneOutlinedIcon />}
                image={Epandage1}
                alt={"Fosse septique"}
                text={
                  "Terrassement et pose d'une fosse 3000 litres et filtre compact"
                }
              />
            </Box>
            <Box mx={1}>
              <ImageCardComponent
                title={<LooksTwoOutlinedIcon />}
                image={Epandage2}
                alt={"Epandage"}
                text={"Mise en place épandage sur lit de gravier roulé 11/22"}
              />
            </Box>
            <Box mx={1}>
              <ImageCardComponent
                title={<Looks3OutlinedIcon />}
                image={Epandage3}
                alt={"Géotextile"}
                text={"Pose du géotextile pour épandage"}
              />
            </Box>
            <Box mx={1}>
              <ImageCardComponent
                title={<Looks4OutlinedIcon />}
                image={Epandage4}
                alt={"Nivellement du terrain"}
                text={"Rebouchage et nivellement du terrain"}
              />
            </Box>
          </Box>
        </Box>
        <Box
          component={"section"}
          id="realisations"
          my={{ xs: 5, sm: 10 }}
          sx={{ borderBottom: `2px solid ${theme.palette.primary.medium}` }}
        >
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
                title={"Matériels"}
                image={Materiel1}
                alt={"matériels en location"}
                text={"Matériels professionnels disponibles à la location"}
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
                title={"Terrassement des fondations, plateformes"}
                image={Fondation1}
                alt={"fondations"}
                text={
                  "Intervention sur terrain difficile pour terrassement de fondations ou préparation de plateforme"
                }
              />
            </Box>
            <Box>
              <ImageCardComponent
                title={"Cuve de récupération d'eau"}
                image={Cuve2}
                alt={"Cuve de récupération d'eau"}
                text={
                  "Mise en place d'une cuve de récupération d'eau après terrassement et déblaiement des gravats"
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
        <Box
          component={"section"}
          id="contact"
          my={{ xs: 5, sm: 10 }}
          sx={{ borderBottom: `2px solid ${theme.palette.primary.medium}` }}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Stack textAlign={{ xs: "center", sm: "start" }} pr={{ sm: "20px" }}>
            <Typography component="h2" variant="h4" mb={3}>
              CONTACT
            </Typography>
            <Typography color={theme.palette.primary.light} mb={3}>
              Pour établir un devis, remplissez le formulaire de contact. Si
              vous le souhaitez, n'hésitez pas à nous appeler directement ou par
              mail. Expliquez votre projet en quelques lignes afin de pouvoir au
              mieux préparer votre accompagnement
            </Typography>
          </Stack>
          <ContactForm />
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
