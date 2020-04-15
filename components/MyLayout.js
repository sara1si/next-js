import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);
//many options: https://nextjs.org/learn/basics/using-shared-components/rendering-children-components
export default Layout;
