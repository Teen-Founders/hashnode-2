import { Typography, useTheme } from "@mui/material";
import {
  ManageAccountsOutlined,
  EditOutlined,
  ExploreOutlined,
  DraftsOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper style={{border:"0.012rem solid grey"}}>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
        <ExploreOutlined style={{fontSize:"2rem"}}/>Introducing Hashnode PRO
        </Typography>
        
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://i.ibb.co/nC7SmnX/Pngtree-glassmorphism-on-transparent-background-9001041.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0", height:"15rem" }}
      />
      <FlexBetween>
        <Typography color={main}>Upgrade Now</Typography>
        <Typography color={medium}>Learn More</Typography>
      </FlexBetween>
   
    </WidgetWrapper>
  );
};

export default AdvertWidget;
