import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { categories } from "../utility/constants";
import { Stack } from "@mui/material";

type category = {
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

type SideBarProps={
  selectedCategory:string,
  setSelectedCategory:React.Dispatch<React.SetStateAction<string>>
}

export const SideBar = ({selectedCategory,setSelectedCategory}:SideBarProps) => {
  const categoriesArray: category[] = categories;

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sm: "auto", md: "95%" },
        display: "flex",
        flexDirection: { md: "column" },
      }}
    >
      {categoriesArray.map((category, index) => (
        <button
          key={index}
          className="category-btn"
          style={{
            background: selectedCategory === category.name ? "#FC1503" : "",
            color: "white",
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "1rem",
            }}
          >
            {<category.icon />}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};
