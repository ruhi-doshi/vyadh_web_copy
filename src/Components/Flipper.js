import React from 'react';
import styled from 'styled-components';
import './Flipper.css';
const Flipper = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Title>Competitions</Title>
          <CardList>
            {cardData.map((card, index) => (
              <Card key={index}>
                <Front />
                <Back>
                  <img src={card.imageUrl} alt={`Star Wars ${index + 1}`} />
                </Back>
              </Card>
            ))}
          </CardList>
        </Col>
      </Row>
    </Container>
  );
};

const cardData = [
  { imageUrl: 'https://cdn.dribbble.com/users/1604504/screenshots/6946793/media/cd784e64a1fa6378f5eb17ec742a5c3c.gif' },
  { imageUrl: 'https://media.giphy.com/media/6QcwCXbbavxVC/giphy.gif' },
  { imageUrl: 'https://cdn.dribbble.com/users/363484/screenshots/1501204/stormtrooperdrbl2.gif' },
  { imageUrl: 'https://media.giphy.com/media/6QcwCXbbavxVC/giphy.gif' },
  ];

const Container = styled.div`
  max-width: 60%;
  float: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Row = styled.div``;

const Col = styled.div``;

const Title = styled.h1`
  color: #fff;
  font-family: sans-serif;
  font-size: 70px;
  text-shadow: 2px 2px 10px #1D2671, 4px 4px 15px #C33764;
`;

const CardList = styled.ul`
  perspective: 600px;
  margin: 0 auto;
`;

const Card = styled.li`
  width: 200px;
  height: 200px;
  float: left;
  list-style: none;
  margin-right: 20px;
  margin-bottom: 50px;
  position: relative;
  cursor: pointer;
  counter-increment: item;

  &:hover .front {
    z-index: 0;
    transform: rotateY(180deg);
  }

  &:hover .back {
    transform: rotateY(0);
  }
`;

const CardSide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  transition: all 0.5s;
  backface-visibility: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.30);
`;

const Front = styled(CardSide)`
  z-index: 3;
  color: #333;
  text-align: center;
  line-height: 200px;
  font-size: 80px;
  font-family: sans-serif;
  background: #C33764;
  background: -webkit-linear-gradient(45deg, #1D2671 10%, #C33764 80%);
  background: linear-gradient(45deg, #1D2671 10%, #C33764 80%);

  &:after {
    content: counter(item);
  }
`;

const Back = styled(CardSide)`
  transform: rotateY(180deg);

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 5px;
  }
`;

export default Flipper;