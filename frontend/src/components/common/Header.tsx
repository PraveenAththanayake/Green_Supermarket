import * as React from "react";
import { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import { FaRegBell } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import SearchBar from "./searchBar";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { Link, useNavigate } from "react-router-dom";
import {
  getLoggedInUser,
  isUserLoggedIn,
  logout,
} from "../../services/auth/AuthService";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Badge } from "@mui/material";
import { useShoppingCart } from "../../store/CartSlice";

const Header = () => {
  const [nav, setNav] = useState(false);
  const isAuth = isUserLoggedIn();
  const LoggedInUser = getLoggedInUser();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const { cartQuantity } = useShoppingCart();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  const navigator = useNavigate();

  function handleLogout() {
    logout();
    navigator("/login");
  }

  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto lg:mt-[74px] my-8 max-w-[1120px]"
    >
      <div className="px-2 md:px-6 flexBetween">
        <div
          className="flex-none gap-5 cursor-pointer flexCenter"
          onClick={() => (nav == false ? setNav(true) : setNav(false))}
        >
          <div>
            <img
              src="/images/Nav/Ham Nav menu.jpg"
              alt="hamburger-icon"
              className="w-[20px] h-[16px]"
            />
          </div>
          <div>
            <p className="hidden text-xl font-normal text-center lg:block">
              All Categories
            </p>
          </div>
        </div>

        {nav && <CategoryMenu />}

        <div className="grow">
          <SearchBar />
        </div>

        <div className="gap-5 xs:gap-[25px] flexCenter text-gray text-4xl md:text-5xl flex-none">
          <Link to="" className="hidden hover:text-customGreen sm:block">
            <FaRegBell />
          </Link>
          <Link to="/cart">
            <Badge badgeContent={cartQuantity} color="primary">
              <LuShoppingCart className="hover:text-customGreen" />
            </Badge>
          </Link>

          {isAuth ? (
            <Box>
              <Popper
                // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
                sx={{ zIndex: 1200 }}
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                      <Typography
                        sx={{ p: 2, width: "100%" }}
                        className="flex-col flexCenter gap-y-3"
                      >
                        <span className="text-2xl font-semibold capitalize">
                          Hi! {LoggedInUser}
                        </span>
                        <Link to="/login">
                          <button
                            className="px-4 py-1 font-medium text-white rounded-default bg-customGreen hover:bg-darkerGreen"
                            onClick={handleLogout}
                          >
                            Log Out
                          </button>
                        </Link>
                      </Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
              <button onClick={handleClick("bottom")}>
                <CgProfile className="hover:text-customGreen" />
              </button>
            </Box>
          ) : (
            <Link to="/register">
              <Tooltip title="Please sign in!">
                <IconButton>
                  <CgProfile className="hover:text-customGreen" />
                </IconButton>
              </Tooltip>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
