import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Divider,
  useTheme,
  Chip,
  TextField,
} from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import TextBox from "components/TextBox";
import PrimaryButton from "components/PrimaryButton";

const validationSchema = yup.object().shape({
  interest: yup.string().required("This field is required*"),
});

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  // const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  //   const getUser = async () => {
  //     const response = await fetch(`http://localhost:3001/users/${userId}`, {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     const data = await response.json();
  //     setUser(data);
  //   };

  //   useEffect(() => {
  //     getUser();
  //   }, []);

  // eslint-disable-line react-hooks/exhaustive-deps

  //   s

  //   const {
  //     firstName,
  //     lastName,
  //     location,
  //     occupation,
  //     viewedProfile,
  //     impressions,
  //     friends,
  //   } = user;

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleSubmit = (e) => {
    console.log("test");
    // e.preventDefault();
    let interestDetails = { id: e.id, category: e.category };
    console.log(interestDetails);
    fetch("http://localhost:8080/interests", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(interestDetails),
    })
      .then((res) => {
        console.log("Interest added successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      interest: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      // console.log("on submit", values);
    },
  });

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage
            image={
              // "../../assets/p2.jpeg"
              picturePath
            }
          />
          <Typography
            variant="h4"
            color={dark}
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            Haily Banks
            {/* {firstName} {lastName} */}
          </Typography>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Interests
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <FlexBetween gap="0.5rem" mb="0.5rem">
            <TextField
              fullWidth
              id="interest"
              name="interest"
              size="small"
              value={formik.values.interest}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.interest && Boolean(formik.errors.interest)}
              helperText={formik.touched.interest && formik.errors.interest}
            />
            <PrimaryButton type="submit" variant="contained">
              Add
            </PrimaryButton>
          </FlexBetween>
        </form>

        <Box mt="1rem">
          <Chip
            sx={{ mr: "0.5rem", mb: "0.5rem" }}
            label="React"
            onDelete={handleDelete}
          />
          <Chip
            sx={{ mr: "0.5rem", mb: "0.5rem" }}
            label="Illustrator"
            variant="outlined"
            onDelete={handleDelete}
          />
          <Chip
            sx={{ mr: "0.5rem", mb: "0.5rem" }}
            label="Unreal Engine"
            variant="outlined"
            onDelete={handleDelete}
          />
          <Chip
            sx={{ mr: "0.5rem", mb: "0.5rem" }}
            label="Blender"
            variant="outlined"
            onDelete={handleDelete}
          />
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
