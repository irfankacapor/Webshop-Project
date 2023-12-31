import { Box, Grid, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import { CategoryProps } from "./types";
import { useTranslation } from "react-i18next";

const StyledPaper = styled(Paper)`
  height: 100% !important;
  width: 100% !important;
  transition-property: box-shadow !important;
  box-shadow: ${colours.shadow} 0px 3px 6px 0px !important;
  background-color: ${colours.lightgrey} !important;

  padding: 2rem;
  border-radius: 0.5rem !important;
  box-sizing: border-box;
  object-fit: contain;
  transition: transform 0.3s !important;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryContainer = styled(Box)`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 1rem;
`;

const ShapeContainer = styled(Box)`
  border-radius: 100%;
  background-color: ${colours.orange};
  width: 50px;
  height: 50px;
  transform: translate(1rem, -1rem);
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 0;
`;

const Category = () => {
  const { t } = useTranslation();

  const categoryList: CategoryProps[] = [
    {
      category: t("homepage.categories.category1"),
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkElEQVR4nO2Yz2sTURDHH1Uq+B/4C3+gHqr7ZmP8AYLWHzcRb/kXms6sPXhVMT2IJ4sePOjZHyilFxXUis1dj7bdmRQRC0IPVvA3Vk3kbbPJtqY1G0h2A+8DA8vbfS/z3XnzMrNKWSwWy3JcLPVrlGuA/MiYuXZIjqq0A3nZpEkmgKSygr3IeP5GlVbngXh2FeerxrOpFKFRiv93ftE08XOVtj0PTTofmjMoR1RaCBI2pgAgGVFpQRM/ji+AH6pu3P+1PEApqrRgBSSNjUDS2AgkjY1AV0aAZCIRZ11kApLXmhjDMSAei11KoIyutmbbAJSv1ZL4mypUesyYRr7UQjF3MViwUOkxa1VFfemAAJ4LncgOTG8IBHjTuzXx7xh10C83P7Wr3giFUeG5tgvQKK/CH3RJTtXGSW7EePvXa/O80ulIXrxsuwAgvhJ5Y/fC8b7cZC+gPG1i7z8xz9bXk/uRTu1yBwSIC8TlqoA/muRQeK+/UFwLKBeA5PO/24Y/OSTnc7nKmvB5F/3DZo1qf1Dei6zbLiAQgTIaCftbZ6i0OXo/O/B+vTPonwHic8bMtRmLPrMHZ7Zo4neRvHjQEecDAXl/G5DMR7qrNy7ygebny0EzB+rOf8jQ1FbVSRzik5pkIRKJBY18MzxdGlE9rW5F5wHJT0D/eEedrzk0yCeA5GODRBVNchuQr5rmffFapEFSzyfmfIiDsiP4hNhCU6/P8naVFsyb1MR3gfjHyn9g/F2j3AHPP6bSSl9usjfj+fuX1kc8Zsai53/qAZThSE4Mq24DrICE6YoI7BwqrTOfymu1UbxjtKyRxxNNbAf9bAuNzBJzvJl9yUYAebxeUcZpKU0ly8+66mi1WCwWtZy/pdeUHbm766oAAAAASUVORK5CYII=",
    },
    {
      category: t("homepage.categories.category2"),
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqklEQVR4nO2Yy2tTURDGDyo+EF248IUgiKKNzUxCtYgICq5cCHYRRVCEFtvMJCmoO0HrUnBjfS9ciFhEEURUEEUE8Q8QmjYzqVUoLqorQYrUmkZOEsRHSU7N7b0J3A/uds73O2fuOTNjTKhQoUKFambFU7m10aTsA5KTMcrtNI2q3X2vFkByuBVJjiDLBSB5DiSfkbX46yMZN42g9kx+ObDsQtJuJOkH0jfAMvGH2Rk+YP3uu9m27uE1mNIOJD0HrA+R9H0tow0DACSH7KL/axiDBkCSB16ZRwtAOuUvAOsjTwHY7xRiedLUJwAkT+s3Lt+QdTKYFCJ5PCuzJONI+gxYz0dZD8dJWxKJ4vx4KrctmBOw1+aMuSw/kGW0BGivV8rvj5JuqPYaYzAppPcqhr8AyY3Sw9Wj7TtOjC2Z9VvCZXDjp4BlwC4cZT1dT5y2AAFuVY4+05QAyHqzyQHkuhcAEc6uDgaA9FpTAwDrVS8AWntHVwUFcMVLACQpGD8FJJebGgBJ+r38B9B3ANaLlTK4t544cdKWSmE3bfwUslyqFyDWM7QJWO8HBFB5yBwBNmbyi5DkQPnnl9e2hvqrtJ4OqJirDYA8shVYhmuU2wV/5zwsQy4AcOrtUmQZc+gZJufUcCytCCRd9gUGkpHfetnqACxH3XpimfDceGtatgDpnWqDKQeAM45dm3hqPsqy12WihqzpanFiJAm3pl7Oep3jHx137ni1WJFEdiGyDtaIMWhHkp4BxEi2uzbrdodrxYtm8uuA5cW/u65TSHobku9WGi9le1snAJKCNeca106ogXOdNu0wpR2RruwKMxdaf+zDYmT55HBzDJhGFbIctDtcBeDl5s7cMtPIwlRuTyl3Sb+Wp2ilec9dWxKYvuK8oP2FChUqlAlUPwEVwQxKGYQ34gAAAABJRU5ErkJggg==",
    },
    {
      category: t("homepage.categories.category3"),
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABd0lEQVR4nO2XTU4CQRBGOxi9gxtdaGLU0A1hCdEjkGBGPMGEKsErcAvdcAKuYdy59KcKY8JC0Ruwc0zjsDEkMM0w3Yt6SS2Hel/3FzKjlCAIgiAIgXMSPe1opEYFKCpiTJfqdmcu8vqarwzQt0FOCh2wO+lyfXmkn8LlcT52t2MIe4VeTh7/3wR/1eLH7eynj9TwLo/pdKmePUBndOFdHP/GumQOMPs3WPBjqp+U1KboJ6VFO61LfgE2jJEAKXIDjhipUIpUyBEjFUqRCjlipEIpUqFQK6SB2pv6FtZA7fwCIDV9fweYeQCkZuYAVeBj3+ImnXLn9Ui5oJEffMsb4Hsn+dkt4NuhRp74ktfIk9Pe6ECtQy1+2TVIdxr4szhx+jDAt3a3KhKNPFzhVIcqNKIo2dLINxp4vDQA8FgD9+wzKhSsfOaaAPdUKBjkgUPXByoUKjA6N0jT1eVpWkY+UyFRxed9Ddxa/rrArVr8vufbVxAEQeXCL/kD8Kb7j1LkAAAAAElFTkSuQmCC",
    },
    {
      category: t("homepage.categories.category4"),
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3UlEQVR4nO2azWsTURDA1+hF/ADviiJiJXXnpQjizYtQ9Z6r+IXpTCwiHjxG8OKxHyr4J+glrUIvHvwH/EKsO5Mi0rR6EKnWiz115W3Bj0Kzm+S97G7yfjCQSzYzvzfz8nYTz3M4HA6Hw+FwmEPRwrAiCU1GqdIoenlBodwxLUBfs/eFUOuktnofEM9bEBDkQoCy0P6pjYHqRICN9k9zDNrFSvunOQabOXWzudNHOVxCOaNQrgHJPSB5okheKpIVa8X/Cf6liD8C8XMgfqSQb5eQyz4GJ3x8t88zhaoEh4AYFckEoMwA8htA/m6/wO5C57iRq8xEuRPjCM0fbKP0cBsg31XE62kXY7Br1nVNurb4lSe5mH7CtrpDLiQQwK/TTtRaIL+KF4C81scC1pKMQNjPkaoAIF5UxFNQDUb9sWAIbr3dpSN6XQ1GAXlaETdNFZQZAUC8rM8M5XK4PTaBWljQ3+tA8qkvBABJvUjvd3ttMnQ52KNIZuOu74839mdZwIReUa9TamFBIU/GfMbcVhJSFQAk9a6K/1dCgk5IGr0RgLzUSdu3GgdA+ZwjAY1LnmH8Kl/NhQAgXky027eJvqburMwLUMiTniWA5H7mBQDxWVsCSiTnMy9ghBaO2BKgT4yZF1A0uPtvRl97oAWcHG/szbwAqH44akvA8et8LPsCaMA3QUCetiVAoTzMvABF3LRxEDpde7EjHwchirrgimkBiqRiIrfeCCBe1jcwJnd/IPmSGwFqI+aMjEJ0O8xPTeXVSwFhdF/Q7QMR4imTOfVWAEUx28k4RIce5Gem80lDQAjIX30MbuidPDaBWljQv+CYmvlMCFB/R2JJ39L6Y3xOn+r0sVmHfq0POUDywMRXXXYFUPrhBMShMrBKrgMo3RH4mfYq2Qog/hErAEjqfSsA5XHS524rfVj8t1a/I/7HMC4c0P/8AuTV/BfOq3rlExfvcDgcDofD4fAGg9+PtNgnCwFyoQAAAABJRU5ErkJggg==",
    },
    {
      category: t("homepage.categories.category5"),
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERklEQVR4nO1ZTYgcVRB+WU08rAj+Eo0ehIgyu1OvN6sBfyCoCHoweJmDHnIRd7pqdvSwBw8GNoccRE8eRQMqKMrm5t9BTITEGHVjVp1sV/XEi4hEzEHZqInBdKieWXcz3T3zdqZ3t5UUPGh66r36vtdf1fsZYy7b/8y21sOrgORZi3zUopxpNT5qSSZLlcYmU2SzVdkCyHOWJEprgHxcfUxhZx6zwS81/qaQXwJUNj3Bt5vPNVM0A+IvnQkQf2GKZhZlwZkAyoL5LxMA5N9N0cy2SqUrgSOmaAYodVcCHjKZgpbR4731z8cKWUaXLWTZJJCPjdWCW0yRrVRpbNJtg+o8TmyUBX1W2RR25hdNAQKGjwPxG6bDLPGbZT/YWUgS2+vhNWUMnrPEPy7KpdNnmYxOWZQ9d9XmrzfrbTDJtwPJi0D8W6feO33TFjMgfrXsB3euOfByrbnNorwFKOezErYngaUv8o9Fft9O8v2ri3o6Gmrr+xOXWu9MgC5ps4Cya8f0wStzru+yy6IE7pu1vglE7c3eD5pTMDU33Ddw8E/epMkGKKdXFjwPAtLacmhuIb9Sroe3OgO31ByxKPss8tl+guZJwC7lydkYEzVHukCPNljil+OkGiTYahCgpYQH5JcUa1IyxJhLkNUkQG1pYeAnCSA33DpzU1fUMn53bdz8YKe+6/RbrtsRbN6WJwFL8n0agT9dOnvVsJSaN0nfj5REDB7l43wJ8F8JAhb5pFvnZCKBPz+a8wxHvVSQJECy22kAJYr8hMqn9HTjOn12J59TQ3khQWB8YnajRd6/pkCoL/AzitVkmYdcAZJw3YFSh2xIQsWWWkLTv4ZMAMnPBQD+q0V+Xrc0PYEnknNqblg7p22X10AqZ3SrrmcNM6jp4UMHG3R74Tjjf+s5oUSNzSubbb2YRZnxqifuyPIZo+ZWS/KuJb6QP3i+ACjvaYys+IpNMQLxicSP/84AynmdgfGJ+ZszidSCuy3JpznO+ufdDjTjE3xDpwKSBPSPiEs1qDcKe0rUuDprYCB+1O1KPbN9W/b5sazxNbZi6Ly2BOI/0gjMpCcTn9Lr8MzaOx0NeX741EqIqK/2MdPRUPqMz27UmHHsdEz7E528engjkBzovw5HG1RaQLxXj51A/NPiX0z63H63V326jeH1WIcA5aBiNV1k8UAPIl9ZDB40OdtYrXmvRTnU5asd0TO500Km5tXCR3oM+OEoMgwKfBQZdKxMyaEcUix9BwCfHwLizzJLH/EH6lOpRFe4jqm+ZeKHtW9WSdaYOq7JyzwMd3STVvvG7TVL8kxcZvWid2puOF7Nq7LFQ75Hf7Mkr1viX7pI9IDGyg14kkhwX3wRlfNCBiiHc51xt6QbnAigHF6NouBstirbLfI7luTcCoCfA+K3ta8piunpTBcnvb8BlK/1QizelrTa6Vb5lX1lkifVd73xXjaTk10EtdKCzfrLiTMAAAAASUVORK5CYII=",
    },
    {
      category: t("homepage.categories.category6"),
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJklEQVR4nO2Zz2oUQRDGh6i5evEoXrxt2K4NexD1oAhevAmuCF48yJqqcTWI99UHUIM+gHgSfAQjiHgVURKdqgn7AP45xZvGbRkNcU0ymw6400P4fvAdm67vm+6a7pkkAQAAAAAAAAAQQN9P0XU9SWx3HOtjJ/Zsovo9h/ZbnJ0o5k5i4ub0DIm9JzEfQ471HaXZ6TjmxW440bVY5jdCEF1zbL1KzZPoRRIdxjb/VzpsSnahEvPt7uCgY/sa3/TmlWBfitomHoBjux3bbGkIrLdCfTR7+WFK7fxMLz+6qwCI7XVso6VifbXjA5zLZ4n1qWP7sT7mJ6U6HxyAY/0c3Wip9FNZ3a00P+tYn5dsn+/trh4KWwG1an5bAhiO1nqq/3K/S+0Sib7dcfuIHQsMILbJ8RqttcnZzdBxs+nK8T0XQNEUEYBgBXhsAUEP8GiCgreAx2tQcA7wOAgJToIeR2HBXcDjMiS4DXpch2WPfw+gVOcncR1ejW1yjFZHa210lqebqV4l0cF/C8CJfqiB0TItbVdz8W2QxK44sbxsbLs7OBIWANuDGhgt071xtXc6fh9JdtmJfvx3nD5JQiFZmanDP8HNKmpqXcsbQSb6fqoldo7E7hZfjYtgkt3gWB/FNryNFpKqaHSWp4ntRY2e/mK7++ZAZQFshCD6MOZ2WP+9tVC5+S09ge1+0YGJ7dvEjf+ZY6loeMF7HgAAAAAAAAAAACAp5xcRgmFjc9XjZwAAAABJRU5ErkJggg==",
    },
  ];

  return (
    <>
      {categoryList.map((item: CategoryProps, index: number) => (
        <Grid
          item
          xs={6}
          md={2}
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-offset="100"
          data-aos-duration="600"
        >
          <Box width="100%" height="100%" display="block">
            <StyledPaper elevation={3}>
              <CategoryContainer>
                <ShapeContainer />
                <Icon src={item.icon} alt={item.category} />
              </CategoryContainer>
              <Typography variant="subtitle1" align="center" marginTop="1rem">
                {item.category}
              </Typography>
            </StyledPaper>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default Category;
