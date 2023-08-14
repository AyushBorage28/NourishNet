import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FaPhone, FaMapMarkerAlt, FaMapMarkedAlt } from "react-icons/fa"; // Import the icons
import Header from "../../components/Header";
import styled from "styled-components"; // Import styled-components

const StyledCard = styled(Card)`
  width: 275px;
  margin-bottom: 20px;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s; /* Added box-shadow transition */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); /* Adding shadow when hovered */
  }
`;

const StyledIcon = styled.span`
  position: relative;
  top: -2px; /* Adjust this value to align the icons properly */
  margin-right: 8px;
  transition: color 0.3s;

  ${StyledCard}:hover & {
    color: yellow; /* Changed hover color to yellow */
  }
`;

const StyledRestaurantName = styled(Typography)`
  margin-bottom: 8px; /* Adding spacing in Y direction for the restaurant name */
`;



const Horeca = () => {
  const horecaData = [
    {
      image: "image-url-1.jpg",
      name: "Restaurant A",
      location: "123 Main St, City",
      distance: "2.5 km",
      phoneNumber: "123-456-7890",
    },
    {
      image: "image-url-2.jpg",
      name: "Cafe B",
      location: "456 Park Ave, Town",
      distance: "1.8 km",
      phoneNumber: "987-654-3210",
    },
    {
      image: "image-url-3.jpg",
      name: "Eatery C",
      location: "789 Broad St, Village",
      distance: "3.2 km",
      phoneNumber: "555-123-4567",
    },
    // Add more data as needed
  ];

  return (
    <Box m="20px">
      <Header title="All Restaurants" subtitle="Collect Food from where it is surplus" />

      <Box display="flex" flexWrap="wrap" gap="20px">
        {horecaData.map((item, index) => (
          <StyledCard key={index} variant="outlined">
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.name}
            />
            <CardContent style={{ padding: "16px", marginTop: "8px" }}>
              <StyledRestaurantName variant="h5">{item.name}</StyledRestaurantName>
              <div>
                <Typography>
                  <StyledIcon as={FaMapMarkedAlt} /> {item.location}
                </Typography>
              </div>
              <div style={{ marginTop: "10px" }}> {/* Added spacing in Y direction */}
                <Typography>
                  <StyledIcon as={FaMapMarkerAlt} /> {item.distance}
                </Typography>
              </div>
              <div style={{ marginTop: "10px" }}>
                <Typography>
                  <StyledIcon as={FaPhone} /> {item.phoneNumber}
                </Typography>
              </div>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

export default Horeca;
