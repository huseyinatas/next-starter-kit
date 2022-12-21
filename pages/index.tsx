import ThemeSelector from "components/Global/ThemeSelector";
import { Row, Col } from "components/UI/GridSystem";
import Container from "components/UI/Container";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { decrement, increment } from "utils/CounterSlice";

function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1 className="text-red-400 dark:text-blue-400">Hello World</h1>
      <ThemeSelector />
      <Container content="true">
        <Row>
          <Col size="6">{count}</Col>
          <Col size="6">
            <button onClick={() => dispatch(decrement())}>Azalt</button>
            <button onClick={() => dispatch(increment())}>Artır</button>
          </Col>
        </Row>
      </Container>
      <Container content="false">
        <div  className="bg-red-500 h-32"></div>
      </Container>
    </>
  );
}
export default Home;
