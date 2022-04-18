import styled from "styled-components";

interface BreadCrumbProps {
  title: string;
}

const Box = styled.div`
  background: linear-gradient(
    90deg,
    rgba(73, 62, 143, 0.5) 1.95%,
    rgba(213, 33, 127, 0.5) 100%
  );
  color: white;
`;

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title }) => {
  return (
    <Box className="py-3">
      <div className="container m-auto md:px-5 px-2 text-lg">{title}</div>
    </Box>
  );
};

export default BreadCrumb;
