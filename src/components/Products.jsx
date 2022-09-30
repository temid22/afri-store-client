import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";
import { generalRequest } from "../httpService";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filtered, sorted }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await generalRequest.get(
          cat ? `/parcel?category=${cat}` : "/parcel"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filtered).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filtered]);

  useEffect(() => {
    if (sorted === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sorted === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sorted]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};
export default Products;
