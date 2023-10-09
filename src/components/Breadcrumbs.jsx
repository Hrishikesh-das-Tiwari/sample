import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" className="my-4">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="blue" className="cursor-pointer">
          title
        </Link>
        <Typography className="text-gray-600">last.title</Typography>
      </Breadcrumbs>
    </div>
  );
}
