import { Box } from "@mui/material";
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        src={image}
        width={size}
        height={size}
        style={{ objectFit: "cover", borderRadius: "50%" }}
      />
    </Box>
  );
};
export default UserImage;
